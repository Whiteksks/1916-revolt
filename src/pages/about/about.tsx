'use client'

import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import { Mail, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import { StarsBackgroundDemo } from '@/components/layout/starBackground'
import Header from '@/components/layout/header'

export default function AboutUs() {
  const team = [
    {
      name: 'Adil Mamadiyarov',
      role: 'Project Developer & Content Editor',
      image: 'https://github.com/Whiteksks.png',
      description:
        'Responsible for developing the website, designing the architecture, and gathering historical information for the project.',
      contacts: {
        github: 'https://github.com/Whiteksks',
        email: '250649@astanait.edu.kz',
      },
    },
    {
      name: 'Atymtay Berdikhan',
      role: 'Content Editor',
      image: 'https://github.com/evilrabbit.png',
      description:
        'Collects materials, verifies historical sources, and edits written content for accuracy.',
      contacts: {
        github: '',
        email: '251316@astanait.edu.kz',
      },
    },
    {
      name: 'Bexultan Sagyndykov',
      role: 'Group member',
      image: 'https://avatars.githubusercontent.com/u/583231?v=4',
      description:
        'Group member provides moral support and emotional assistance',
      contacts: {
        github: '',
        email: '251047@astanait.edu.kz',
      },
    },
  ]

 return (
    <div className="relative p-4 min-h-screen">
      <div className="fixed inset-0 -z-10">
        <StarsBackgroundDemo />
      </div>

      <div className="relative z-10">
        <Header />

        <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold tracking-tight mb-6 text-center"
          >
            About Us
          </motion.h1>

          <p className="text-muted-foreground mb-10 text-center max-w-3xl mx-auto">
            This website was created to explore the history of Kazakhstan. We strive to present
            historical facts in a user-friendly and visually engaging way. Below is the team working
            on this project.
          </p>

          <section className="grid gap-8 md:grid-cols-3">
            {team.map((member, i) => (
              <Card
                key={i}
                className="flex flex-col overflow-hidden h-full backdrop-blur-md 
                          bg-white/10 dark:bg-white/5 border border-white/20 
                          shadow-lg hover:bg-white/20 hover:shadow-xl 
                          transition-all duration-500"
              >
                <CardHeader className="flex flex-col items-center text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mb-4 border border-white/30 shadow-md"
                  />
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary">{member.role}</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col justify-between text-center flex-1">
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.description}
                  </p>

                  <div className="mt-auto pt-4 flex justify-center gap-4 text-muted-foreground border-t border-white/10">
                    {member.contacts.github && (
                      <a
                        href={member.contacts.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    <a
                      href={`mailto:${member.contacts.email}`}
                      className="hover:text-primary transition"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>
        </main>
      </div>
    </div>
  )
}
