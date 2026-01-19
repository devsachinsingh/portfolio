"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { projects } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/shared/section-header"
import { ProjectCard } from "@/components/projects/project-card"

export function Projects() {
  const featuredProjects = projects.slice(0, 5)

  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of my recent work"
          viewAllHref="/projects"
          viewAllLabel="View All"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex justify-center md:hidden"
        >
          <Button asChild variant="outline" className="gap-2 bg-transparent">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
