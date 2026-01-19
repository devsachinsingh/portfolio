"use client"

import { motion } from "framer-motion"
import { projects } from "@/lib/data"
import { BackButton } from "@/components/shared/back-button"
import { ProjectCard } from "@/components/projects/project-card"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <BackButton href="/" label="Back to Home" />
          <h1 className="text-3xl md:text-4xl font-bold mt-6">All Projects</h1>
          <p className="text-muted-foreground mt-2">A complete collection of my work and side projects</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  )
}
