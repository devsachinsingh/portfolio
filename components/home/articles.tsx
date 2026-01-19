"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { articles } from "@/lib/data"
import { SectionHeader } from "@/components/shared/section-header"
import { TiltCard } from "@/components/shared/tilt-card"

export function Articles() {
  const featuredArticles = articles.slice(0, 3)

  return (
    <section className="py-20 px-4" id="articles">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Articles"
          subtitle="Thoughts and insights from my experience"
          viewAllHref="/articles"
          viewAllLabel="View All"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{article.excerpt}</p>

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex justify-center md:hidden"
        >
          <Button asChild variant="outline" className="gap-2 bg-transparent">
            <Link href="/articles">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
