"use client";
import { StarsBackgroundDemo } from "@/components/layout/starBackground";
import Header from "@/components/layout/header";
import { AnimatedTestimonialsDemo } from "./testimonials";

export function GalleryPage() {
  return (
    <div className="relative p-4 h-screen">
        <div className="fixed inset-0 -z-10">
        <StarsBackgroundDemo />
        </div>
        <Header/>
        <AnimatedTestimonialsDemo />
    </div>
  );
}
