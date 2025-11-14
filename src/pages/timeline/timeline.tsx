'use client'

import { useState, useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { StarsBackgroundDemo } from '@/components/layout/starBackground'
import Header from '@/components/layout/header'
import { MobileTimeline } from '@/components/layout/mobileTimeline'

type EventType = {
  id: number
  title: string
  year: string
  description: string
  image: string
}

export default function TimelinePage() {
  const events: EventType[] = [
    {
      id: 1,
      title: 'Background & Causes',
      year: 'Before 1916',
      description: `
        The National Liberation Revolt of 1916 in Kazakhstan was caused by 
        deep socio-economic inequality, colonial policies of the Russian Empire, 
        and forced conscription of Kazakh men into labor battalions during World War I. 
        The decree of June 25, 1916, ordering Central Asian peoples to the front lines 
        for rear works, became the main trigger.
      `,
      image:
        'https://e-history.kz/storage/tmp/resize/kazakhstan_histories/1200_0_d7cd4f53c5eddaf69960dfefe455bc22.jpg'
    },
    {
      id: 2,
      title: 'Start of the Revolt',
      year: 'July 1916',
      description: `
        The uprising began in the Turgai and Semirechye regions, 
        quickly spreading across the steppe. 
        Local leaders such as Amangeldy Imanov and Tynyshpaev Mukhamedzhan 
        played key roles in organizing resistance against Russian colonial forces.
      `,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/c4/Kyrgyz_fleeing_to_China_after_the_1916_Central_Asian_revolt.jpg'
    },
    {
      id: 3,
      title: 'Major Battles and Expansion',
      year: 'August–October 1916',
      description: `
        The revolt grew into a large-scale armed movement involving tens of thousands of Kazakhs. 
        Fierce clashes occurred in Turgai, Zhetysu, and Syr-Darya regions. 
        Despite poor weapons and organization, the rebels managed to resist Russian troops for months.
      `,
      image:
        'https://eurasianet.org/sites/default/files/styles/article/public/images/101916_0.jpg?itok=Hq65KN_I'
    },
    {
      id: 4,
      title: 'Repression and Defeat',
      year: 'Late 1916',
      description: `
        The Russian Empire brutally suppressed the revolt using military force. 
        Thousands of Kazakh civilians were killed or fled to China to escape repressions. 
        Villages were destroyed, and local leaders were captured or executed.
      `,
      image:
        'https://pbs.twimg.com/media/GDQWMCVWMAAiLwv.jpg:large'
    },
    {
      id: 5,
      title: 'Consequences and Legacy',
      year: 'After 1916',
      description: `
        The 1916 revolt became a symbol of resistance against colonial oppression. 
        It revealed the deep discontent within the Kazakh population and 
        inspired future movements for national independence. 
        Today, the revolt is seen as a key event in Kazakhstan’s struggle for freedom.
      `,
      image:
        'https://egi.kz/wp-content/uploads/2016/03/ult.jpg'
    }
  ]

  const [selectedEvent, setSelectedEvent] = useState<EventType>(events[0])
  const [direction, setDirection] = useState(1)
  const cardRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    events.forEach(event => {
      const img = new Image()
      img.src = event.image
    })
  }, [events])

  useLayoutEffect(() => {
    if (!cardRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(
        cardRef.current,
        { opacity: 0, y: direction > 0 ? 40 : -40 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'back' }
      )
    })

    return () => ctx.revert()
  }, [selectedEvent, direction])

  const handleSelect = (event: EventType) => {
    setDirection(event.id > selectedEvent.id ? 1 : -1)
    setSelectedEvent(event)
  }

  return (
    <div className="relative p-4 min-h-screen">
      <div className="fixed inset-0 -z-10">
        <StarsBackgroundDemo />
      </div>

      <Header />

      <section className="mx-auto max-w-6xl px-4 py-6 relative z-10">
        <h1 className="text-4xl font-bold mb-10 text-center">
          National Liberation Revolt of 1916 in Kazakhstan
        </h1>

        <div className="hidden md:grid md:grid-cols-[1fr_2fr] gap-10">
          <div className="space-y-6">
            {events.map((event, i) => (
              <div key={event.id} className="relative">
                <button
                  onClick={() => handleSelect(event)}
                  className={`
                    flex flex-col text-left w-full p-4 rounded-xl border transition-all duration-300
                    ${
                      selectedEvent.id === event.id
                        ? 'bg-primary text-primary-foreground shadow-md scale-[1.02]'
                        : 'bg-muted/40 hover:bg-muted/60 backdrop-blur-sm border-white/10'
                    }`}
                >
                  <span className="text-sm opacity-70">{event.year}</span>
                  <span className="text-lg font-semibold">{event.title}</span>
                </button>

                {i < events.length - 1 && (
                  <Separator className="my-4 mx-auto w-0.5 h-6 bg-border/50" />
                )}
              </div>
            ))}
          </div>

          <div ref={cardRef}>
            <Card
              className="
                overflow-hidden backdrop-blur-md bg-white/10 dark:bg-white/5 
                border border-white/20 shadow-lg 
                hover:shadow-xl transition-all duration-500
              "
            >
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full max-h-94 object-cover rounded-b-2xl p-4"
              />
              <CardHeader>
                <CardTitle>{selectedEvent.title}</CardTitle>
                <CardDescription>{selectedEvent.year}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedEvent.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="md:hidden m-0">
          <MobileTimeline events={events} />
        </div>
      </section>
    </div>
  )
}
