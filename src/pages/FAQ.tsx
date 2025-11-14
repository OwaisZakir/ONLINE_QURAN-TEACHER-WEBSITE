import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          q: "Who is Qari Muhammad Nadeem Majeed?",
          a: "Qari Muhammad Nadeem Majeed is a certified Qari and Hafiz with over 10 years of teaching experience. He specializes in teaching Quran Nazra, Hifz, Tajweed, Norani Qaida, and practical Namaz/Duain to students of all ages worldwide.",
        },
        {
          q: "What age groups do you teach?",
          a: "We teach students of all ages - from children (5+ years) to adults. Our teaching methodology is tailored to suit each age group's learning style and pace.",
        },
        {
          q: "Do I need any prior knowledge to start?",
          a: "No prior knowledge is required. We offer courses for complete beginners (Norani Qaida) as well as advanced students (Hifz and advanced Tajweed).",
        },
      ],
    },
    {
      category: "Classes & Schedule",
      questions: [
        {
          q: "How are classes conducted?",
          a: "All classes are conducted one-to-one via Zoom, Google Meet, or WhatsApp video call. This personalized approach ensures focused attention and better learning outcomes.",
        },
        {
          q: "How long is each class?",
          a: "Standard classes are 30-45 minutes. For advanced Hifz students, we offer 45-60 minute sessions based on individual needs.",
        },
        {
          q: "What are your available timings?",
          a: "We offer flexible scheduling across all major timezones to accommodate students worldwide. You can choose times that work best for your schedule.",
        },
        {
          q: "Can I reschedule a class?",
          a: "Yes, you can reschedule a class by notifying us at least 24 hours in advance. Classes rescheduled with less than 24 hours notice will be counted as completed.",
        },
      ],
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          q: "Is the trial class really free?",
          a: "Yes! We offer a completely free trial class with no obligation to continue. This allows you to experience our teaching quality and decide if it's right for you.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept credit/debit cards via Stripe, PayPal, and bank transfers. Payment instructions are provided after booking.",
        },
        {
          q: "Do you offer discounts?",
          a: "Yes! We offer 10% discount for siblings (2+ students from the same family) and 15% discount for annual payment upfront. Contact us for more details.",
        },
        {
          q: "What if I want to cancel my subscription?",
          a: "You can cancel anytime. Just notify us before your next billing cycle. No questions asked!",
        },
      ],
    },
    {
      category: "Technical Requirements",
      questions: [
        {
          q: "What do I need for online classes?",
          a: "You need a stable internet connection, a device (computer, tablet, or smartphone), and either Zoom, Google Meet, or WhatsApp installed. A webcam and microphone are recommended for better interaction.",
        },
        {
          q: "Will I receive class recordings?",
          a: "Yes! Class recordings are available for monthly and intensive package students. This helps you review lessons at your convenience.",
        },
        {
          q: "What if I have technical issues during class?",
          a: "If technical issues occur, we'll reschedule the class at no extra cost. We're flexible and understanding about such situations.",
        },
      ],
    },
    {
      category: "Learning & Progress",
      questions: [
        {
          q: "How do you track student progress?",
          a: "We maintain detailed progress records for each student. You'll receive regular updates on achievements, areas for improvement, and upcoming goals.",
        },
        {
          q: "How long does it take to complete Hifz?",
          a: "The duration varies based on individual ability, practice time, and consistency. On average, with our intensive program, students complete Hifz in 2-4 years.",
        },
        {
          q: "Do you provide certificates?",
          a: "Yes! Upon successful completion of courses (Norani Qaida, Tajweed, Hifz), we provide certificates of achievement.",
        },
        {
          q: "Can parents monitor their child's progress?",
          a: "Absolutely! We encourage parent involvement. We provide regular progress reports and are available to discuss your child's learning journey anytime.",
        },
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
              Frequently Asked Questions
            </h1>
            <p className="font-urdu text-2xl text-white/90">
              اکثر پوچھے گئے سوالات
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Find answers to common questions about our Quran classes
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-12">
            {faqs.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${catIndex}-${index}`}
                      className="rounded-lg border-2 border-border bg-card px-6"
                    >
                      <AccordionTrigger className="text-left font-semibold hover:text-primary">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="bg-muted/50 py-20 pattern-islamic">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Still Have Questions?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Don't see your question answered? Feel free to reach out to us directly. We're here to help!
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-elegant transition-smooth hover:opacity-90"
              >
                Contact Us
              </a>
              <a
                href="https://wa.me/1234567890?text=I%20have%20a%20question%20about%20Quran%20classes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-md border-2 border-primary bg-background px-8 text-sm font-medium text-primary transition-smooth hover:bg-primary hover:text-primary-foreground"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
