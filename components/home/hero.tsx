"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin, User } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { MagneticButton } from "@/components/shared/magnetic-button"
import { AnimatedCounter } from "@/components/shared/animated-counter"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 lg:py-0 relative overflow-hidden pt-24">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative z-10"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-sm tracking-widest uppercase mb-4"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
            >
              {"I'm "}
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-primary font-medium mb-6"
            >
              {personalInfo.role}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="grid grid-cols-4 gap-4 mb-8 py-6 px-4 bg-card/50 rounded-xl border border-border"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  <AnimatedCounter value={personalInfo.yearsOfExperience} suffix="+" />
                </div>
                <div className="text-xs text-muted-foreground mt-1">Years</div>
              </div>
              <div className="text-center border-l border-border">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  <AnimatedCounter value={personalInfo.projectsCompleted} suffix="+" />
                </div>
                <div className="text-xs text-muted-foreground mt-1">Projects</div>
              </div>
              <div className="text-center border-l border-border">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  <AnimatedCounter value={personalInfo.articlesWritten} suffix="+" />
                </div>
                <div className="text-xs text-muted-foreground mt-1">Articles</div>
              </div>
              <div className="text-center border-l border-border">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  <AnimatedCounter value={personalInfo.companiesWorked} />
                </div>
                <div className="text-xs text-muted-foreground mt-1">Companies</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <MagneticButton>
                <Button asChild size="lg" className="gap-2 focus:bg-primary/10 active:bg-primary/20">
                  <a href={personalInfo.resumeUrl} download>
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent focus:bg-primary/10 active:bg-primary/20">
                  <a href={`mailto:${personalInfo.email}`}>
                    <Mail className="w-4 h-4" />
                    Contact Me
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent focus:bg-primary/10 active:bg-primary/20">
                  <Link href="/about">
                    <User className="w-4 h-4" />
                    About Me
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex gap-4"
            >
              {[
                { icon: Github, href: personalInfo.github, label: "GitHub" },
                { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <MagneticButton key={label} strength={0.5}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 focus:bg-primary/20 focus:text-primary active:bg-primary/30 transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                </MagneticButton>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image with Flip Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="order-1 lg:order-2 flex justify-center relative z-10"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-full blur-3xl"
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

              <div
                className="relative w-64 h-64 md:w-80 md:h-80 cursor-pointer"
                style={{ perspective: "1000px" }}
                onClick={() => setIsFlipped(!isFlipped)}
                onMouseEnter={() => setIsFlipped(true)}
                onMouseLeave={() => setIsFlipped(false)}
              >
                <motion.div
                  className="relative w-full h-full"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {/* Front Image */}
                  <div
                    className="absolute inset-0 rounded-full overflow-hidden border-4 border-primary/20 glow"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <Image src="/profile.jpeg" alt={personalInfo.name} fill className="object-cover" priority />
                  </div>

                  {/* Back Image */}
                  <div
                    className="absolute inset-0 rounded-full overflow-hidden border-4 border-primary/20 glow"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    <Image
                      src="/profile1.jpeg"
                      alt={`${personalInfo.name} - alternate`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>

                {/* Hint text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap"
                >
                  Hover or tap to flip
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
