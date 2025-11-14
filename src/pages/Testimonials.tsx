import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TestimonialCard from "@/components/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmad Khan",
      role: "Parent of 8-year-old student",
      content: "My son has made remarkable progress in just 3 months. Qari Sahib's patience and teaching method are exceptional. His tajweed has improved significantly and he looks forward to every class!",
      rating: 5,
    },
    {
      name: "Fatima Ahmed",
      role: "Adult Student - Tajweed",
      content: "I always wanted to learn proper Tajweed but never had the time. The one-to-one online classes are perfect for my schedule. Qari Sahib is very patient and explains everything clearly in both English and Urdu.",
      rating: 5,
    },
    {
      name: "Ibrahim Hassan",
      role: "Hifz Student",
      content: "The structured Hifz program helped me memorize 5 Juz in one year. Alhamdulillah! Qari Sahib's revision techniques and weekly testing keep me on track. May Allah reward him for his dedication.",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      role: "Convert - Norani Qaida Student",
      content: "As a new Muslim, I was nervous about learning to read Quran. Qari Sahib made me feel comfortable from day one. He's patient, understanding, and an excellent teacher. I can now read basic Arabic!",
      rating: 5,
    },
    {
      name: "Abdullah Rahman",
      role: "Parent of two students",
      content: "Both my daughters (ages 7 and 10) take classes with Qari Sahib. They've learned so much in 6 months! The sibling discount is also very helpful. Highly recommended for families.",
      rating: 5,
    },
    {
      name: "Aisha Malik",
      role: "Adult Student - Quran Nazra",
      content: "I never learned to read Quran properly growing up. At 35, I decided it was time. Qari Sahib is non-judgmental and encouraging. I'm now reading fluently with proper tajweed. It's never too late!",
      rating: 5,
    },
    {
      name: "Mohammed Ali",
      role: "Hifz Student",
      content: "The intensive Hifz package is worth every penny. Five classes a week keeps me motivated and accountable. Qari Sahib's teaching method makes memorization easier than I expected.",
      rating: 5,
    },
    {
      name: "Zainab Hussein",
      role: "Parent of 6-year-old",
      content: "My daughter started with Norani Qaida and is now reading Quran mashallah. Qari Sahib knows how to keep young children engaged and interested. She never wants to miss a class!",
      rating: 5,
    },
    {
      name: "Yusuf Ahmed",
      role: "Working Professional",
      content: "The flexible scheduling is perfect for my busy work schedule. Classes at 6 AM work great for me. Qari Sahib is always punctual and prepared. Professional service all around.",
      rating: 5,
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
            <div className="mb-4 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-gold text-gold" />
              ))}
            </div>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Student Success Stories
            </h1>
            <p className="font-urdu text-2xl text-white/90">
              طالب علموں کی کامیابی کی کہانیاں
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Read what our students and their families have to say about their learning journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/50 py-20 pattern-islamic">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-12 text-3xl font-bold text-foreground">
              Our Impact
            </h2>
            <div className="grid gap-8 md:grid-cols-4">
              <div>
                <p className="mb-2 text-4xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Happy Students</p>
              </div>
              <div>
                <p className="mb-2 text-4xl font-bold text-primary">25+</p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
              <div>
                <p className="mb-2 text-4xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Years Teaching</p>
              </div>
              <div>
                <p className="mb-2 text-4xl font-bold text-primary">4.9</p>
                <div className="flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
