import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=3387&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-accent blur-[100px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-secondary blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-accent">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Join the Movement
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Partner with the <span className="text-accent">Vision</span>,<br />
            Power the <span className="text-secondary">Change</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 max-w-xl leading-relaxed opacity-90">
            Empowering Nigerian youth to drive the Renewed Hope Agenda. Be the voice, be the action, be the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 h-14 rounded-full shadow-lg shadow-accent/20 transition-all hover:scale-105"
              onClick={() => window.open("https://web.rhp.com.ng/", "_blank")}
            >
              Become an Ambassador
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 h-14 rounded-full"
            >
              Learn More
            </Button>
          </div>

          <div className="pt-8 flex items-center gap-8 text-sm font-medium text-gray-200">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-accent" />
              <span>20,000+ Partners</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-secondary" />
              <span>Nationwide Reach</span>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2574&auto=format&fit=crop" 
              alt="Nigerian youth collaborating" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="font-bold text-lg">Grassroots Mobilization</p>
                <p className="text-sm opacity-80">Connecting youth across 36 states</p>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
            <Zap className="h-8 w-8 text-accent fill-accent" />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-secondary p-4 rounded-2xl shadow-xl animate-pulse">
            <span className="text-primary font-bold text-xl">8</span>
            <span className="block text-primary text-xs font-bold">Priority Areas</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
