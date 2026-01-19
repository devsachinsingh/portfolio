"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SectionHeaderProps {
  title: string
  subtitle: string
  viewAllHref?: string
  viewAllLabel?: string
  centered?: boolean
}

export function SectionHeader({
  title,
  subtitle,
  viewAllHref,
  viewAllLabel = "View All",
  centered = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex items-center justify-between mb-12 ${centered ? "flex-col text-center" : ""}`}
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <p className="text-muted-foreground mt-2">{subtitle}</p>
      </div>
      {viewAllHref && !centered && (
        <Button asChild variant="outline" className="gap-2 bg-transparent hidden md:flex">
          <Link href={viewAllHref}>
            {viewAllLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      )}
    </motion.div>
  )
}
