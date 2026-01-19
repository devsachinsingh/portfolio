"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { MagneticButton } from "@/components/shared/magnetic-button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">
              <span className="gradient-text">{personalInfo.name}</span>
            </h3>
            <p className="text-muted-foreground">{personalInfo.role}</p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: personalInfo.github, label: "GitHub" },
              { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: Twitter, href: personalInfo.twitter, label: "Twitter" },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <MagneticButton key={label} strength={0.4}>
                <a
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              </MagneticButton>
            ))}
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
            </p>
            <p className="mt-2">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
