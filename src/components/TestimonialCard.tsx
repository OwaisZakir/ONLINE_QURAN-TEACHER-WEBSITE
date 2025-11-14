import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  index: number;
}

const TestimonialCard = ({ name, role, content, rating, avatar, index }: TestimonialCardProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      className="group"
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

          <CardContent className="space-y-5 p-6 h-full flex flex-col">
            {/* Quote Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
            >
              <Quote className="h-8 w-8 text-primary/30" />
            </motion.div>

            {/* Rating */}
            <motion.div
              className="flex gap-1"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 + 0.1, duration: 0.5 }}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, rotate: 15 }}
                >
                  <Star
                    className={`h-4 w-4 transition-colors duration-300 ${
                      i < rating
                        ? "fill-amber-400 text-amber-400"
                        : "fill-muted text-muted"
                    }`}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Content */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.15 + 0.15, duration: 0.6 }}
              className="text-sm italic text-muted-foreground leading-relaxed flex-grow"
            >
              "{content}"
            </motion.p>

            {/* Divider */}
            <motion.div
              className="border-t border-border"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
              style={{ originX: 0 }}
            />

            {/* Author */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 + 0.25, duration: 0.5 }}
              className="flex items-center gap-3 pt-2"
            >
              <motion.div whileHover={{ scale: 1.1 }}>
                <Avatar className="h-10 w-10 border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300">
                  <AvatarImage src={avatar} alt={name} />
                  <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                    {name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </motion.div>
              <div>
                <p className="text-sm font-bold text-foreground">{name}</p>
                <p className="text-xs text-muted-foreground">{role}</p>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCard;
