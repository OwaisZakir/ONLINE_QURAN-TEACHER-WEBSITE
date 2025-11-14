import { motion } from "framer-motion";
import { CheckCircle, BookOpen, Award, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import teacherPortrait from "@/assets/teacher-portrait.jpg";

const About = () => {
  const credentials = [
    "Certified Qari with Ijazah in Quran recitation",
    "Hafiz-ul-Quran with complete memorization",
    "10+ years of teaching experience",
    "Specialized in Tajweed and Qira'at",
    "Taught 500+ students from 25+ countries",
    "Expert in teaching children and adults",
  ];

  const methodology = [
    {
      title: "Personalized Approach",
      description: "Each student receives a customized learning plan based on their age, level, and goals.",
    },
    {
      title: "Interactive Sessions",
      description: "Engaging one-to-one classes with live feedback and corrections for optimal learning.",
    },
    {
      title: "Flexible Scheduling",
      description: "Classes scheduled according to your timezone and availability for your convenience.",
    },
    {
      title: "Progress Tracking",
      description: "Regular assessments and detailed progress reports to monitor your Quranic journey.",
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
              About Qari Muhammad Nadeem Majeed
            </h1>
            <p className="font-urdu text-2xl text-white/90">
              قاری محمد ندیم مجید کے بارے میں
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl shadow-elegant">
                <img
                  src={teacherPortrait}
                  alt="Qari Muhammad Nadeem Majeed"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-gold p-6 shadow-gold">
                <Award className="h-12 w-12 text-foreground" />
                <p className="mt-2 text-sm font-semibold text-foreground">Certified</p>
                <p className="text-xs text-foreground/80">Qari & Hafiz</p>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="mb-4 text-3xl font-bold text-foreground">
                  Your Dedicated Quran Teacher
                </h2>
                <p className="text-muted-foreground">
                  <span className="font-urdu text-lg">السلام علیکم ورحمۃ اللہ</span>
                </p>
              </div>

              <p className="text-muted-foreground">
                Qari Muhammad Nadeem Majeed is a certified Qari and Hafiz with over 10 years of 
                teaching experience in Quranic education. He specializes in Tajweed, Hifz guidance, 
                Norani Qaida, and practical Namaz/Duain instruction for students of all ages.
              </p>

              <p className="text-muted-foreground">
                With a passion for teaching and a deep love for the Quran, Qari Sahib has helped 
                hundreds of students worldwide improve their Quranic recitation, memorize the Holy 
                Quran, and understand the proper application of Tajweed rules.
              </p>

              <p className="text-muted-foreground">
                His patient and encouraging teaching style makes learning accessible and enjoyable 
                for both children and adults, regardless of their current level of Quranic knowledge.
              </p>

              <div className="space-y-3">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={credential}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{credential}</span>
                  </motion.div>
                ))}
              </div>

              <Button asChild size="lg" variant="hero">
                <Link to="/booking">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Book Free Trial Class
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="bg-muted/50 py-20 pattern-islamic">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Teaching Methodology
            </h2>
            <p className="font-urdu text-xl text-muted-foreground">
              تدریسی طریقہ کار
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {methodology.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border-2 border-border bg-card p-6 shadow-elegant transition-smooth hover:border-primary"
              >
                <h3 className="mb-3 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <p className="mb-2 text-4xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">Students Taught Worldwide</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                <Award className="h-8 w-8 text-gold" />
              </div>
              <p className="mb-2 text-4xl font-bold text-foreground">10+</p>
              <p className="text-sm text-muted-foreground">Years Teaching Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <p className="mb-2 text-4xl font-bold text-foreground">25+</p>
              <p className="text-sm text-muted-foreground">Countries Reached</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
