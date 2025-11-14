import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "wave" | "diagonal" | "dots" | "line";
  className?: string;
}

const SectionDivider = ({ variant = "wave", className = "" }: SectionDividerProps) => {
  switch (variant) {
    case "wave":
      return (
        <div className={`h-20 w-full overflow-hidden ${className}`}>
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <motion.path
              d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
              fill="currentColor"
              animate={{ d: ["M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z", "M0,30 Q300,20 600,30 T1200,30 L1200,120 L0,120 Z", "M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </svg>
        </div>
      );

    case "diagonal":
      return (
        <div className={`h-32 w-full overflow-hidden ${className}`}>
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <motion.path
              d="M0,0 L1200,120 L1200,120 L0,120 Z"
              fill="currentColor"
              animate={{ d: ["M0,10 L1200,100 L1200,120 L0,120 Z", "M0,0 L1200,120 L1200,120 L0,120 Z"] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </svg>
        </div>
      );

    case "dots":
      return (
        <div className={`flex justify-center items-center gap-2 py-8 ${className}`}>
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="h-2 w-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            />
          ))}
        </div>
      );

    case "line":
      return (
        <div className={`relative h-1 w-full overflow-hidden ${className}`}>
          <motion.div
            className="absolute h-full bg-gradient-to-r from-transparent via-primary to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ width: "50%" }}
          />
        </div>
      );

    default:
      return null;
  }
};

export default SectionDivider;
