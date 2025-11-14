import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  variant?: "primary" | "secondary" | "accent";
  animated?: boolean;
}

const AnimatedBackground = ({ variant = "primary", animated = true }: AnimatedBackgroundProps) => {
  const variantClasses = {
    primary: "from-primary via-primary/90 to-primary/80",
    secondary: "from-secondary via-secondary/80 to-secondary/70",
    accent: "from-accent via-accent/80 to-accent/70",
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${variantClasses[variant]}`} />

      {animated && (
        <>
          {/* Animated orb 1 */}
          <motion.div
            className="absolute top-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"
            animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Animated orb 2 */}
          <motion.div
            className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"
            animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Animated orb 3 */}
          <motion.div
            className="absolute top-1/2 left-1/3 w-96 h-96 bg-white/3 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
    </div>
  );
};

export default AnimatedBackground;
