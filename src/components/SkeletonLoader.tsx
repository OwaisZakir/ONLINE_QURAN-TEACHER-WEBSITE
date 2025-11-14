import { motion } from "framer-motion";

interface SkeletonLoaderProps {
  count?: number;
  variant?: "card" | "text" | "avatar" | "list";
  className?: string;
}

const SkeletonLoader = ({ count = 3, variant = "card", className = "" }: SkeletonLoaderProps) => {
  const shimmerVariants = {
    shimmer: {
      backgroundPosition: ["200% 0", "-200% 0"],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const baseShimmer = "bg-gradient-to-r from-muted via-muted-foreground/10 to-muted animate-pulse";

  switch (variant) {
    case "card":
      return (
        <div className={`grid gap-4 md:grid-cols-2 lg:grid-cols-3 ${className}`}>
          {Array.from({ length: count }).map((_, i) => (
            <motion.div
              key={i}
              variants={shimmerVariants}
              animate="shimmer"
              className={`${baseShimmer} rounded-lg p-6 space-y-4`}
            >
              <div className="h-4 w-3/4 rounded-md bg-muted-foreground/20" />
              <div className="space-y-2">
                <div className="h-3 w-full rounded-md bg-muted-foreground/20" />
                <div className="h-3 w-5/6 rounded-md bg-muted-foreground/20" />
              </div>
              <div className="h-10 w-full rounded-md bg-muted-foreground/20" />
            </motion.div>
          ))}
        </div>
      );

    case "text":
      return (
        <div className={`space-y-3 ${className}`}>
          {Array.from({ length: count }).map((_, i) => (
            <motion.div
              key={i}
              variants={shimmerVariants}
              animate="shimmer"
              className={`${baseShimmer} h-4 rounded-md ${i === count - 1 ? "w-2/3" : "w-full"}`}
            />
          ))}
        </div>
      );

    case "avatar":
      return (
        <div className={`flex items-center gap-4 ${className}`}>
          <motion.div
            variants={shimmerVariants}
            animate="shimmer"
            className={`${baseShimmer} h-12 w-12 rounded-full`}
          />
          <div className="flex-1 space-y-2">
            <motion.div
              variants={shimmerVariants}
              animate="shimmer"
              className={`${baseShimmer} h-4 w-2/3 rounded-md`}
            />
            <motion.div
              variants={shimmerVariants}
              animate="shimmer"
              className={`${baseShimmer} h-3 w-1/2 rounded-md`}
            />
          </div>
        </div>
      );

    case "list":
      return (
        <div className={`space-y-3 ${className}`}>
          {Array.from({ length: count }).map((_, i) => (
            <motion.div
              key={i}
              variants={shimmerVariants}
              animate="shimmer"
              className={`${baseShimmer} h-16 rounded-lg`}
            />
          ))}
        </div>
      );

    default:
      return null;
  }
};

export default SkeletonLoader;
