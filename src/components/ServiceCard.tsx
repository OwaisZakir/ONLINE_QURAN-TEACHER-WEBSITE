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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="group h-full border-2 transition-smooth hover:border-primary hover:shadow-elegant">
        <CardHeader>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="font-urdu text-base text-muted-foreground">
            {titleUrdu}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">{description}</p>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          <Button asChild variant="outline" className="w-full">
            <Link to="/courses">Learn More</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
