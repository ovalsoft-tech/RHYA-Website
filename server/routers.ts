import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";

// ============================================
// Server-Side Cache for X API
// ============================================
interface CacheEntry<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
}

class SimpleCache<T> {
  private cache: Map<string, CacheEntry<T>> = new Map();
  private ttlMs: number;

  constructor(ttlMinutes: number = 15) {
    this.ttlMs = ttlMinutes * 60 * 1000;
  }

  get(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) return null;
    
    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      console.log(`[Cache] Entry expired for key: ${key}`);
      return null;
    }
    
    console.log(`[Cache] HIT for key: ${key}, age: ${Math.round((Date.now() - entry.timestamp) / 1000)}s`);
    return entry.data;
  }

  set(key: string, data: T): void {
    const now = Date.now();
    this.cache.set(key, {
      data,
      timestamp: now,
      expiresAt: now + this.ttlMs,
    });
    console.log(`[Cache] SET for key: ${key}, TTL: ${this.ttlMs / 1000}s`);
  }

  clear(): void {
    this.cache.clear();
    console.log("[Cache] Cleared all entries");
  }

  getStats(): { size: number; ttlMinutes: number } {
    return {
      size: this.cache.size,
      ttlMinutes: this.ttlMs / 60000,
    };
  }
}

// Create a cache instance with 15-minute TTL
const tweetsCache = new SimpleCache<{
  user: { id: string; username: string; name: string };
  tweets: any[];
}>(15);

// ============================================
// X API Helper Function
// ============================================
async function fetchXTweets(username: string, maxResults: number = 5) {
  const bearerToken = process.env.X_BEARER_TOKEN;
  
  if (!bearerToken) {
    throw new Error("X_BEARER_TOKEN is not configured");
  }
  
  // First, get the user ID from username
  const userResponse = await fetch(
    `https://api.twitter.com/2/users/by/username/${username}`,
    {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    }
  );
  
  if (!userResponse.ok) {
    const error = await userResponse.json();
    throw new Error(`Failed to fetch user: ${JSON.stringify(error)}`);
  }
  
  const userData = await userResponse.json();
  const userId = userData.data?.id;
  
  if (!userId) {
    throw new Error("User not found");
  }
  
  // Then fetch tweets for that user
  const tweetsResponse = await fetch(
    `https://api.twitter.com/2/users/${userId}/tweets?max_results=${maxResults}&tweet.fields=created_at,public_metrics,attachments&expansions=attachments.media_keys&media.fields=url,preview_image_url,type`,
    {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    }
  );
  
  if (!tweetsResponse.ok) {
    const error = await tweetsResponse.json();
    throw new Error(`Failed to fetch tweets: ${JSON.stringify(error)}`);
  }
  
  const tweetsData = await tweetsResponse.json();
  
  // Map media to tweets
  const mediaMap = new Map();
  if (tweetsData.includes?.media) {
    for (const media of tweetsData.includes.media) {
      mediaMap.set(media.media_key, media);
    }
  }
  
  // Format tweets for frontend
  const tweets = (tweetsData.data || []).map((tweet: any) => {
    let mediaUrl = null;
    if (tweet.attachments?.media_keys?.length > 0) {
      const media = mediaMap.get(tweet.attachments.media_keys[0]);
      if (media) {
        mediaUrl = media.url || media.preview_image_url;
      }
    }
    
    return {
      id: tweet.id,
      text: tweet.text,
      createdAt: tweet.created_at,
      likes: tweet.public_metrics?.like_count || 0,
      retweets: tweet.public_metrics?.retweet_count || 0,
      replies: tweet.public_metrics?.reply_count || 0,
      mediaUrl,
    };
  });
  
  return {
    user: {
      id: userId,
      username: userData.data.username,
      name: userData.data.name,
    },
    tweets,
  };
}

// ============================================
// Cached X API Fetch with Fallback
// ============================================
async function getCachedTweets(username: string, maxResults: number) {
  const cacheKey = `tweets:${username}:${maxResults}`;
  
  // Try to get from cache first
  const cached = tweetsCache.get(cacheKey);
  if (cached) {
    return { ...cached, fromCache: true };
  }
  
  // Cache miss - fetch from API
  console.log(`[Cache] MISS for key: ${cacheKey}, fetching from X API...`);
  const freshData = await fetchXTweets(username, maxResults);
  
  // Store in cache
  tweetsCache.set(cacheKey, freshData);
  
  return { ...freshData, fromCache: false };
}

// ============================================
// Router Definition
// ============================================
export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // X (Twitter) API router with caching
  x: router({
    getTweets: publicProcedure
      .input(
        z.object({
          username: z.string().default("RH_Youth_"),
          maxResults: z.number().min(1).max(10).default(5),
        }).optional()
      )
      .query(async ({ input }) => {
        const username = input?.username || "RH_Youth_";
        const maxResults = input?.maxResults || 5;
        
        try {
          const result = await getCachedTweets(username, maxResults);
          return result;
        } catch (error) {
          console.error("Error fetching tweets:", error);
          // Return empty data on error so frontend can show fallback
          return {
            user: null,
            tweets: [],
            error: error instanceof Error ? error.message : "Failed to fetch tweets",
            fromCache: false,
          };
        }
      }),
    
    // Endpoint to get cache stats (useful for debugging)
    getCacheStats: publicProcedure.query(() => {
      return tweetsCache.getStats();
    }),
    
    // Endpoint to clear cache (admin use)
    clearCache: publicProcedure.mutation(() => {
      tweetsCache.clear();
      return { success: true, message: "Cache cleared" };
    }),
  }),
});

export type AppRouter = typeof appRouter;
