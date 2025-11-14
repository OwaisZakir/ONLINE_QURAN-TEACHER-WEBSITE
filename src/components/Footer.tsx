import { Link } from "react-router-dom";
import { BookOpen, Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 w-fit"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg">
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground">Qari M. Nadeem</span>
                <span className="text-xs text-muted-foreground">Quran Academy</span>
              </div>
            </motion.div>
            <p className="font-urdu text-sm text-muted-foreground">
              قاری محمد ندیم مجید
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Personalized one-to-one Quran classes for students worldwide
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Qari Sahib", href: "/about" },
                { name: "Our Courses", href: "/courses" },
                { name: "Pricing Plans", href: "/pricing" },
                { name: "Success Stories", href: "/testimonials" },
                { name: "FAQ", href: "/faq" },
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Quran Nazra",
                "Hifz-ul-Quran",
                "Tajweed Mastery",
                "Norani Qaida",
                "Namaz & Duain",
                "Kids & Adults Classes",
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-default"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Get in Touch</h3>
            <ul className="space-y-3">
              {[
                {
                  icon: Mail,
                  label: "info@qarinadeem.com",
                  href: "mailto:info@qarinadeem.com",
                },
                {
                  icon: Phone,
                  label: "+1 (234) 567-890",
                  href: "tel:+1234567890",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp Chat",
                  href: "https://wa.me/1234567890",
                },
              ].map((contact, index) => (
                <motion.li
                  key={contact.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary group"
                  >
                    <contact.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    {contact.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="pt-2"
            >
              <Button asChild className="w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg">
                <Link to="/booking">Book Free Trial</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 border-t border-border/50 pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Qari Muhammad Nadeem Majeed. All rights reserved.
            </p>
            <div className="flex gap-6">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <motion.div
                  key={link.href}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
