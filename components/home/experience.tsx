"use client"

import { motion } from "framer-motion"
import { experiences } from "@/lib/data"
import { SectionHeader } from "@/components/shared/section-header"
import { TiltCard } from "@/components/shared/tilt-card"

export function Experience() {
  return (
    <section className="py-20 px-4" id="experience">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Experience" subtitle="My professional journey" centered />

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 -translate-x-1 mt-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
              />

              {/* Date - Desktop */}
              <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                <span className="text-muted-foreground text-sm font-medium">{exp.period}</span>
              </div>

              {/* Content */}
              <div className={`pl-8 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                {/* Date - Mobile */}
                <span className="md:hidden text-muted-foreground text-sm font-medium block mb-2">{exp.period}</span>

                <TiltCard tiltAmount={5}>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium mt-1">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-secondary rounded-md text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
