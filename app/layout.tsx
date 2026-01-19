import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import { CursorSpotlight } from "@/components/shared/cursor-spotlight"
import { ScrollProgress } from "@/components/shared/scroll-progress"
import { NoiseOverlay } from "@/components/shared/noise-overlay"
import { LoadingScreen } from "@/components/shared/loading-screen"
import { Navbar } from "@/components/shared/navbar"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sachin Singh | Lead Developer",
  description:
    "Lead Developer with 6+ years of experience in Swift, SwiftUI, and building exceptional mobile experiences.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        <LoadingScreen />
        <ScrollProgress />
        <CursorSpotlight />
        <NoiseOverlay />
        <Navbar />
        {children}
        <ThemeToggle />
        <Analytics />
      </body>
    </html>
  )
}
