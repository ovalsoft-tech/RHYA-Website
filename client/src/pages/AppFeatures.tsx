import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Trophy, Users, BarChart3, Smartphone, Globe, Zap, Lock } from "lucide-react";

export default function AppFeatures() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-secondary text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=3387&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-accent mb-6">
              <Smartphone className="h-4 w-4" />
              <span>Version 1.0 Available Now</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              A Strategic Digital Arsenal for <span className="text-primary">2027</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              The Renewed Hope Youth Ambassadors application is a revolutionary platform designed to secure overwhelming victory through data-driven mobilization and grassroots engagement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white h-14 px-8 rounded-full text-lg font-bold">
                Download App
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 h-14 px-8 rounded-full text-lg font-bold">
                View Documentation
              </Button>
            </div>
          </div>
        </section>

        {/* Core Features Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-primary font-bold text-lg tracking-wider uppercase mb-2">Core Capabilities</h2>
              <h3 className="text-4xl font-extrabold text-gray-900">Engineered for Victory</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Security & Verification</h4>
                <p className="text-gray-600 leading-relaxed">
                  Multi-layered authentication with biometric login, NIN/BVN document verification, and fraud prevention systems to ensure a trusted network.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Trophy className="h-7 w-7 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Gamification System</h4>
                <p className="text-gray-600 leading-relaxed">
                  Engaging leaderboards, achievement badges, and reward mechanisms like 'Operation Capture-Your-Ward' to drive sustained participation.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Ambassador Network</h4>
                <p className="text-gray-600 leading-relaxed">
                  Interactive network visualization showing connections across Nigeria with social media integration for amplified messaging.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="h-7 w-7 text-orange-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Real-Time Analytics</h4>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive admin dashboard with user metrics, geographic heat maps, and campaign performance tracking.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="h-7 w-7 text-cyan-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Geolocation Mapping</h4>
                <p className="text-gray-600 leading-relaxed">
                  Ward-level tracking and electoral mapping to identify coverage gaps and optimize resource allocation effectively.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="h-7 w-7 text-red-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Offline-First Architecture</h4>
                <p className="text-gray-600 leading-relaxed">
                  Native iOS and Android apps designed to work seamlessly even in areas with poor internet connectivity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Showcase Section */}
        <section className="py-24 bg-gray-900 text-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-[100px] opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop" 
                  alt="App Analytics Dashboard" 
                  className="relative z-10 rounded-2xl shadow-2xl border border-white/10 w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Data-Driven <span className="text-primary">Dominance</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Our platform transforms raw data into actionable insights. From tracking volunteer engagement to monitoring sentiment across 774 LGAs, the RHYA app gives leadership the visibility needed to make strategic decisions.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <Lock className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-gray-300">End-to-end encryption for all data</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-gray-300">Instant push notifications for mobilization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-gray-300">Offline mode for remote areas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
