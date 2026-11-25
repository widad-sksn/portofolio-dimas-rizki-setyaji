"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 inset-x-0 h-[3px] z-[999] pointer-events-none bg-black/40">
      <motion.div
        style={{ scaleX }}
        className="h-full w-full bg-gradient-to-r from-[#ff2a85] via-[#ff7a45] to-[#ffe600] origin-left shadow-[0_0_16px_rgba(255,42,133,0.9),0_0_6px_rgba(255,230,0,0.8)]"
      />
    </div>
  );
}
