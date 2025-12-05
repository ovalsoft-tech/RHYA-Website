import { Briefcase, TrendingUp, Shield, Truck, GraduationCap, HeartPulse, Wifi, Users } from "lucide-react";

const areas = [
  {
    id: 1,
    title: "Jobs",
    description: "Creating opportunities through entrepreneurship and support for SMEs to reduce unemployment.",
    icon: Briefcase,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Economy",
    description: "Driving economic growth via diversification, industrialization, and innovation.",
    icon: TrendingUp,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Security",
    description: "Ensuring peace and safety by strengthening national security and combating insecurity.",
    icon: Shield,
    color: "bg-red-100 text-red-600",
  },
  {
    id: 4,
    title: "Infrastructure",
    description: "Developing critical infrastructure like roads, rail, and power to boost economic activities.",
    icon: Truck,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 5,
    title: "Education",
    description: "Raising standards, expanding access, and preparing Nigerians with future-ready skills.",
    icon: GraduationCap,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 6,
    title: "Health",
    description: "Improving access to quality healthcare services and promoting public health for all.",
    icon: HeartPulse,
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: 7,
    title: "Digital Economy",
    description: "Building digital skills and infrastructure for innovation and growth.",
    icon: Wifi,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    id: 8,
    title: "Social Welfare",
    description: "Lifting the vulnerable through poverty alleviation and inclusive policies.",
    icon: Users,
    color: "bg-purple-100 text-purple-600",
  },
];

export default function PriorityAreas() {
  return (
    <section id="priority-areas" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold text-lg tracking-wider uppercase mb-2">The Agenda</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mb-6">8 Priority Areas of Renewed Hope</h3>
          <p className="text-xl text-gray-600">
            These interconnected areas are designed to work together to achieve a more prosperous and secure Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area) => (
            <div 
              key={area.id} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              <div className={`w-14 h-14 rounded-xl ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <area.icon className="h-7 w-7" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-xs font-bold text-gray-500">
                  {area.id}
                </span>
                <h4 className="text-xl font-bold text-gray-900">{area.title}</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
