"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { articles } from "@/lib/data"
import { BackButton } from "@/components/shared/back-button"
import { TiltCard } from "@/components/shared/tilt-card"

export default function ArticlesPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold mt-6">All Articles</h1>
          <p className="text-muted-foreground mt-2">Thoughts, tutorials, and insights from my experience</p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard tiltAmount={5}>
                <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-muted-foreground text-sm mb-3">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{article.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded-md text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button asChild variant="outline" size="sm" className="gap-2 bg-transparent">
                      <a href={article.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        Read on LinkedIn
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </TiltCard>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  )
}
