"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Particles } from "@/components/ui/particles";
import { StarsBackgroundDemo } from "@/components/layout/starBackground";
import Content from "./content";
import { useSnowMode } from "@/hooks/useSnowMode"; 

export default function Story() {
  const { isSnowMode } = useSnowMode(); 

  return (
    <div className="relative w-screen h-screen">
      {isSnowMode ? (
        <StarsBackgroundDemo />
      ) : (
        <Particles className="fixed inset-0 w-full h-full -z-10" />
      )}

      <div className="absolute left-0 right-0 flex flex-col items-center justify-center p-6 text-center z-20">
        <AnimatePresence>
          <motion.div
            key="story"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Content />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
