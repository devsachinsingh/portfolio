"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BackButtonProps {
  href: string
  label: string
}

export function BackButton({ href, label }: BackButtonProps) {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
      <Button asChild variant="ghost" className="gap-2 -ml-4">
        <Link href={href}>
          <ArrowLeft className="w-4 h-4" />
          {label}
        </Link>
      </Button>
    </motion.div>
  )
}
