
import Hero from "@/components/Hero";
import PriorityAreas from "@/components/PriorityAreas";
import AppShowcase from "@/components/AppShowcase";
import Benefits from "@/components/Benefits";
import SocialFeed from "@/components/SocialFeed";


export default function Home() {
  return (
    <div className="font-sans">
      
      <main className="flex-grow">
        <Hero />
        <AppShowcase />
        <PriorityAreas />
        <Benefits />
        <SocialFeed />
        

      </main>
      
    </div>
  );
}
