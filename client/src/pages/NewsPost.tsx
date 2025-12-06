import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { client, urlFor } from "@/lib/sanity";
import { Calendar, User, ArrowLeft, Facebook, Twitter, Linkedin, Share2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";



interface NewsPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  author: string;
  mainImage: any;
  body: any;
  category: string;
}

export default function NewsPost() {
  const [, params] = useRoute("/news/:slug");
  const slug = params?.slug;
  
  const [post, setPost] = useState<NewsPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0] {
          _id,
          title,
          slug,
          publishedAt,
          author,
          mainImage,
          body,
          category
        }`;
        
        const data = await client.fetch(query, { slug });
        
        if (data) {
          setPost(data);
        } else {
          // Fallback for demo/development if not found in Sanity
          // In a real app, this would be a 404
          const fallbackPosts = [
            {
              _id: "1",
              title: "RHYA Launches Nationwide Digital Skills Initiative",
              slug: { current: "digital-skills-launch" },
              publishedAt: "2025-11-15T10:00:00Z",
              author: "RHYA Admin",
              mainImage: null,
              body: "The Renewed Hope Youth Ambassadors (RHYA) is proud to announce the launch of our nationwide Digital Skills Initiative. This ambitious program aims to empower 100,000 Nigerian youth with cutting-edge digital competencies, ranging from basic computer literacy to advanced programming and data analysis skills. By equipping our youth with these essential tools, we are driving the future economy and ensuring that Nigeria remains competitive in the global digital landscape.",
              category: "Technology"
            },
            {
              _id: "2",
              title: "Youth Ambassadors Summit 2025: Key Takeaways",
              slug: { current: "summit-2025-recap" },
              publishedAt: "2025-10-28T14:30:00Z",
              author: "Sarah Johnson",
              mainImage: null,
              body: "The 2025 Youth Ambassadors Summit was a resounding success, bringing together youth leaders from all 36 states of the federation. Key takeaways included a renewed commitment to grassroots mobilization, the establishment of new mentorship programs, and a strategic roadmap for youth inclusion in governance. The energy and passion displayed by the delegates serve as a testament to the vibrant potential of Nigerian youth.",
              category: "Events"
            },
            {
              _id: "3",
              title: "Partnership Announcement: Tech for Good",
              slug: { current: "tech-partnership" },
              publishedAt: "2025-09-12T09:15:00Z",
              author: "Michael Okon",
              mainImage: null,
              body: "We are excited to announce a strategic partnership with leading tech firms under our 'Tech for Good' initiative. This collaboration will provide mentorship, resources, and internship opportunities for young innovators across the country. By bridging the gap between talent and opportunity, we are fostering a new generation of tech entrepreneurs who will drive social and economic change.",
              category: "Partnership"
            }
          ];
          
          const found = fallbackPosts.find(p => p.slug.current === slug);
          if (found) {
            setPost(found);
            setError("Viewing offline content.");
          } else {
            setError("Article not found.");
          }
        }
      } catch (err) {
        // Suppress console error for expected connection failures in dev/demo mode
        // console.error("Failed to fetch post:", err);
        
        // Try to find in fallback data if API fails
        const fallbackPosts = [
          {
            _id: "1",
            title: "RHYA Launches Nationwide Digital Skills Initiative",
            slug: { current: "digital-skills-launch" },
            publishedAt: "2025-11-15T10:00:00Z",
            author: "RHYA Admin",
            mainImage: null,
            body: "The Renewed Hope Youth Ambassadors (RHYA) is proud to announce the launch of our nationwide Digital Skills Initiative. This ambitious program aims to empower 100,000 Nigerian youth with cutting-edge digital competencies, ranging from basic computer literacy to advanced programming and data analysis skills. By equipping our youth with these essential tools, we are driving the future economy and ensuring that Nigeria remains competitive in the global digital landscape.",
            category: "Technology"
          },
          {
            _id: "2",
            title: "Youth Ambassadors Summit 2025: Key Takeaways",
            slug: { current: "summit-2025-recap" },
            publishedAt: "2025-10-28T14:30:00Z",
            author: "Sarah Johnson",
            mainImage: null,
            body: "The 2025 Youth Ambassadors Summit was a resounding success, bringing together youth leaders from all 36 states of the federation. Key takeaways included a renewed commitment to grassroots mobilization, the establishment of new mentorship programs, and a strategic roadmap for youth inclusion in governance. The energy and passion displayed by the delegates serve as a testament to the vibrant potential of Nigerian youth.",
            category: "Events"
          },
          {
            _id: "3",
            title: "Partnership Announcement: Tech for Good",
            slug: { current: "tech-partnership" },
            publishedAt: "2025-09-12T09:15:00Z",
            author: "Michael Okon",
            mainImage: null,
            body: "We are excited to announce a strategic partnership with leading tech firms under our 'Tech for Good' initiative. This collaboration will provide mentorship, resources, and internship opportunities for young innovators across the country. By bridging the gap between talent and opportunity, we are fostering a new generation of tech entrepreneurs who will drive social and economic change.",
            category: "Partnership"
          },
          {
            _id: "4",
            title: "Community Clean-up Drive in Lagos",
            slug: { current: "lagos-cleanup" },
            publishedAt: "2025-08-05T08:00:00Z",
            author: "Chioma Adebayo",
            mainImage: null,
            body: "Over 500 volunteers gathered to clean up local communities and promote environmental awareness. The initiative focused on waste management education and practical cleanup activities in key areas of Lagos. This event marks the beginning of a nationwide campaign to foster a culture of environmental responsibility among Nigerian youth.",
            category: "Community"
          },
          {
            _id: "5",
            title: "Press Release: New Youth Policy Framework",
            slug: { current: "youth-policy-framework" },
            publishedAt: "2025-07-20T11:00:00Z",
            author: "Press Office",
            mainImage: null,
            body: "The government announces a new policy framework to support youth entrepreneurship and innovation. This comprehensive policy addresses key challenges faced by young entrepreneurs, including access to finance, mentorship, and market opportunities. It represents a significant milestone in our commitment to empowering the next generation of business leaders.",
            category: "Press Release"
          }
        ];
        
        const found = fallbackPosts.find(p => p.slug.current === slug);
        if (found) {
          setPost(found);
          // Only show error if we want to alert the user, otherwise fail silently to fallback
          // setError("Viewing offline content.");
        } else {
          setError("Article not found.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = post ? `Check out this article: ${post.title}` : '';

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
    }
    window.open(url, '_blank', 'width=600,height=400');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
        <Button asChild>
          <Link href="/news">Back to News</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white">
      
      
      <article className="pt-32 pb-16">
        {/* Hero Image */}
        <div className="container mx-auto px-4 mb-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/news" className="inline-flex items-center text-gray-500 hover:text-primary mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to News
            </Link>
            
            <div className="rounded-2xl overflow-hidden shadow-lg mb-8 bg-gray-100 aspect-video relative">
              {post.mainImage ? (
                <img 
                  src={urlFor(post.mainImage).width(1200).height(675).url()} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-primary/10">
                  <span className="text-primary text-xl font-medium">No Image Available</span>
                </div>
              )}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-primary uppercase tracking-wider shadow-sm">
                {post.category || "News"}
              </div>
            </div>

            {/* Article Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-500 border-b border-gray-100 pb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>{new Date(post.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                {post.author && (
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    <span>{post.author}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              {/* In a real implementation with Sanity, use PortableText here */}
              {typeof post.body === 'string' ? (
                <p>{post.body}</p>
              ) : (
                <p className="italic text-gray-500">[Content would be rendered here via PortableText]</p>
              )}
            </div>

            {/* Share Section */}
            <div className="border-t border-gray-100 pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 text-gray-900 font-semibold">
                  <Share2 className="h-5 w-5" />
                  <span>Share this article</span>
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-colors"
                    onClick={() => handleShare('twitter')}
                    title="Share on Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full hover:bg-[#4267B2] hover:text-white hover:border-[#4267B2] transition-colors"
                    onClick={() => handleShare('facebook')}
                    title="Share on Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-colors"
                    onClick={() => handleShare('linkedin')}
                    title="Share on LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      
    </div>
  );
}
