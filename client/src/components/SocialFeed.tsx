import { Heart, MessageCircle, Share2, RefreshCw } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { useState, useMemo } from "react";
import { toast } from "sonner";

// X (Twitter) icon SVG
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-gray-900">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Fallback posts for when API fails
const fallbackPosts = [
  {
    id: "1",
    text: "The youth are the heartbeat of our nation. Today's town hall in Kano was electric! ⚡ Over 5,000 ambassadors gathered to discuss the future of digital economy. #RenewedHope #YouthPower",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    likes: 1200,
    retweets: 342,
    replies: 89,
    mediaUrl: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "2",
    text: "Empowering the next generation of tech leaders. 💻 Our coding bootcamp in Lagos kicked off today with amazing energy! #TechSkills #FutureReady",
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    likes: 4500,
    retweets: 128,
    replies: 45,
    mediaUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "3",
    text: "Big announcement! 📢 We are launching the 'Green Nigeria' initiative next week. Join us as we plant 1 million trees across 36 states. Let's make our environment sustainable for the future. 🌳🌍",
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    likes: 892,
    retweets: 156,
    replies: 67,
    mediaUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2613&auto=format&fit=crop",
  },
];

function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString();
}

function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
  return num.toString();
}

// Loading skeleton component
function PostSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden animate-pulse">
      <div className="p-4 flex items-center gap-3 border-b border-gray-50">
        <div className="w-10 h-10 rounded-full bg-gray-200" />
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
          <div className="h-3 bg-gray-200 rounded w-16" />
        </div>
        <div className="w-5 h-5 bg-gray-200 rounded" />
      </div>
      <div className="aspect-video bg-gray-200" />
      <div className="p-5">
        <div className="h-4 bg-gray-200 rounded w-full mb-2" />
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
        <div className="h-3 bg-gray-200 rounded w-16" />
      </div>
      <div className="p-4 border-t border-gray-50 flex items-center justify-between">
        <div className="h-4 bg-gray-200 rounded w-12" />
        <div className="h-4 bg-gray-200 rounded w-12" />
        <div className="h-4 bg-gray-200 rounded w-6" />
      </div>
    </div>
  );
}

export default function SocialFeed() {
  const [showFallback, setShowFallback] = useState(false);
  
  // Memoize the query input to prevent infinite re-renders
  const queryInput = useMemo(() => ({ username: "RH_Youth_", maxResults: 5 }), []);
  
  const { data, isLoading, error, refetch, isFetching } = trpc.x.getTweets.useQuery(
    queryInput,
    {
      staleTime: 5 * 60 * 1000, // Cache for 5 minutes
      refetchOnWindowFocus: false,
      retry: 1,
    }
  );

  // Determine which posts to show
  const posts = useMemo(() => {
    if (showFallback || !data?.tweets?.length) {
      return fallbackPosts;
    }
    return data.tweets;
  }, [data, showFallback]);

  const isUsingFallback = showFallback || !data?.tweets?.length;

  // Show toast when using fallback data
  const handleRefresh = async () => {
    setShowFallback(false);
    try {
      await refetch();
      if (data && 'error' in data && data.error) {
        toast.info("Showing cached content", {
          description: "Live feed is temporarily unavailable.",
        });
      }
    } catch {
      toast.error("Unable to refresh feed");
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold text-lg tracking-wider uppercase mb-2">Social Pulse</h2>
          <h3 className="text-4xl font-extrabold text-gray-900">Join the Conversation</h3>
          <p className="text-gray-600 mt-4 text-lg">
            Follow the movement in real-time. See what our ambassadors are up to across the nation.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <a
              href="https://x.com/RH_Youth_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <XIcon />
              <span className="font-medium">@RH_Youth_</span>
            </a>
            <button
              onClick={handleRefresh}
              disabled={isFetching}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`h-4 w-4 ${isFetching ? 'animate-spin' : ''}`} />
              <span className="text-sm font-medium">Refresh</span>
            </button>
          </div>
          {isUsingFallback && !isLoading && (
            <p className="text-sm text-amber-600 mt-2">
              Showing recent highlights. Live feed updating soon.
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {isLoading ? (
            <>
              <PostSkeleton />
              <PostSkeleton />
              <PostSkeleton />
            </>
          ) : (
            posts.slice(0, 3).map((post: any) => (
              <div key={post.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full">
                {/* Header */}
                <div className="p-4 flex items-center gap-3 border-b border-gray-50">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img src="/upload/Logo-3.svg" alt="Avatar" className="w-full h-full object-cover p-1" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 text-sm">
                      {data?.user?.name || "RHYA Official"}
                    </div>
                    <div className="text-xs text-gray-500">
                      @{data?.user?.username || "RH_Youth_"}
                    </div>
                  </div>
                  <XIcon />
                </div>

                {/* Image */}
                {post.mediaUrl && (
                  <div className="relative aspect-video bg-gray-100">
                    <img
                      src={post.mediaUrl}
                      alt="Post content"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-5 flex-grow">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {post.text}
                  </p>
                  <div className="text-xs text-gray-400 font-medium">
                    {formatTimeAgo(post.createdAt)}
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-50 flex items-center justify-between text-gray-500 text-sm">
                  <div className="flex items-center gap-1.5 hover:text-red-500 transition-colors cursor-pointer">
                    <Heart className="h-4 w-4" />
                    <span>{formatNumber(post.likes)}</span>
                  </div>
                  <div className="flex items-center gap-1.5 hover:text-blue-500 transition-colors cursor-pointer">
                    <MessageCircle className="h-4 w-4" />
                    <span>{formatNumber(post.replies)}</span>
                  </div>
                  <div className="hover:text-green-500 transition-colors cursor-pointer">
                    <Share2 className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* View more link */}
        <div className="text-center mt-12">
          <a
            href="https://x.com/RH_Youth_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            <XIcon />
            View more on X
          </a>
        </div>
      </div>
    </section>
  );
}
