import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  titleUrdu: string;
  description: string;
  features: string[];
  index: number;
}

const ServiceCard = ({ icon: Icon, title, titleUrdu, description, features, index }: ServiceCardProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -8,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      className="group h-full"
    >
      <motion.div variants={hoverVariants} className="h-full">
        <Card className="relative h-full overflow-hidden border-2 border-border transition-all duration-300 hover:border-primary/50">
          {/* Animated gradient background on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ zIndex: -1 }}
          />

          <CardHeader>
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary shadow-md transition-all duration-300 group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground"
            >
              <Icon className="h-7 w-7" />
            </motion.div>

            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <CardDescription className="font-urdu text-base text-muted-foreground">
              {titleUrdu}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>

            <ul className="space-y-2.5">
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 + idx * 0.05 }}
                  className="flex items-start gap-3 text-sm"
                >
                  <motion.span
                    className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0"
                    whileHover={{ scale: 1.5 }}
                  />
                  <span className="text-muted-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                asChild
                variant="outline"
                className="w-full border-primary/30 transition-all duration-300 hover:border-primary hover:bg-primary/5"
              >
                <Link to="/courses">
                  Learn More
                  <motion.span
                    initial={{ opacity: 0, x: -5 }}
                    whileHover={{ opacity: 1, x: 2 }}
                    transition={{ duration: 0.2 }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
