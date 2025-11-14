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
      "One of the most significant national liberation movements of the early 20th century against the colonial policies of the Russian Empire.",
    content:
      "The uprising of 1916 was a mass revolt of the Kazakh population against the forced mobilization of non-Russian men for rear-line work during World War I. The decree issued by Tsar Nicholas II on June 25, 1916 required the conscription of Indigenous peoples aged 19–43, who had previously been exempt from military service. This decision provoked widespread outrage. Combined with decades of land seizures, administrative control, rising taxes, and restrictions on traditional nomadic life, the decree became the immediate trigger that ignited large-scale resistance across the Kazakh steppe."
  },
  {
    title: "Causes of the Uprising",
    description:
      "Deep social, economic, and political tensions accumulated over decades of colonization.",
    content:
      "The roots of the revolt lay in long-term colonial policies implemented since the mid-19th century. Large areas of fertile land were confiscated and transferred to Russian and Ukrainian settlers through the Resettlement Administration. Kazakh nomads lost access to key pastures and water sources, leading to economic hardship and the disruption of traditional migration routes. Heavy taxation, corruption among local administrators, and forced sedentarization further deepened dissatisfaction. The decree of June 25, 1916 became the ultimate spark that turned discontent into organized resistance."
  },
  {
    title: "Course of Events",
    description:
      "Major centers of resistance and key leaders of the 1916 movement.",
    content:
      "The uprising rapidly spread across several regions, including Torgai, Semirechye (Jetisu), Akmola, Uralsk, and Syr-Darya. In the Torgai region, the movement was led by Amangeldy Imanov, supported by prominent figures such as Älihan Bökeikhanov and Äubakir Zhanbosynov. His forces managed to form organized detachments and carried out coordinated attacks on Russian garrisons. In Semirechye, Bekbolat Äshkeev led thousands of rebels, while Tokash Bokin agitated among urban and rural workers. Other notable leaders included Keyk Batyr and Üzak Kuldibayev. Rebels targeted administrative posts, disrupted communication lines, and confronted colonial authorities in attempts to restore autonomy and resist mobilization."
  },
  {
    title: "Suppression and Consequences",
    description:
      "Brutal military response and long-term effects on the Kazakh population.",
    content:
      "The Tsarist authorities responded with mass punitive operations. Imperial troops, supported by Cossack units and armed settlers, carried out harsh reprisals. Entire auls (villages) were burned, property was confiscated, and suspected participants were executed without trial. Tens of thousands of Kazakhs were forced to flee to China during the tragic 'Alash köşі', many dying during the crossing of mountain passes. According to various estimates, the total casualties ranged from 100,000 to 200,000 people. Although the uprising was suppressed, it weakened trust in imperial rule and accelerated political mobilization among Kazakhs after the February Revolution of 1917."
  },
  {
    title: "Historical Significance",
    description:
      "How the 1916 uprising shaped national memory and identity in Kazakhstan.",
    content:
      "The 1916 uprising is regarded as a key turning point in the national liberation movement of the Kazakh people. It exposed the systemic injustices of colonial administration and strengthened demands for political autonomy, contributing to the formation of the Alash movement in 1917. The revolt is remembered today as a symbol of bravery and collective resistance. Monuments, museums, and research centers commemorate the heroes of 1916, while modern historians emphasize its lasting impact on national consciousness and the future struggle for independence."
  }
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
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">
          Let's reconstruct the chronology of events
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-50 md:mb-0">
          Let's delve into the key stages of the 1916 uprising and see how events unfolded.
        </p>
      </div>

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
