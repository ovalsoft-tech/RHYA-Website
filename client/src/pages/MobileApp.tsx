import { Button } from "@/components/ui/button";


import { useEffect, useState } from "react";

export default function MobileApp() {
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      setIsIOS(true);
    } else if (/android/i.test(userAgent)) {
      setIsAndroid(true);
    }
  }, []);

  return (
    <div className="bg-background">
      
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                The RHYA Mobile App
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Connect, engage, and drive change with the official Renewed Hope Youth Ambassadors mobile application. Stay updated with the latest news, events, and opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="https://apps.apple.com/ng/app/rhya/id6736586340" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`transition-transform hover:scale-105 ${isIOS ? 'ring-4 ring-primary/50 rounded-xl' : ''}`}
                >
                  <img 
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1727395200" 
                    alt="Download on the App Store" 
                    className="h-14 w-auto"
                  />
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.rhya.mobile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`transition-transform hover:scale-105 ${isAndroid ? 'ring-4 ring-primary/50 rounded-xl' : ''}`}
                >
                  <img 
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                    alt="Get it on Google Play" 
                    className="h-14 w-auto"
                  />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Real-time Updates</h3>
                  <p className="text-muted-foreground">Get instant notifications about new initiatives, events, and opportunities in your area.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Community Network</h3>
                  <p className="text-muted-foreground">Connect with other ambassadors and youth leaders across Nigeria.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Resource Center</h3>
                  <p className="text-muted-foreground">Access educational materials, policy documents, and training resources.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Direct Engagement</h3>
                  <p className="text-muted-foreground">Participate in polls, surveys, and discussions that shape national youth policy.</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative flex justify-center">
              <div className="relative w-[300px] md:w-[350px] aspect-[9/19] bg-black rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-6 bg-gray-800 rounded-b-xl z-20"></div>
                <img 
                  src="/images/rhya_app_hero.webp" 
                  alt="RHYA App Interface" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-primary/10 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
}
