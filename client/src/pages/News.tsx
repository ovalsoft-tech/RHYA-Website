import { useState, useEffect } from "react";
import { client, urlFor } from "@/lib/sanity";
import { Calendar, User, ArrowRight, Loader2, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface NewsPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  author: string;
  mainImage: any;
  excerpt: string;
  category: string;
}

export default function News() {
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Technology", "Events", "Partnership", "Community", "Press Release"];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Query for news posts
        const query = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          publishedAt,
          author,
          mainImage,
          excerpt,
          category
        }`;
        
        const data = await client.fetch(query);
        setPosts(data);
        setFilteredPosts(data);
      } catch (err) {
        console.error("Failed to fetch news:", err);
        // Fallback data for development/demo if API fails or is not set up
        const fallbackData = [
          {
            _id: "1",
            title: "RHYA Launches Nationwide Digital Skills Initiative",
            slug: { current: "digital-skills-launch" },
            publishedAt: "2025-11-15T10:00:00Z",
            author: "RHYA Admin",
            mainImage: null,
            excerpt: "Empowering 100,000 youth with cutting-edge digital competencies to drive the future economy.",
            category: "Technology"
          },
          {
            _id: "2",
            title: "Youth Ambassadors Summit 2025: Key Takeaways",
            slug: { current: "summit-2025-recap" },
            publishedAt: "2025-10-28T14:30:00Z",
            author: "Sarah Johnson",
            mainImage: null,
            excerpt: "Highlights from our annual gathering of youth leaders from across all 36 states.",
            category: "Events"
          },
          {
            _id: "3",
            title: "Partnership Announcement: Tech for Good",
            slug: { current: "tech-partnership" },
            publishedAt: "2025-09-12T09:15:00Z",
            author: "Michael Okon",
            mainImage: null,
            excerpt: "Collaborating with leading tech firms to provide mentorship and resources for young innovators.",
            category: "Partnership"
          },
          {
            _id: "4",
            title: "Community Clean-up Drive in Lagos",
            slug: { current: "lagos-cleanup" },
            publishedAt: "2025-08-05T08:00:00Z",
            author: "Chioma Adebayo",
            mainImage: null,
            excerpt: "Over 500 volunteers gathered to clean up local communities and promote environmental awareness.",
            category: "Community"
          },
          {
            _id: "5",
            title: "Press Release: New Youth Policy Framework",
            slug: { current: "youth-policy-framework" },
            publishedAt: "2025-07-20T11:00:00Z",
            author: "Press Office",
            mainImage: null,
            excerpt: "The government announces a new policy framework to support youth entrepreneurship and innovation.",
            category: "Press Release"
          }
        ];
        setPosts(fallbackData);
        setFilteredPosts(fallbackData);
        setError("Using offline content. Please check your connection for live updates.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.category === activeCategory));
    }
  }, [activeCategory, posts]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">News & Updates</h1>
          <p className="text-xl text-gray-600">
            Stay informed about the latest initiatives, success stories, and announcements from the Renewed Hope Youth Ambassadors.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-md transform scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {error && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 max-w-4xl mx-auto">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredPosts.map((post) => (
              <article key={post._id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full border border-gray-100">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  {post.mainImage ? (
                    <img 
                      src={urlFor(post.mainImage).width(600).height(400).url()} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/10">
                      <span className="text-primary font-medium">No Image</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                    {post.category || "News"}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                    {post.author && (
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    )}
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-primary transition-colors">
                    <Link href={`/news/${post.slug.current}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <Button variant="outline" className="w-full group mt-auto" asChild>
                    <Link href={`/news/${post.slug.current}`}>
                      Read Article 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 max-w-2xl mx-auto">
            <div className="bg-gray-50 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-500 mb-6">
              We couldn't find any articles in the "{activeCategory}" category.
            </p>
            <Button onClick={() => setActiveCategory("All")} variant="outline">
              View all articles
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
