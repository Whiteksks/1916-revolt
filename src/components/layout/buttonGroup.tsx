"use client"

import { useState } from "react"
import { InboxIcon, SendHorizonalIcon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { RippleButton } from "@/components/theme/ripple-button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

type EventType = {
  id: number
  title: string
  year: string
  description: string
  image: string
}

type TimelineSwitcherProps = {
  events: EventType[]
}

export function TimelineSwitcher({ events }: TimelineSwitcherProps) {
  const [index, setIndex] = useState(0)
  const current = events[index]
  const prev = events[(index - 1 + events.length) % events.length]
  const next = events[(index + 1) % events.length]

  const handlePrev = () => setIndex((i) => (i - 1 + events.length) % events.length)
  const handleNext = () => setIndex((i) => (i + 1) % events.length)

  return (
    <div className="max-w-md mx-auto flex flex-col items-center gap-4">
      <div className="inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
        <RippleButton
          variant="outline"
          onClick={handlePrev}
          className="rounded-none rounded-l-md shadow-none focus-visible:z-10"
        >
          <InboxIcon className="mr-2 h-4 w-4" />
          Предыдущий
        </RippleButton>

        <RippleButton
          variant="outline"
          disabled
          className="rounded-none shadow-none focus-visible:z-10 bg-muted text-muted-foreground"
        >
          {index + 1} / {events.length}
        </RippleButton>

        <RippleButton
          variant="outline"
          onClick={handleNext}
          className="rounded-none rounded-r-md shadow-none focus-visible:z-10"
        >
          Следующий
          <SendHorizonalIcon className="ml-2 h-4 w-4" />
        </RippleButton>
      </div>

      <div className="relative w-full mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            <Card className="overflow-hidden">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-56 object-cover"
              />
              <CardHeader>
                <CardTitle>{current.title}</CardTitle>
                <CardDescription>{current.year}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground whitespace-pre-line">
                  {current.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-between text-sm text-muted-foreground w-full mt-2">
        <span className="truncate max-w-[40%] text-left">← {prev.title}</span>
        <span className="truncate max-w-[40%] text-right">{next.title} →</span>
      </div>
    </div>
  )
}
