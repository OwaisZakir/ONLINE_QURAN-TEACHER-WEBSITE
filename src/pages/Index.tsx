import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Users, Star, Clock, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import heroImage from "@/assets/hero-quran.jpg";

const Index = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Quran Nazra",
      titleUrdu: "قرآن ناظرہ",
      description: "Daily reading improvement with proper Tajweed rules",
      features: ["Proper pronunciation", "Reading fluency", "Daily practice sessions", "Progress tracking"],
    },
    {
      icon: GraduationCap,
      title: "Hifz-ul-Quran",
      titleUrdu: "حفظ القرآن",
      description: "Structured memorization program with weekly targets",
      features: ["Proven memorization techniques", "Weekly revision", "One-to-one attention", "Progress monitoring"],
    },
    {
      icon: Star,
      title: "Tajweed Mastery",
      titleUrdu: "تجوید",
      description: "Master the rules of Quranic pronunciation",
      features: ["Articulation points", "Rules explanation", "Practice drills", "Certification"],
    },
  ];

  const testimonials = [
    {
      name: "Ahmad Khan",
      role: "Parent of 8-year-old student",
      content: "My son has made remarkable progress in just 3 months. Qari Sahib's patience and teaching method are exceptional. Highly recommended!",
      rating: 5,
    },
    {
      name: "Fatima Ahmed",
      role: "Adult Student",
      content: "I always wanted to learn proper Tajweed. The one-to-one classes are perfect for my schedule and the teaching quality is outstanding.",
      rating: 5,
    },
    {
      name: "Ibrahim Hassan",
      role: "Hifz Student",
      content: "The structured Hifz program helped me memorize 5 Juz in one year. May Allah reward Qari Sahib for his dedication.",
      rating: 5,
    },
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Students Taught" },
    { icon: Globe, number: "25+", label: "Countries" },
    { icon: Clock, number: "10+", label: "Years Experience" },
    { icon: Star, number: "4.9", label: "Rating" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative overflow-hidden pattern-islamic">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Quran"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="gradient-hero absolute inset-0" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-block rounded-full bg-gold/20 px-4 py-2"
            >
              <span className="text-sm font-semibold text-gold">Certified Qari & Hafiz</span>
            </motion.div>

            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-6xl">
              Qari Muhammad Nadeem Majeed
            </h1>
            
            <p className="font-urdu mb-4 text-2xl text-primary-foreground/90 md:text-3xl">
              قاری محمد ندیم مجید — آپ کا ذاتی قرآن کے استاد
            </p>

            <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl">
              One-to-one Quran Nazra, Hifz, Tajweed & Norani Qaida — Personalized online classes for kids and adults
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="gold" className="text-base">
                <Link to="/booking">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Book Free Trial
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="container relative z-10 mx-auto px-4 pb-20">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg bg-white/10 p-6 text-center backdrop-blur-sm"
              >
                <stat.icon className="mx-auto mb-2 h-8 w-8 text-gold" />
                <p className="mb-1 text-3xl font-bold text-white">{stat.number}</p>
                <p className="text-sm text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Our Core Services
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Comprehensive Quran education tailored to your learning pace and goals
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button asChild size="lg" variant="hero">
              <Link to="/courses">
                View All Courses
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/50 py-20 pattern-islamic">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Student Success Stories
            </h2>
            <p className="font-urdu mx-auto max-w-2xl text-xl text-muted-foreground">
              طالب علموں کی کامیابی کی کہانیاں
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button asChild size="lg" variant="outline">
              <Link to="/testimonials">
                Read More Testimonials
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Start Your Quran Learning Journey Today
            </h2>
            <p className="font-urdu mb-6 text-xl text-white/90">
              آج ہی اپنا قرآن سیکھنے کا سفر شروع کریں
            </p>
            <p className="mb-8 text-lg text-white/80">
              Book your free trial class and experience personalized Quran education
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="gold">
                <Link to="/booking">
                  Book Free Trial Class
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
