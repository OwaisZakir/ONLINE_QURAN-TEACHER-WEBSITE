import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Pricing", href: "/pricing" },
    { name: "Schedule", href: "/schedule" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

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
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "glass shadow-neon border-b border-emerald-500/20"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo with modern animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-2"
        >
          <Link to="/" className="flex items-center gap-2 transition-smooth hover:opacity-80 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-500 shadow-lg hover-glow-emerald"
            >
              <BookOpen className="h-6 w-6 text-white" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-sm font-bold bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
                Qari M. Nadeem
              </span>
              <span className="text-xs text-emerald-400/80">Quran Academy</span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden items-center gap-1 md:flex"
        >
          {navLinks.map((link) => (
            <motion.div key={link.href} variants={itemVariants}>
              <Link
                to={link.href}
                className="relative text-sm font-medium text-white/80 transition-colors hover:text-emerald-400 px-3 py-2 group"
              >
                {link.name}
                <motion.div
                  className="absolute bottom-0 left-3 h-0.5 bg-gradient-to-r from-emerald-500 to-amber-500"
                  whileHover={{ width: "calc(100% - 24px)" }}
                  initial={{ width: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: 0 }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden items-center gap-3 md:flex"
        >
          <motion.div variants={itemVariants}>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-emerald-500/40 text-white hover:border-emerald-400 hover:bg-emerald-500/10 backdrop-blur"
            >
              <Link to="/student-portal">Student Portal</Link>
            </Button>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:shadow-neon text-white font-semibold"
            >
              <Link to="/booking">Book Free Trial</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-emerald-400" />
          ) : (
            <Menu className="h-6 w-6 text-emerald-400" />
          )}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass border-t border-emerald-500/20 md:hidden"
          >
            <div className="container mx-auto flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-sm font-medium text-white/80 transition-colors hover:text-emerald-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-emerald-500/40 text-white hover:border-emerald-400"
                >
                  <Link to="/student-portal" onClick={() => setMobileMenuOpen(false)}>
                    Student Portal
                  </Link>
                </Button>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white"
                >
                  <Link to="/booking" onClick={() => setMobileMenuOpen(false)}>
                    Book Free Trial
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
