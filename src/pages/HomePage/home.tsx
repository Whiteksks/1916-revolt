"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Header from "@/components/layout/header";
import { StarsBackgroundDemo } from "@/components/layout/starBackground";
import { Button } from "@/components/ui/button";
import { MorphingText } from "@/components/ui/morphing-text";
import Story from "./story";

const texts = [
  "Hello!",
  "MT-2503 presents",
  "National Liberation Revolt of 1916",
  "By",
  "Adil Mamadiyarov",
  "Atymtay Berdikhan",
  "Bexultan Sagyndykov",
  " ",
];

export default function HomePage() {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [showStoryContent, setShowStoryContent] = useState(false);

  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    if (isAnimatingOut) return;
    setIsAnimatingOut(true);

    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => setShowStoryContent(true),
    });

    tl.to(backgroundRef.current, {
      scale: 25,
      rotate: 360,
      opacity: 0,
      duration: 2.5,
    });

    tl.to(
      contentRef.current,
      {
        opacity: 0,
        duration: 0.8,
      },
      "<" 
    );
  };

  useEffect(() => {
    if (!isAnimatingOut) {
      gsap.set(backgroundRef.current, { clearProps: "all" });
      gsap.set(contentRef.current, { clearProps: "all" });
    }
  }, [isAnimatingOut]);

  return (
    <div className="relative p-4 h-screen">
      <div
        ref={backgroundRef}
        className="fixed inset-0 -z-10 origin-center"
      >
        <StarsBackgroundDemo />
      </div>

      <div ref={contentRef} className="relative z-10">
        <Header />
        <div className="pt-5 relative">
          <MorphingText texts={texts} />
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
            <Button
              className="px-6 py-3 transition"
              onClick={handleStart}
              disabled={isAnimatingOut}
            >
              Start the story
            </Button>
          </div>  
        </div>
      </div>

      {showStoryContent && (
        <div className="absolute inset-0 flex items-center justify-center p-6 z-20 text-center">
          <Story />
        </div>
      )}
    </div>
  );
}
