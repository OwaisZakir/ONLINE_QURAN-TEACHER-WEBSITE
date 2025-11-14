import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Monthly Plan",
      nameUrdu: "ماہانہ منصوبہ",
      price: "$80",
      period: "/month",
      description: "Perfect for regular ongoing learning",
      features: [
        "12 classes per month (3/week)",
        "30-45 minute sessions",
        "Flexible scheduling",
        "Progress tracking",
        "Class recordings available",
        "WhatsApp support",
      ],
      recommended: false,
    },
    {
      name: "Intensive Hifz Package",
      nameUrdu: "حفظ کا خصوصی پیکیج",
      price: "$150",
      period: "/month",
      description: "For serious Hifz students",
      features: [
        "20 classes per month (5/week)",
        "45-60 minute sessions",
        "Daily revision plan",
        "Weekly testing",
        "Priority scheduling",
        "24/7 WhatsApp support",
        "Progress reports",
      ],
      recommended: true,
    },
    {
      name: "Per-Class Plan",
      nameUrdu: "فی کلاس منصوبہ",
      price: "$10",
      period: "/class",
      description: "Flexible pay-as-you-go option",
      features: [
        "No monthly commitment",
        "30-45 minute sessions",
        "Book classes as needed",
        "Ideal for trial students",
        "Same quality teaching",
        "WhatsApp support",
      ],
      recommended: false,
    },
  ];

  const discounts = [
    "Free trial class for all new students",
    "10% discount for siblings (2+ students from same family)",
    "15% discount for annual payment upfront",
    "Special rates for group classes (family members)",
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
              Pricing & Plans
            </h1>
            <p className="font-urdu text-2xl text-white/90">
              قیمتیں اور منصوبے
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Choose a plan that fits your learning goals and schedule
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`relative h-full ${
                    plan.recommended
                      ? "border-2 border-gold shadow-gold"
                      : "border-2 border-border"
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-gold px-4 py-1 text-sm font-semibold text-foreground shadow-gold">
                        <Star className="h-4 w-4" />
                        Recommended
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="font-urdu text-base">
                      {plan.nameUrdu}
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      variant={plan.recommended ? "hero" : "outline"}
                      className="w-full"
                    >
                      <Link to="/booking">Choose Plan</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Discounts Section */}
      <section className="bg-muted/50 py-20 pattern-islamic">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
              Special Discounts
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {discounts.map((discount, index) => (
                <motion.div
                  key={discount}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 rounded-lg border-2 border-gold/50 bg-card p-4"
                >
                  <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                  <span className="text-sm text-muted-foreground">{discount}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
              Payment FAQ
            </h2>
            <div className="space-y-4">
              <div className="rounded-lg border-2 border-border bg-card p-6">
                <h3 className="mb-2 font-semibold text-foreground">What payment methods do you accept?</h3>
                <p className="text-sm text-muted-foreground">
                  We accept Stripe (credit/debit cards), PayPal, and bank transfers. Payment details will be provided after booking.
                </p>
              </div>
              <div className="rounded-lg border-2 border-border bg-card p-6">
                <h3 className="mb-2 font-semibold text-foreground">Is the trial class really free?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes! The first trial class is completely free with no obligation to continue. Experience our teaching quality firsthand.
                </p>
              </div>
              <div className="rounded-lg border-2 border-border bg-card p-6">
                <h3 className="mb-2 font-semibold text-foreground">Can I change my plan later?</h3>
                <p className="text-sm text-muted-foreground">
                  Absolutely! You can upgrade, downgrade, or switch plans at any time. Just contact us before the next billing cycle.
                </p>
              </div>
              <div className="rounded-lg border-2 border-border bg-card p-6">
                <h3 className="mb-2 font-semibold text-foreground">What if I miss a class?</h3>
                <p className="text-sm text-muted-foreground">
                  Notify us 24 hours in advance to reschedule without penalty. Otherwise, the class will be counted as completed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
