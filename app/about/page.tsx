"use client"

import { motion } from "framer-motion"
import { Camera, Plane, Coffee, Dumbbell, Leaf, Trees, Sun, Quote, MapPin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { aboutMe, personalInfo } from "@/lib/data"
import { BackButton } from "@/components/shared/back-button"
import { TiltCard } from "@/components/shared/tilt-card"
import Image from "next/image"
import Link from "next/link"

const iconMap = {
  Camera,
  Plane,
  Coffee,
  Dumbbell,
  Leaf,
  Trees,
  Sun,
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <BackButton href="/" label="Back to Portfolio" />

          <div className="text-center mt-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-40 h-40 mx-auto mb-8"
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 glow">
                <Image src="/about/aboutMe1.jpeg" alt={personalInfo.name} fill className="object-cover" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Hey, I&apos;m <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              {aboutMe.intro}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TiltCard tiltAmount={3}>
              <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="w-8 h-8 text-primary shrink-0 mt-1" />
                  <div className="space-y-4">
                    {aboutMe.bio.map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground text-lg leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary mt-8">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Moments I&apos;ve Captured</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Life through my lens - adventures, coffee, and everything in between.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {aboutMe.gallery.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group relative overflow-hidden rounded-xl border border-border ${
                  index === 0 || index === 5 ? "md:row-span-2 aspect-[3/4]" : "aspect-square"
                }`}
              >
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium text-foreground">{photo.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Love</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              The things that fuel my creativity and keep me inspired.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {aboutMe.hobbies.map((hobby, index) => {
              const Icon = iconMap[hobby.icon as keyof typeof iconMap]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <TiltCard tiltAmount={5}>
                    <div className="group bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-colors duration-300 h-full">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{hobby.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{hobby.description}</p>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fun Facts</h2>
            <p className="text-muted-foreground">A few random things about me</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {aboutMe.funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-card rounded-xl border border-border p-6 flex items-center gap-4 hover:border-primary/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground">{fact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-muted-foreground mb-8">
            Whether you want to talk tech, share travel stories, or debate the best coffee brewing method - I&apos;m
            always up for a good conversation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <a href={`mailto:${personalInfo.email}`}>Get in Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent">
              <Link href="/">View My Work</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
