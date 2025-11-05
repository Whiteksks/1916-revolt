"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/footer";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "The 1916 Uprising in Kazakhstan",
    description:
      "One of the largest national liberation movements in the early 20th century against the colonial policy of the Russian Empire.",
    content:
      "The uprising of 1916 was a mass revolt of the Kazakh people against forced conscription into rear-line labor during World War I. The Tsarist decree of June 25, 1916, which ordered the mobilization of non-Russian men aged 19–43, sparked widespread outrage. Combined with decades of land seizures, taxes, and the erosion of local autonomy, this decree ignited a wave of resistance across the Kazakh steppe.",
  },
  {
    title: "Causes of the Uprising",
    description:
      "Social, economic, and political tensions accumulated over decades of colonization.",
    content:
      "The roots of the revolt lay in the long-standing injustices of the colonial system: confiscation of fertile lands for Russian settlers, heavy taxation, and administrative repression. The Kazakh nomads were increasingly marginalized, losing access to pastures and water sources. The 1916 decree by Tsar Nicholas II became the final catalyst for open rebellion.",
  },
  {
    title: "Course of Events",
    description:
      "Major centers of resistance and the heroic figures who led them.",
    content:
      "The uprising spread rapidly across the Kazakh steppes, particularly in the regions of Torgai, Semirechye (Jetisu), and Syr-Darya. In Torgai, the revolt was led by Amangeldy Imanov and his spiritual advisor Älihan Bökeikhanov, while in Semirechye, Bekbolat Äshkeev emerged as a prominent leader. The rebels launched attacks on Russian garrisons and administrative centers, seeking to reclaim autonomy and resist forced labor mobilization.",
  },
  {
    title: "Suppression and Consequences",
    description:
      "Brutal repression and the tragic aftermath of the uprising.",
    content:
      "The Tsarist regime responded with extreme violence. Tens of thousands of Kazakhs were executed, imprisoned, or forced to flee to China. Entire villages were burned, and traditional structures of governance were destroyed. Despite the defeat, the uprising became a powerful symbol of resistance and national awakening. It laid the groundwork for the later struggle for independence and inspired future generations of Kazakh patriots.",
  },
  {
    title: "Historical Significance",
    description:
      "The legacy of the 1916 revolt in Kazakh national memory.",
    content:
      "The 1916 uprising is remembered today as a defining moment in the history of Kazakhstan’s national identity. It exposed the deep injustices of the colonial system and awakened a collective consciousness among the Kazakh people. In independent Kazakhstan, monuments and museums commemorate the bravery and sacrifice of those who fought for freedom.",
  },
];


export default function Content() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        gsap.set(card, {
          opacity: 0,
          scale: 0.9,
          filter: "blur(20px)",
          y: 100,
        });

        gsap.to(card, {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 80%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full pt-32 space-y-40 from-background via-muted/10 to-background  overflow-x-hidden">
      {/* --- Заголовок без анимации --- */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">
          Let's reconstruct the chronology of events
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-50 md:mb-0">
          Let's delve into the key stages of the 1916 uprising and see how events unfolded.
        </p>
      </div>

      {/* --- Карточки --- */}
      {sections.map((section, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) cardsRef.current[i] = el;
          }}
          className="w-[92%] sm:w-4/5 md:w-3/5 lg:w-1/2"
        >
          <Card className="bg-card/70 backdrop-blur-xl shadow-2xl border border-border/40 rounded-3xl overflow-hidden transform-gpu">
            <CardHeader className="text-center space-y-3 px-8 py-6">
              <CardTitle className="text-3xl md:text-4xl font-bold text-primary">
                {section.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground text-base">
                {section.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-10 text-center">
              <p className="text-foreground/90 leading-relaxed text-lg md:text-xl">
                {section.content}
              </p>

              {i === sections.length - 1 && (
                <div className="mt-10 flex justify-center">
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-4 rounded-full text-lg font-medium shadow-md"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Back to the start
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      ))}
      <Footer/>
    </div>
  );
}
