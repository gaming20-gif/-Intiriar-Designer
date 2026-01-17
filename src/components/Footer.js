
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const links = ["Home", "Portfolio", "Services", "About", "Process", "Contact"];

  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo + Description */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-4">
              LUXE INTERIORS
            </div>
            <p className="text-neutral-400">
              Creating beautiful, functional spaces that inspire and delight.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              {links.map((link) => (
                <div key={link}>
                  <button
                    onClick={() => navigate(`/${link.toLowerCase()}`)}
                    className="text-neutral-400 hover:text-amber-400 transition-colors"
                  >
                    {link}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-neutral-400">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>hello@luxeinteriors.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>New York, NY</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-amber-600 hover:to-orange-500 transition-all"
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-500">
          <p>&copy; 2025 Luxe Interiors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
