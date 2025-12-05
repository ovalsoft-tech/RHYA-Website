import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Access FGN-Renewed Hope programs (BOI, BOA, SMEDAN, NELFUND)",
  "Direct communication channel with RHP Leadership",
  "Exclusive invitations to strategy sessions and trainings",
  "Personalized 'RHP Certificate of Partnership'",
  "Connect with a network of patriotic change-makers",
  "Track and score your impact on national development"
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
                alt="Youth leadership" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                alt="Collaborative meeting" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-primary font-bold text-lg tracking-wider uppercase mb-2">Why Join?</h2>
              <h3 className="text-4xl font-extrabold text-gray-900 mb-6">Become a Partner in Progress</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                As a Youth Ambassador, you're not just a spectator—you're an active participant in building a better, stronger, and more inclusive Nigeria.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-lg text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 h-14 rounded-full shadow-lg shadow-primary/20"
                onClick={() => window.open("https://web.rhp.com.ng/", "_blank")}
              >
                Join the Movement
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
