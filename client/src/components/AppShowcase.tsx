import { Button } from "@/components/ui/button";
import { Smartphone, Shield, Trophy, Users, BarChart3 } from "lucide-react";

export default function AppShowcase() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
              <Smartphone className="h-4 w-4" />
              <span>Official Mobile App</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              The Digital Arsenal for <span className="text-primary">Youth Mobilization</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              The Renewed Hope Youth Ambassadors app is the central nervous system of our movement. Connect, collaborate, and campaign with precision using our state-of-the-art digital platform.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
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

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                className="bg-black hover:bg-gray-800 text-white h-14 px-6 rounded-xl flex items-center gap-3 transition-transform hover:scale-105"
                onClick={() => window.open("#", "_blank")}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.93 3.69-.93 2.4.16 3.37 1.62 3.42 1.67-3.12 1.8-2.57 6.52.31 7.67-.24.79-.54 1.54-.95 2.27-.64 1.15-1.29 2.19-2.55 2.19zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] font-medium opacity-80">Download on the</div>
                  <div className="text-sm font-bold leading-none">App Store</div>
                </div>
              </Button>
              
              <Button 
                className="bg-black hover:bg-gray-800 text-white h-14 px-6 rounded-xl flex items-center gap-3 transition-transform hover:scale-105"
                onClick={() => window.open("#", "_blank")}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186c-.185.185-.425.207-.556.076-.131-.131-.109-.371.076-.556L12.958 12 3.129 2.171c-.185-.185-.207-.425-.076-.556.131-.131.371-.109.556.076zM14.625 12L4.444 1.818c.556-.278 1.204-.278 1.759 0l11.704 6.759c.556.315.907.907.907 1.537s-.352 1.222-.907 1.537L6.204 18.37c-.556.278-1.204.278-1.759 0L14.625 12z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] font-medium opacity-80">GET IT ON</div>
                  <div className="text-sm font-bold leading-none">Google Play</div>
                </div>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-10 w-[300px] md:w-[350px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-[3rem] blur-3xl opacity-30 transform rotate-6 scale-110"></div>
              <img 
                src="/images/rhya_app_hero.webp" 
                alt="RHYA App Interface" 
                className="relative z-10 w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
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
