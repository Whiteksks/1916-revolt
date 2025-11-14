'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { motion } from 'framer-motion'
import { StarsBackgroundDemo } from '@/components/layout/starBackground'
import Header from '@/components/layout/header'
import { cn } from '@/lib/utils'

export default function SourcesPage() {
  const sources = [
    {
      title: '“The Time of Ordeal”: The 1916 Revolt in Central Asia — IIAS Newsletter',
      description: 'Article by Zifa Auezova on the 1916 Central Asian revolt, exploring its causes, key events, and legacy across Turkestan and Kazakhstan.',
      link: 'https://www.iias.asia/the-newsletter/article/time-ordeal-story-1916-revolt-central-asia',
    },
    {
      title: 'Central Asian Revolt of 1916 — Wikipedia',
      description: 'Comprehensive overview of the 1916 anti-Russian uprising in Central Asia: mobilization decree, scale of rebellion, suppression, and aftermath.',
      link: 'https://en.wikipedia.org/wiki/Central_Asian_revolt_of_1916',
    },
    {
      title: 'E-History.kz — Portal “History of Kazakhstan”',
      description: 'English-language site of the national digital history of Kazakhstan, including a section on the 1916 uprising and its significance.',
      link: 'https://e-history.kz/en/history-of-kazakhstan/show/9602',
    },
  ];

  const references = [
    "Abduqahorov, A. (2025, June 29). RESISTANCE TO COLONIAL POLICY: THE 1916 TURKESTAN UPRISING BASED ON NEW RESEARCH. Journal of Applied Science and Social Science. https://inlibrary.uz/index.php/jasss/article/view/114192",
    "The revolt of 1916 in Russian Central Asia. (2016). Google Books. https://books.google.kz/books?id=LrhQDAAAQBAJ",
    "Jumayev, A. H. (2025, October 28). THE BEGINNING OF THE 1916 UPRISING IN TURKESTAN. https://www.wosjournals.com/index.php/shokh/article/view/5778",
    "Saktaganova, E., Çetin, N., Oshangaliyev, K., Aitmagambetov, D., & Sailaubai, Y. (2025). Political and social transformation of Kazakhstan during the years of revolutions. Nationalities Papers, 1–20. https://doi.org/10.1017/nps.2025.10103",
    "Turkestan and the fate of the Russian Empire. (2003). Google Books. https://books.google.kz/books?id=xrH_YPr4gOsC&pg=PA5",
  ];

  return (
    <div className="relative p-4 h-screen">
      <div className="fixed inset-0 -z-10">
        <StarsBackgroundDemo />
      </div>

      <div className="relative z-10">
        <Header />

        <main className="mx-auto max-w-5xl mt-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-bold tracking-tight mb-6 text-2xl"
          >
            Sources and References
          </motion.h1>

          <p className="text-muted-foreground mb-10">
            This page gathers key links and bibliographic materials used in preparing the content on the National Liberation Revolt of 1916 in Kazakhstan.
          </p>

          <section className="space-y-8">
            <Card
              className={cn(
                "backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 shadow-lg transition-all duration-500",
                "hover:bg-white/20 hover:shadow-xl"
              )}
            >
              <CardHeader>
                <CardTitle>References (bibliography)</CardTitle>
                <CardDescription>
                  Books and scholarly publications underpinning this topic.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  {references.map((item, i) => {
                    const parts = item.split(/(https?:\/\/[^\s]+)/g)
                    return (
                      <li key={i}>
                        {parts.map((part, index) =>
                          /^https?:\/\//.test(part) ? (
                            <a
                              key={index}
                              href={part}
                              className="text-primary hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {part}
                            </a>
                          ) : (
                            <span key={index}>{part}</span>
                          )
                        )}
                      </li>
                    )
                  })}
                </ul>
              </CardContent>
            </Card>

            <Separator className="opacity-40" />

            <Card
              className={cn(
                "backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 shadow-lg transition-all duration-500",
                "hover:bg-white/20 hover:shadow-xl"
              )}
            >
              <CardHeader>
                <CardTitle>Online Sources</CardTitle>
                <CardDescription>
                  Trusted sites and archives for further study.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {sources.map((source, i) => (
                  <div key={i}>
                    <a
                      href={source.link}
                      className="text-primary font-medium hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source.title}
                    </a>
                    <p className="text-muted-foreground">{source.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  )
}
