import { motion, useMotionValue, useTransform, useEffect } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  children?: (value: string) => ReactNode;
}

const AnimatedCounter = ({
  from = 0,
  to,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
  children,
}: AnimatedCounterProps) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    const isRoundable = Math.floor(latest) === latest;
    const units = decimals === 0 ? 1 : Math.pow(10, -decimals);
    return isRoundable
      ? latest.toFixed(0)
      : parseFloat(latest.toFixed(decimals));
  });

  useEffect(() => {
    const animation = count.animate(to, {
      duration,
      ease: "easeOut",
    });

    return animation.stop;
  }, [count, to, duration]);

  return (
    <motion.span>
      {children ? (
        children(String(rounded.get()))
      ) : (
        <>{prefix}{rounded}{suffix}</>
      )}
    </motion.span>
  );
};

export default AnimatedCounter;
