import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Star, BookMarked, HandHeart, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";

const Courses = () => {
  const courses = [
    {
      icon: BookOpen,
      title: "Quran Nazra",
      titleUrdu: "قرآن ناظرہ",
      description: "Daily reading improvement with proper Tajweed rules and pronunciation mastery",
      features: [
        "Proper Arabic pronunciation",
        "Reading fluency development",
        "Daily practice sessions",
        "Progress tracking and feedback",
        "Suitable for beginners and intermediate",
      ],
    },
    {
      icon: GraduationCap,
      title: "Hifz-ul-Quran",
      titleUrdu: "حفظ القرآن",
      description: "Structured memorization program with weekly targets and revision schedules",
      features: [
        "Proven memorization techniques",
        "Weekly revision plans",
        "One-to-one attention and guidance",
        "Progress monitoring and testing",
        "Flexible pace based on ability",
      ],
    },
    {
      icon: Star,
      title: "Tajweed Mastery",
      titleUrdu: "تجوید",
      description: "Master the rules of Quranic pronunciation with detailed instruction",
      features: [
        "Complete Tajweed rules (Makharij, Sifaat)",
        "Articulation points practice",
        "Rules explanation in English & Urdu",
        "Practical application drills",
        "Certification upon completion",
      ],
    },
    {
      icon: BookMarked,
      title: "Norani Qaida",
      titleUrdu: "نورانی قاعدہ",
      description: "Beginner-friendly foundational course for Arabic alphabet and basic reading",
      features: [
        "Arabic alphabet recognition",
        "Basic joining rules",
        "Short vowels and harakat",
        "Step-by-step progression",
        "Perfect for absolute beginners",
      ],
    },
    {
      icon: HandHeart,
      title: "Namaz & Duain",
      titleUrdu: "نماز اور دعائیں",
      description: "Practical guidance for daily worship including prayers and supplications",
      features: [
        "Complete Salah procedures",
        "Essential daily duas",
        "Correct pronunciation",
        "Meaning and translation",
        "Practical demonstrations",
      ],
    },
    {
      icon: Users,
      title: "Kids & Adults Classes",
      titleUrdu: "بچوں اور بڑوں کی کلاسیں",
      description: "Specialized programs tailored for different age groups and learning styles",
      features: [
        "Age-appropriate teaching methods",
        "Interactive and engaging sessions",
        "Flexible scheduling options",
        "Patient and encouraging approach",
        "Regular parent/student updates",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="gradient-primary py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Our Courses & Services
            </h1>
            <p className="font-urdu text-2xl text-white/90">
              ہمارے کورسز اور خدمات
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Comprehensive Quran education programs designed for students of all ages and levels
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <ServiceCard key={course.title} {...course} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Class Format Section */}
      <section className="bg-muted/50 py-20 pattern-islamic">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                Class Format
              </h2>
              <div className="space-y-4 text-left">
                <div className="rounded-lg border-2 border-border bg-card p-6">
                  <h3 className="mb-2 font-semibold text-foreground">One-to-One Online Classes</h3>
                  <p className="text-sm text-muted-foreground">
                    All classes are conducted in a personalized one-to-one format via Zoom, Google Meet, or WhatsApp video call.
                  </p>
                </div>
                <div className="rounded-lg border-2 border-border bg-card p-6">
                  <h3 className="mb-2 font-semibold text-foreground">Flexible Scheduling</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose class times that work with your schedule. Available across all major timezones.
                  </p>
                </div>
                <div className="rounded-lg border-2 border-border bg-card p-6">
                  <h3 className="mb-2 font-semibold text-foreground">Class Duration</h3>
                  <p className="text-sm text-muted-foreground">
                    Standard class duration: 30-45 minutes. Longer sessions available for advanced students.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
