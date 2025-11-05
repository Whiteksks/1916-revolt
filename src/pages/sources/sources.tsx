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
      title: 'Central Asian Revolt of 1916 — Wikipedia',
      description: 'Overview of causes, chronology, and consequences of the 1916 uprising across Turkestan and the Kazakh steppe.',
      link: 'https://en.wikipedia.org/wiki/Central_Asian_revolt_of_1916',
    },
    {
      title: 'National Digital History of Kazakhstan (E-history)',
      description: 'Articles and materials on Kazakhstan’s history, including the 1916 uprising. English section available.',
      link: 'https://e-history.kz/en/',
    },
  ]

  const references = [
    'Edward Dennis Sokol — The Revolt of 1916 in Russian Central Asia. Johns Hopkins University Press, 1954/1966.',
    'Daniel R. Brower — Turkestan and the Fate of the Russian Empire. Routledge, 2003.',
    'Martha Brill Olcott — The Kazakhs (3rd ed.). Hoover Institution Press, 2015.',
    'Adeeb Khalid — The Politics of Muslim Cultural Reform: Jadidism in Central Asia. University of California Press, 1998.',
    'Jeff Sahadeo — Russian Colonial Society in Tashkent, 1865–1923. Indiana University Press, 2007.',
    'Alexander Morrison — The Russian Conquest of Central Asia: A Study in Imperial Expansion, 1814–1914. Cambridge University Press, 2020.',
    'Zharmukhamed Zardykhan — “National Identity and Ethnic Mobilization in Kazakhstan and Kyrgyzstan: The Uprising of 1916.” Central Asian Survey, 2004.',
  ]

 return (
    <div className="relative p-4 h-screen">
      <div className="fixed inset-0 -z-10">
        <StarsBackgroundDemo />
      </div>

      <div className="relative z-10">
        <Header />

        <main className="mx-auto max-w-5xl sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold tracking-tight mb-6"
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
                  {references.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
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
                    <p className="text-muted-foreground text-sm">
                      {source.description}
                    </p>
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
