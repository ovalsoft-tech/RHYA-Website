import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PriorityAreas from "@/components/PriorityAreas";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PriorityAreas />
        <Benefits />
        
        {/* CTA Section */}
        <section className="py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Join thousands of young Nigerians who are already driving change in their communities. Your voice matters.
            </p>
            <button 
              className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-12 py-4 rounded-full shadow-xl transition-transform hover:scale-105"
              onClick={() => window.open("https://web.rhp.com.ng/", "_blank")}
            >
              Join Now - It's Free
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
