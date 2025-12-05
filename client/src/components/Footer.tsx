import { Facebook, Twitter, Instagram, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                {/* Simplified Logo Icon for Footer */}
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 22H22L12 2Z" fill="#00B050" />
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight">RHYA</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A grassroots-driven national movement mobilizing Nigerian youth to participate in national development through the Renewed Hope Agenda.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#priority-areas" className="text-gray-300 hover:text-white transition-colors">Priority Areas</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Partner Benefits</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Volunteer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-accent">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Media Kit</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Registration Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-gray-300">RHP HQ,<br />FCT-Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:admin@rhp.com.ng" className="text-gray-300 hover:text-white transition-colors">admin@rhp.com.ng</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Renewed Hope Youth Ambassadors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
