import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Users, Star, Clock, Globe, Zap, Award, CheckCircle2 } from "lucide-react";
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
    // Hero title animation with GSAP
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

    // Parallax effect on hero
    gsap.to(".hero-image", {
      yPercent: -30,
      scrollTrigger: {
        trigger: heroRef.current,
        scrub: 1,
        start: "top top",
        end: "bottom top",
      },
    });

    // Stats counter animation
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

    // Services stagger animation
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
      titleUrdu: "حفظ ��لقرآن",
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
    <div className="min-h-screen overflow-hidden">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 pt-20 pb-20 md:pt-32 md:pb-32"
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={heroImage}
            alt="Quran"
            className="hero-image h-full w-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/50 to-primary" />
        </motion.div>

        {/* Animated background shapes */}
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl z-0"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl z-0"
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-5 py-2.5 hover:bg-white/20 transition-all duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/70"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white/90"></span>
                </span>
                <span className="text-sm font-semibold text-white">Certified Qari & Hafiz</span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="hero-title mb-4 text-5xl md:text-7xl font-black text-white leading-tight tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Qari Muhammad
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
                Nadeem Majeed
              </span>
            </motion.h1>

            {/* Urdu Subtitle */}
            <motion.p
              variants={itemVariants}
              className="hero-subtitle font-urdu mb-4 text-3xl md:text-4xl text-white/95"
            >
              قاری محمد ندیم مجید — آپ کا ذاتی قرآن کے استاد
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="hero-description mb-8 text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
            >
              One-to-one Quran Nazra, Hifz, Tajweed & Norani Qaida — Personalized online classes for kids and adults with proven results
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-base"
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
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10 hover:border-white/60 font-semibold text-base backdrop-blur-sm"
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
                className="stat-item rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-6 text-center hover:bg-white/15 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <stat.icon className="mx-auto mb-3 h-8 w-8 text-amber-200" />
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-sm md:text-base text-white/75">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
                className="group relative overflow-hidden rounded-xl border border-border/50 p-8 hover:border-primary/50 transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ zIndex: -1 }}
                />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  <feature.icon className="h-6 w-6" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-foreground">
              Our Core Services
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
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
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/courses">
                View All Courses
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-foreground">
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <Button asChild size="lg" variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/5">
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
          className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Animated background shapes */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
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
            <h2 className="mb-4 text-4xl md:text-5xl font-bold text-white">
              Start Your Quran Learning Journey Today
            </h2>
            <p className="font-urdu mb-6 text-xl text-white/90">
              آج ہی اپنا قرآن سیکھنے کا سفر شروع کریں
            </p>
            <p className="mb-8 text-lg text-white/80">
              Book your free trial class and experience personalized Quran education
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-base"
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
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10 hover:border-white/60 font-semibold text-base backdrop-blur-sm"
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
