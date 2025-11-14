import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Booking = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate booking submission
    setTimeout(() => {
      toast({
        title: "Booking Request Received!",
        description: "We'll contact you within 24 hours to confirm your free trial class.",
      });
      setIsSubmitting(false);
      setStep(3); // Success step
    }, 1500);
  };

  const courses = [
    "Quran Nazra",
    "Hifz-ul-Quran",
    "Tajweed Mastery",
    "Norani Qaida",
    "Namaz & Duain",
  ];

  const packages = [
    "Free Trial (1 Class)",
    "Monthly Plan - $80/month",
    "Intensive Hifz - $150/month",
    "Per Class - $10/class",
  ];

  const timezones = [
    "EST - US Eastern",
    "PST - US Pacific",
    "GMT - London",
    "PKT - Pakistan",
    "GST - Gulf States",
    "AEST - Australia",
  ];

  const preferredTimes = [
    "Morning (6 AM - 12 PM)",
    "Afternoon (12 PM - 5 PM)",
    "Evening (5 PM - 9 PM)",
    "Flexible",
  ];

  if (step === 3) {
    return (
      <div className="min-h-screen">
        <Header />
        <WhatsAppButton />

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto max-w-2xl text-center"
            >
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h1 className="mb-4 text-3xl font-bold text-foreground">
                Booking Request Received!
              </h1>
              <p className="font-urdu mb-6 text-xl text-muted-foreground">
                آپ کی درخواست موصول ہو گئی
              </p>
              <p className="mb-8 text-muted-foreground">
                Thank you for your interest in learning Quran with us. We'll review your request and contact you within 24 hours to confirm your free trial class and answer any questions.
              </p>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  In the meantime, feel free to explore:
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Button asChild variant="outline">
                    <a href="/courses">Browse Courses</a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="/faq">Read FAQ</a>
                  </Button>
                  <Button asChild variant="gold">
                    <a
                      href="https://wa.me/1234567890?text=I%20just%20booked%20a%20trial%20class"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

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
              Book Your Free Trial Class
            </h1>
            <p className="font-urdu text-2xl text-white/90">
              اپنا مفت ٹرائل کلاس بک کریں
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Start your Quran learning journey today. No payment required for trial class!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <Card>
              <CardHeader>
                <CardTitle>Student Information</CardTitle>
                <CardDescription>
                  Fill out the form below to book your free trial class
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Student Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      1. Student Details
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label htmlFor="studentName" className="mb-2 block text-sm font-medium text-foreground">
                          Student Name *
                        </label>
                        <Input
                          id="studentName"
                          type="text"
                          placeholder="Enter student's name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="studentAge" className="mb-2 block text-sm font-medium text-foreground">
                          Student Age *
                        </label>
                        <Input
                          id="studentAge"
                          type="number"
                          placeholder="Enter age"
                          required
                          min="5"
                          max="100"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="parentName" className="mb-2 block text-sm font-medium text-foreground">
                        Parent/Guardian Name (if student is minor)
                      </label>
                      <Input
                        id="parentName"
                        type="text"
                        placeholder="Enter parent/guardian name"
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      2. Contact Information
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                          WhatsApp Number *
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 234 567 890"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      3. Course & Package Selection
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label htmlFor="course" className="mb-2 block text-sm font-medium text-foreground">
                          Choose Course *
                        </label>
                        <Select required>
                          <SelectTrigger id="course">
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                          <SelectContent>
                            {courses.map((course) => (
                              <SelectItem key={course} value={course.toLowerCase().replace(/\s+/g, "-")}>
                                {course}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label htmlFor="package" className="mb-2 block text-sm font-medium text-foreground">
                          Choose Package *
                        </label>
                        <Select required>
                          <SelectTrigger id="package">
                            <SelectValue placeholder="Select a package" />
                          </SelectTrigger>
                          <SelectContent>
                            {packages.map((pkg) => (
                              <SelectItem key={pkg} value={pkg.toLowerCase().replace(/\s+/g, "-")}>
                                {pkg}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Schedule Preferences */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      4. Schedule Preferences
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label htmlFor="timezone" className="mb-2 block text-sm font-medium text-foreground">
                          Your Timezone *
                        </label>
                        <Select required>
                          <SelectTrigger id="timezone">
                            <SelectValue placeholder="Select timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            {timezones.map((tz) => (
                              <SelectItem key={tz} value={tz.toLowerCase().replace(/\s+/g, "-")}>
                                {tz}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label htmlFor="preferredTime" className="mb-2 block text-sm font-medium text-foreground">
                          Preferred Time *
                        </label>
                        <Select required>
                          <SelectTrigger id="preferredTime">
                            <SelectValue placeholder="Select time preference" />
                          </SelectTrigger>
                          <SelectContent>
                            {preferredTimes.map((time) => (
                              <SelectItem key={time} value={time.toLowerCase().replace(/\s+/g, "-")}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      5. Additional Information (Optional)
                    </h3>
                    <div>
                      <label htmlFor="experience" className="mb-2 block text-sm font-medium text-foreground">
                        Current Quran Learning Level
                      </label>
                      <Textarea
                        id="experience"
                        placeholder="E.g., Beginner (cannot read Arabic), Intermediate (can read but need improvement), Advanced (looking for Hifz guidance)"
                        rows={3}
                      />
                    </div>
                    <div>
                      <label htmlFor="goals" className="mb-2 block text-sm font-medium text-foreground">
                        Learning Goals & Questions
                      </label>
                      <Textarea
                        id="goals"
                        placeholder="Tell us about your goals and any questions you have..."
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="space-y-4">
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Book Free Trial Class"}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      By submitting, you agree to receive communications about your class. We respect your privacy.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
