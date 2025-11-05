"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { RippleButton } from "../theme/ripple-button"

type EventType = {
  id: number
  title: string
  year: string
  description: string
  image: string
}

type MobileTimelineProps = {
  events: EventType[]
}

export function MobileTimeline({ events }: MobileTimelineProps) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const current = events[index]

  const handlePrev = () => {
    setDirection(-1) 
    setIndex((i) => (i - 1 + events.length) % events.length)
  }

  const handleNext = () => {
    setDirection(1) 
    setIndex((i) => (i + 1) % events.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%", 
      opacity: 0,
    }),
    center: {
      x: "0%",
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%", 
      opacity: 0,
    }),
  }

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto">
      <div className="flex justify-between items-center w-full mb-4">
        <RippleButton
          variant="outline"
          onClick={handlePrev}
          className="flex items-center gap-2 rounded-full px-4 py-2 text-sm"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </RippleButton>

        <span className="text-muted-foreground text-sm font-medium">
          {index + 1} / {events.length}
        </span>

        <RippleButton
          variant="outline"
          onClick={handleNext}
          className="flex items-center gap-2 rounded-full px-4 py-2 text-sm"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </RippleButton>
      </div>

      <div className="relative w-full overflow-hidden"> 
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current.id}
            custom={direction} 
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", stiffness: 300, damping: 25 },
              opacity: { duration: 0.2 }
            }}
         
            className="absolute top-0 left-0 w-full"
          >
            <Card className="overflow-hidden rounded-2xl shadow-md">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-60 object-cover"
              />
              <CardHeader className="pt-4 pb-2">
                <CardTitle className="text-lg font-bold text-center">
                  {current.title}
                </CardTitle>
                <CardDescription className="text-center">
                  {current.year}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm text-center whitespace-pre-line">
                  {current.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      
        <div style={{ height: "auto", visibility: "hidden" }}>
            <Card className="overflow-hidden rounded-2xl shadow-md invisible">
                <img src={current.image} alt={current.title} className="w-full h-60 object-cover" />
                <CardHeader className="pt-4 pb-2">
                    <CardTitle className="text-lg font-bold text-center">{current.title}</CardTitle>
                    <CardDescription className="text-center">{current.year}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-sm text-center whitespace-pre-line">{current.description}</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  )
}