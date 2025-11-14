import { Link } from "react-router-dom";
import { BookOpen, Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30 pattern-islamic">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold">Qari M. Nadeem</span>
                <span className="text-xs text-muted-foreground">Quran Academy</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              قاری محمد ندیم مجید
            </p>
            <p className="text-sm text-muted-foreground">
              Personalized one-to-one Quran classes for students worldwide
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground transition-smooth hover:text-primary">
                  About Qari Sahib
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm text-muted-foreground transition-smooth hover:text-primary">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground transition-smooth hover:text-primary">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-sm text-muted-foreground transition-smooth hover:text-primary">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground transition-smooth hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Quran Nazra</li>
              <li className="text-sm text-muted-foreground">Hifz-ul-Quran</li>
              <li className="text-sm text-muted-foreground">Tajweed Mastery</li>
              <li className="text-sm text-muted-foreground">Norani Qaida</li>
              <li className="text-sm text-muted-foreground">Namaz & Duain</li>
              <li className="text-sm text-muted-foreground">Kids & Adults Classes</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@qarinadeem.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-smooth hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  info@qarinadeem.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-smooth hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-smooth hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Chat
                </a>
              </li>
            </ul>
            <Button asChild variant="hero" size="sm" className="w-full">
              <Link to="/booking">Book Free Trial</Link>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Qari Muhammad Nadeem Majeed. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground transition-smooth hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground transition-smooth hover:text-primary"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
