// Home page specific data - tech stack, experiences

import { 
  Zap, Smartphone, Palette, Link, Brain, Cuboid, 
  FileCode, AppWindow, Server, Braces, Globe, 
  Sparkles, Flame, GitBranch, RefreshCw, Search
} from "lucide-react";

/**
 * MOCK DATA SECTION
 * Note: In your local project, these imports come from "@/lib/data"
 * I am including them here so the preview works correctly.
 */
export const techStackCategories = [
  {
    name: "iOS Development",
    color: "from-orange-500 to-amber-500",
    glow: "rgba(249, 115, 22, 0.15)",
    items: [
      { name: "Swift", level: 95, icon: Zap },
      { name: "SwiftUI", level: 90, icon: Smartphone },
      { name: "UIKit", level: 92, icon: Palette },
      { name: "Combine", level: 85, icon: Link },
      { name: "Core ML", level: 85, icon: Brain },
      { name: "ARKit", level: 82, icon: Cuboid },
    ],
  },
  {
    name: "Android Development",
    color: "from-green-500 to-emerald-500",
    glow: "rgba(34, 197, 94, 0.15)",
    items: [
      { name: "Kotlin", level: 65, icon: FileCode },
      { name: "Jetpack Compose", level: 65, icon: AppWindow },
    ],
  },
  {
    name: "Backend & APIs",
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(59, 130, 246, 0.15)",
    items: [
      { name: "Node.js", level: 60, icon: Server },
      { name: "TypeScript", level: 60, icon: Braces },
      { name: "REST APIs", level: 65, icon: Globe },
    ],
  },
  {
    name: "AI & Tools",
    color: "from-purple-500 to-pink-500",
    glow: "rgba(168, 85, 247, 0.15)",
    items: [
      { name: "Gemini AI", level: 70, icon: Sparkles },
      { name: "Firebase", level: 80, icon: Flame },
      { name: "Git", level: 85, icon: GitBranch },
      { name: "CI/CD", level: 85, icon: RefreshCw },
    ],
  },
];
// Keep flat techStack for marquee compatibility
export const techStack = techStackCategories.flatMap((cat) => cat.items)

export const experiences = [
  {
    id: 1,
    role: "Lead Developer",
    company: "FutureSoft (INDIA) Private Limited",
    period: "2022 — Present",
    description:
      "Drive the design and delivery of high-performance mobile applications while leading both iOS and Android teams. I focus on guiding development teams through scrum and sprint planning, mentoring junior developers, and overseeing the entire development lifecycle—from effort estimation and client requirement refinement to successful App Store releases.",
    technologies: ["iOS", "Android", "Node.js", "SwiftUI", "MVVM", "Scrum"],
},
  {
    id: 2,
    role: "iOS Developer",
    company: "FutureSoft (INDIA) Private Limited",
    period: "2019 — 2022",
    description:
      "Designed, developed, and deployed performance-oriented iOS applications leveraging Swift, SQLite, and ARKit. Collaborated with product managers and designers to deliver scalable solutions using MVC and MVVM patterns to ensure clean, maintainable code.",
    technologies: ["Swift", "ARKit", "SQLite", "MVVM", "MVC", "OOP"],
}
]

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Articles", href: "/articles" },
]
