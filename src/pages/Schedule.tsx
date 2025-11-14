import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Schedule = () => {
  const timeSlots = [
    { time: "6:00 AM - 7:00 AM", availability: "Available" },
    { time: "7:00 AM - 8:00 AM", availability: "Available" },
    { time: "8:00 AM - 9:00 AM", availability: "Limited" },
    { time: "2:00 PM - 3:00 PM", availability: "Available" },
    { time: "3:00 PM - 4:00 PM", availability: "Available" },
    { time: "4:00 PM - 5:00 PM", availability: "Limited" },
    { time: "5:00 PM - 6:00 PM", availability: "Available" },
    { time: "6:00 PM - 7:00 PM", availability: "Limited" },
    { time: "7:00 PM - 8:00 PM", availability: "Full" },
    { time: "8:00 PM - 9:00 PM", availability: "Available" },
  ];

  const timezones = [
    "EST (US Eastern)",
    "PST (US Pacific)",
    "GMT (London)",
    "PKT (Pakistan)",
    "GST (Gulf)",
    "AEST (Australia)",
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
              Schedule & Availability
            </h1>
            <p className="font-urdu text-2xl text-white/90">
              شیڈول اور دستیابی
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Choose a time that works for your schedule across any timezone
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    All Timezones Welcome
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    We accommodate students from around the world. Choose your timezone and we'll find a suitable time for you.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Available Timezones:</p>
                    <div className="flex flex-wrap gap-2">
                      {timezones.map((tz) => (
                        <span
                          key={tz}
                          className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                        >
                          {tz}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    Flexible Class Duration
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span><strong>Standard:</strong> 30-45 minutes per class</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span><strong>Intensive Hifz:</strong> 45-60 minutes per class</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span><strong>Young Children:</strong> 25-30 minutes (shorter attention span)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-gold/50 bg-gold/5">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    How to Book Your Slot
                  </h3>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                        1
                      </span>
                      <span>Choose your preferred course and package</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                        2
                      </span>
                      <span>Select your timezone and preferred times</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                        3
                      </span>
                      <span>Complete the booking form with student details</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                        4
                      </span>
                      <span>Receive confirmation and meeting link</span>
                    </li>
                  </ol>
                  <Button asChild variant="hero" className="mt-4 w-full">
                    <Link to="/booking">Book Your Free Trial</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sample Schedule */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  Sample Available Slots (EST)
                </h2>
                <p className="text-sm text-muted-foreground">
                  Below is an example of typical availability in Eastern Standard Time. Actual slots vary daily.
                </p>
              </div>

              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Weekly Schedule</h3>
                  </div>
                  <div className="space-y-2">
                    {timeSlots.map((slot, index) => (
                      <motion.div
                        key={slot.time}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center justify-between rounded-lg border border-border p-3"
                      >
                        <span className="text-sm font-medium text-foreground">
                          {slot.time}
                        </span>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            slot.availability === "Available"
                              ? "bg-primary/10 text-primary"
                              : slot.availability === "Limited"
                              ? "bg-gold/10 text-gold"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {slot.availability}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-primary/10" />
                      <span><strong>Available:</strong> Multiple slots open</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-gold/10" />
                      <span><strong>Limited:</strong> Few slots remaining</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-muted" />
                      <span><strong>Full:</strong> Currently fully booked</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    Need a Different Time?
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Don't see a time that works for you? Contact us and we'll do our best to accommodate your schedule.
                  </p>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Button asChild variant="outline" className="flex-1">
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                    <Button
                      asChild
                      variant="gold"
                      className="flex-1"
                    >
                      <a
                        href="https://wa.me/1234567890?text=I%20need%20help%20with%20scheduling"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schedule;
