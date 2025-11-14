import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Users, Star, Clock, Globe, Zap, Award, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import heroImage from "@/assets/hero-quran.jpg";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );

    gsap.fromTo(
      ".hero-subtitle",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.4 }
    );

    gsap.fromTo(
      ".hero-description",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.6 }
    );

    gsap.fromTo(
      ".hero-buttons",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.8 }
    );

    gsap.to(".hero-image", {
      yPercent: -30,
      scrollTrigger: {
        trigger: heroRef.current,
        scrub: 1,
        start: "top top",
        end: "bottom top",
      },
    });

    gsap.utils.toArray<HTMLElement>(".stat-item").forEach((stat, index) => {
      gsap.fromTo(
        stat,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    gsap.utils.toArray<HTMLElement>(".service-item").forEach((service, index) => {
      gsap.fromTo(
        service,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.12,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

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

  const features = [
    {
      icon: Zap,
      title: "Interactive Learning",
      description: "Engaging lessons with visual aids and interactive exercises"
    },
    {
      icon: Award,
      title: "Certified Instructor",
      description: "Professionally trained Qari with international certifications"
    },
    {
      icon: CheckCircle2,
      title: "Personalized Approach",
      description: "Customized curriculum based on individual learning pace"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32"
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-violet-900/40 to-gray-900" />
          <img
            src={heroImage}
            alt="Quran"
            className="hero-image absolute inset-0 h-full w-full object-cover opacity-10"
          />
        </motion.div>

        {/* Animated background orbs */}
        <motion.div
          className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl text-center"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6 inline-block">
              <motion.div
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 hover:bg-white/10 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-500/60"
                whileHover={{ boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)" }}
              >
                <motion.span
                  className="relative flex h-2 w-2"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500/70"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </motion.span>
                <span className="text-sm font-semibold text-cyan-400">Certified Qari & Hafiz</span>
              </motion.div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="hero-title mb-4 text-5xl md:text-7xl font-black leading-tight tracking-tight"
            >
              <span className="text-gradient-primary block mb-2">
                Qari Muhammad
              </span>
              <span className="text-gradient-neon block">
                Nadeem Majeed
              </span>
            </motion.h1>

            {/* Urdu Subtitle */}
            <motion.p
              variants={itemVariants}
              className="hero-subtitle font-urdu mb-6 text-2xl md:text-3xl text-cyan-400"
            >
              قاری محمد ندیم مجید — آپ کا ذاتی قرآن کے استاد
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="hero-description mb-8 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            >
              One-to-one Quran Nazra, Hifz, Tajweed & Norani Qaida — Personalized online classes for kids and adults with proven results
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(6, 182, 212, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-bold text-base shadow-neon"
                >
                  <Link to="/booking">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Book Free Trial
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="glass border-cyan-500/50 text-white hover:border-cyan-400 hover:bg-white/10 font-semibold text-base"
                >
                  <Link to="/about">
                    Learn More About Me
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="container relative z-10 mx-auto px-4 mt-20 md:mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-item glass rounded-xl p-6 text-center border border-cyan-500/20 hover:border-cyan-500/60 hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -8, boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)" }}
              >
                <stat.icon className="mx-auto mb-3 h-8 w-8 text-cyan-400" />
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-2">{stat.number}</p>
                <p className="text-sm md:text-base text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
              Why Choose Us
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Comprehensive Quran education with proven methodologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative overflow-hidden rounded-2xl glass border border-cyan-500/20 p-8 hover:border-cyan-500/60 hover-glow-cyan transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                  style={{ zIndex: -1 }}
                />
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-400 group-hover:from-cyan-500 group-hover:to-violet-500 group-hover:text-white transition-all"
                >
                  <feature.icon className="h-6 w-6" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 md:py-24 bg-gradient-to-b from-background to-violet-950/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-gradient-primary">
              Our Core Services
            </h2>
            <p className="mx-auto max-w-2xl text-white/70">
              Comprehensive Quran education tailored to your learning pace and goals
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={service.title} className="service-item">
                <ServiceCard {...service} index={index} />
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-cyan-500 hover:shadow-neon text-white font-bold"
            >
              <Link to="/courses">
                View All Courses
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-gradient-primary">
              Student Success Stories
            </h2>
            <p className="font-urdu mx-auto max-w-2xl text-xl text-cyan-400/80">
              طالب علموں کی کامیابی کی کہانیاں
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="glass border-cyan-500/50 text-white hover:border-cyan-400 hover:bg-white/10"
            >
              <Link to="/testimonials">
                Read More Testimonials
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-gray-900 to-cyan-950" />
        </motion.div>

        {/* Animated background shapes */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl"
          >
            <motion.div className="mb-6 inline-flex items-center gap-2 text-cyan-400">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-semibold">Limited Slots Available</span>
              <Sparkles className="h-5 w-5" />
            </motion.div>

            <h2 className="mb-4 text-4xl md:text-5xl font-bold text-gradient-primary">
              Start Your Quran Learning Journey Today
            </h2>
            <p className="font-urdu mb-6 text-xl text-cyan-400/80">
              آج ہی اپنا قرآن سیکھنے کا سفر شروع کریں
            </p>
            <p className="mb-8 text-lg text-white/70">
              Book your free trial class and experience personalized Quran education
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(6, 182, 212, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-bold text-base shadow-neon"
                >
                  <Link to="/booking">
                    Book Free Trial Class
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="glass border-cyan-500/50 text-white hover:border-cyan-400 hover:bg-white/10 font-semibold text-base"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
