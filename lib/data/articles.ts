// Articles data
export interface Article {
  id: number
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  linkedinUrl: string
  image: string
  tags: string[]
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "is-your-ai-assistant-leaking-your-secrets",
    title: "Is Your AI Assistant Leaking Your Secrets?",
    excerpt: "Stop hardcoding API keys. Discover why static credentials are a security risk and how to implement safer identity management strategies.",
    date: "Nov 2025",
    readTime: "2 min read",
    linkedinUrl: "https://www.linkedin.com/pulse/read-you-still-have-static-keys-your-system-sachin-singh-q3lxc/?trackingId=BqPBcOqqRtGabLF19sdZDw%3D%3D",
    image: "/articles/article1.png", 
    tags: ["MobileAppSecurity", "IdentityManagement", "DevSecOps"],
},
  {
    id: 2,
    slug: "from-coder-to-engineer-overcoming-ignorance-and-speed",
    title: "From Coder to Engineer: Overcoming the Traps of Ignorance and Speed",
    excerpt: "Moving beyond 'just making it work.' A guide on balancing development speed with robust software design and avoiding the pitfalls of technical debt.",
    date: "Nov 2024",
    readTime: "2 min read",
    linkedinUrl: "https://www.linkedin.com/pulse/from-coder-engineer-overcoming-traps-ignorance-speed-sachin-singh-dtvzc/?trackingId=ubrjNFwHT0iujPd8uRNKzw%3D%3D", // Kept as requested
    image: "/articles/article2.png", 
    tags: ["AI", "iOS", "Android", "CleanCode", "SoftwareDesign"],
},
  {
    id: 3,
    slug: "swift-actors-reentrancy-pitfalls",
    title: "Your Actor Is Not A Lock: The Truth About Reentrancy",
    excerpt: "Demystifying one of Swift Concurrency's most misunderstood behaviors to prevent data races and unexpected state changes.",
    date: "Jan 2026",
    readTime: "5 min read", // Complex technical topics usually require a longer read time
    linkedinUrl: "https://www.linkedin.com/posts/sachin-singh-00101_swiftlang-iosdevelopment-softwarearchitecture-activity-7417605487569059840-EfMm?utm_source=share&utm_medium=member_desktop&rcm=ACoAACQ5mcgBnBSzfsr39f6ofPz1MxADuhhYDwk",
    image: "/articles/article3.jpeg", 
    tags: ["Swift", "Concurrency", "iOS Architecture", "Actors"],
  },
]
