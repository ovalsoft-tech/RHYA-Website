import { Button } from "@/components/ui/button";
import { Smartphone, Shield, Trophy, Users, BarChart3 } from "lucide-react";
import { getMobileOS, trackDownloadEvent } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function AppShowcase() {
  const [os, setOs] = useState<"ios" | "android" | "other">("other");

  useEffect(() => {
    setOs(getMobileOS());
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
              <Smartphone className="h-4 w-4" />
              <span>Official Mobile App</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              The Digital Arsenal for <span className="text-primary">Youth Mobilization</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              The Renewed Hope Youth Ambassadors app is the central nervous system of our movement. Connect, collaborate, and campaign with precision using our state-of-the-art digital platform.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 h-fit">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Secure Verification</h4>
                  <p className="text-sm text-gray-600 mt-1">Biometric & NIN integration for a trusted network.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 h-fit">
                  <Trophy className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Gamified Action</h4>
                  <p className="text-sm text-gray-600 mt-1">Earn badges and rewards for grassroots impact.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 h-fit">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Ambassador Network</h4>
                  <p className="text-sm text-gray-600 mt-1">Connect with youth leaders across 774 LGAs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 h-fit">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Real-time Analytics</h4>
                  <p className="text-sm text-gray-600 mt-1">Track campaign performance and engagement.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <a 
                href="#" 
                className={`transition-all duration-300 hover:scale-105 focus:scale-105 active:scale-95 ${os === 'ios' ? 'ring-4 ring-primary/20 rounded-lg scale-110' : 'opacity-90 hover:opacity-100'}`}
                aria-label="Download on the App Store"
                onClick={() => trackDownloadEvent('ios', 'home')}
              >
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on the App Store" 
                  className="h-14 w-auto"
                />
              </a>
              <a 
                href="#" 
                className={`transition-all duration-300 hover:scale-105 focus:scale-105 active:scale-95 ${os === 'android' ? 'ring-4 ring-primary/20 rounded-lg scale-110' : 'opacity-90 hover:opacity-100'}`}
                aria-label="Get it on Google Play"
                onClick={() => trackDownloadEvent('android', 'home')}
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-14 w-auto"
                />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative z-10 w-[300px] md:w-[350px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-[3rem] blur-3xl opacity-30 transform rotate-6 scale-110"></div>
              <div className="relative z-10 w-full h-auto rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white transform hover:scale-105 transition-transform duration-500 bg-black">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                  poster="/images/rhya_app_hero.webp"
                >
                  <source src="/videos/app-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute bottom-10 -left-10 z-20 bg-white p-4 rounded-2xl shadow-xl animate-bounce duration-[4000ms] hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Active Users</div>
                  <div className="text-lg font-bold text-gray-900">981,580+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
