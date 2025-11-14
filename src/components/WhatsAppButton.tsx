import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = "1234567890"; // Replace with actual number
  const whatsappMessage = encodeURIComponent(
    "السلام علیکم! I'm interested in learning more about your Quran classes."
  );

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* Glow animation */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/30 to-violet-500/30"
          animate={{ scale: [1, 1.4, 1.2] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          style={{ zIndex: -1 }}
        />
      )}

      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-neon transition-shadow hover:shadow-lg"
        whileHover={{
          scale: 1.15,
          boxShadow: "0 0 40px rgba(6, 182, 212, 0.6)",
        }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        aria-label="Contact via WhatsApp"
      >
        <motion.div
          animate={isHovered ? { rotate: [0, -15, 15, -15, 0] } : {}}
          transition={{ duration: 0.6 }}
        >
          <MessageCircle className="h-7 w-7" />
        </motion.div>
      </motion.a>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
        transition={{ duration: 0.2 }}
        className="absolute right-16 top-1/2 transform -translate-y-1/2 glass border border-cyan-500/50 text-white text-xs font-semibold px-3 py-2 rounded-lg whitespace-nowrap pointer-events-none"
      >
        Chat with us!
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppButton;
