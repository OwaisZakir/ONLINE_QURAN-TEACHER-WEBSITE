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
      y: -12,
      boxShadow: "0 0 40px rgba(6, 182, 212, 0.3), 0 0 80px rgba(139, 92, 246, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
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
        <Card className="relative h-full overflow-hidden glass border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-300">
          {/* Gradient overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ zIndex: 0 }}
          />

          <CardHeader className="relative z-10">
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-400 shadow-md group-hover:from-cyan-500 group-hover:to-violet-500 group-hover:text-white transition-all duration-300"
            >
              <Icon className="h-7 w-7" />
            </motion.div>

            <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
            <CardDescription className="font-urdu text-base text-cyan-400/80">
              {titleUrdu}
            </CardDescription>
          </CardHeader>

          <CardContent className="relative z-10 space-y-4">
            <p className="text-sm leading-relaxed text-white/80">{description}</p>

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
                    className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 flex-shrink-0"
                    whileHover={{ scale: 1.5 }}
                  />
                  <span className="text-white/70">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                asChild
                className="w-full bg-gradient-to-r from-cyan-500/80 to-violet-500/80 hover:from-cyan-500 hover:to-violet-500 text-white font-semibold border-0 transition-all duration-300"
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
