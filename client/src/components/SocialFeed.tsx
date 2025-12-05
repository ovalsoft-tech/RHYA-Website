import { Twitter, Instagram, Facebook, Heart, MessageCircle, Share2 } from "lucide-react";

const posts = [
  {
    id: 1,
    platform: "twitter",
    user: "RHYA Official",
    handle: "@RHYA_NG",
    content: "The youth are the heartbeat of our nation. Today's town hall in Kano was electric! ⚡ Over 5,000 ambassadors gathered to discuss the future of digital economy. #RenewedHope #YouthPower",
    image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2670&auto=format&fit=crop",
    likes: "1.2k",
    comments: "342",
    time: "2h ago"
  },
  {
    id: 2,
    platform: "instagram",
    user: "Renewed Hope Youth",
    handle: "@renewedhopeyouth",
    content: "Empowering the next generation of tech leaders. 💻 Our coding bootcamp in Lagos kicked off today with amazing energy! Swipe to see the highlights. 📸 #TechSkills #FutureReady",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop",
    likes: "4.5k",
    comments: "128",
    time: "5h ago"
  },
  {
    id: 3,
    platform: "facebook",
    user: "RHYA Community",
    handle: "@rhyacommunity",
    content: "Big announcement! 📢 We are launching the 'Green Nigeria' initiative next week. Join us as we plant 1 million trees across 36 states. Let's make our environment sustainable for the future. 🌳🌍",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2613&auto=format&fit=crop",
    likes: "892",
    comments: "156",
    time: "1d ago"
  }
];

const PlatformIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "twitter": return <Twitter className="h-5 w-5 text-blue-400" />;
    case "instagram": return <Instagram className="h-5 w-5 text-pink-600" />;
    case "facebook": return <Facebook className="h-5 w-5 text-blue-600" />;
    default: return null;
  }
};

export default function SocialFeed() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold text-lg tracking-wider uppercase mb-2">Social Pulse</h2>
          <h3 className="text-4xl font-extrabold text-gray-900">Join the Conversation</h3>
          <p className="text-gray-600 mt-4 text-lg">
            Follow the movement in real-time. See what our ambassadors are up to across the nation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full">
              {/* Header */}
              <div className="p-4 flex items-center gap-3 border-b border-gray-50">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                   <img src="/favicon.svg" alt="Avatar" className="w-full h-full object-cover p-1" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900 text-sm">{post.user}</div>
                  <div className="text-xs text-gray-500">{post.handle}</div>
                </div>
                <PlatformIcon platform={post.platform} />
              </div>

              {/* Image */}
              <div className="relative aspect-video bg-gray-100">
                <img 
                  src={post.image} 
                  alt="Post content" 
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex-grow">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {post.content}
                </p>
                <div className="text-xs text-gray-400 font-medium">{post.time}</div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-50 flex items-center justify-between text-gray-500 text-sm">
                <div className="flex items-center gap-1.5 hover:text-red-500 transition-colors cursor-pointer">
                  <Heart className="h-4 w-4" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1.5 hover:text-blue-500 transition-colors cursor-pointer">
                  <MessageCircle className="h-4 w-4" />
                  <span>{post.comments}</span>
                </div>
                <div className="hover:text-green-500 transition-colors cursor-pointer">
                  <Share2 className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
