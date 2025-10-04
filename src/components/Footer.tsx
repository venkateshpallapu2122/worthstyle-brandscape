import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent">
              Worthstyle
            </h3>
            <p className="text-sm opacity-80">
              Premium athleisure for the modern lifestyle. Where performance meets style, comfort meets confidence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-smooth"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:info@worthstyle.com"
                className="hover:text-accent transition-smooth"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-smooth">
                  Achievements
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-smooth">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-smooth">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-smooth">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-smooth">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-smooth">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm opacity-80">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 Fashion Avenue, Style District, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-sm opacity-80">
                <Phone size={16} className="flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-sm opacity-80">
                <Mail size={16} className="flex-shrink-0" />
                <span>info@worthstyle.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-80">
            © {new Date().getFullYear()} Worthstyle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
