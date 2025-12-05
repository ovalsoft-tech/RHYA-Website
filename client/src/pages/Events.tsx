import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ArrowRight, Video } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Youth Leadership Summit 2025",
    category: "Workshop",
    date: "March 15, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "International Conference Centre, Abuja",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop",
    description: "Join over 500 youth leaders for a day of strategic planning and capacity building focused on the Renewed Hope Agenda.",
    type: "In-Person"
  },
  {
    id: 2,
    title: "Digital Skills for Grassroots Mobilization",
    category: "Webinar",
    date: "March 22, 2025",
    time: "4:00 PM - 6:00 PM",
    location: "Zoom Live Stream",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop",
    description: "Learn how to leverage social media and digital tools to amplify our message and engage with your local community effectively.",
    type: "Virtual"
  },
  {
    id: 3,
    title: "Policy Awareness Town Hall",
    category: "Town Hall",
    date: "April 05, 2025",
    time: "11:00 AM - 1:00 PM",
    location: "Lagos City Hall, Lagos",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop",
    description: "An open forum to discuss the latest government policies on education and youth employment, featuring guest speakers from the ministry.",
    type: "Hybrid"
  },
  {
    id: 4,
    title: "Entrepreneurship & Grant Writing Masterclass",
    category: "Workshop",
    date: "April 12, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Tech Hub, Kano",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop",
    description: "Practical session on how to access BOI and SMEDAN grants. Learn the secrets of writing winning proposals for your business.",
    type: "In-Person"
  }
];

export default function Events() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Upcoming <span className="text-secondary">Events</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              Connect, learn, and grow. Join our workshops, webinars, and town halls designed to empower the next generation of leaders.
            </p>
          </div>
        </section>

        {/* Events List */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              {events.map((event) => (
                <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col md:flex-row h-full">
                  <div className="md:w-2/5 relative h-48 md:h-auto">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide">
                      {event.category}
                    </div>
                  </div>
                  <div className="p-6 md:w-3/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span>{event.date}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <Clock className="h-4 w-4 text-accent" />
                        <span>{event.time}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                        {event.type === "Virtual" ? <Video className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gray-900 hover:bg-primary text-white transition-colors rounded-xl">
                      Register Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
