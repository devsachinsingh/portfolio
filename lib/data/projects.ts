// Projects data with enhanced details for detail pages
export interface Project {
  id: number
  slug: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  link: string
  featured: boolean
  size: "small" | "medium" | "large"
  role: string
  timeline: string
  features: string[]
  screenshots: string[]
  appStoreUrl?: string
  playStoreUrl?: string
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "healthtrack-pro",
    title: "D'kluteř",
    subtitle: "Manage Your Personal Assets easily",
    description: "A comprehensive health monitoring app with AI-powered insights and Apple Watch integration.",
    longDescription:
      "D’kluteř is your all-in-one personal asset management app designed to bring order, security, and clarity to everything you own. Whether it’s gadgets, home appliances, business equipment, bills, invoices, IDs, receipts, or warranties, D’kluteř helps you store, track, and retrieve your assets in seconds. /nNo more digging through email inboxes, photo galleries, or drawers./nNo more missing receipts during repairs or warranty claims./nNo more confusion about what you own and where your documents are.",
    image: "/projects/dkluter_app.png",
    technologies: ["UIKit", "Gemini", "SQLite", "Apple Subscription", "Cloud Backup"],
    link: "#",
    featured: true,
    size: "large",
    role: "Lead iOS Developer",
    timeline: "2023 — Present",
    features: [
      "Custom Fields for Deep Asset Detailing Add detailed, personalized data to every asset with customizable fields. Zoom into any section within the asset detail screen to clearly view serial numbers, invoices, warranties, and important notes whenever you need them.",
      "AI-Powered Asset Discovery Tap the AI button to scan invoices, labels, product boxes, or documents instantly. D’kluteř detects names, dates, prices, serial numbers, and other key information, saving time while adding new assets.",
      "Smart Search with Reminders Find anything instantly using tags, keywords, photos, or filters. Set reminders for warranty expiries, renewals, maintenance schedules, and more, all neatly displayed in the Reminder Listing Screen.",
      "Secure View-Only Sharing Share assets safely with limited, view-only access. Set an expiry date to automatically revoke access, keeping your sensitive data private and protected.",
      "Encrypted Backup & Restore Your entire asset library is securely backed up to iCloud using strong encryption. Restore your data easily on any device without compromising privacy.",
      "Support for All Major File Formats Upload and store images, PDFs, videos, and voice notes. Every file stays organized under the asset it belongs to.",
      "Fast Tag & Image-Based Search Search by tags, keywords, or even photos to instantly locate any item or document, no matter how large your collection grows."
    ],
    screenshots: [
      "/projects/dkluter_app.png",
      "/health-app-workout-tracking.jpg",
      "/health-app-analytics-dashboard.jpg",
      "/health-app-sleep-tracking.jpg",
    ],
    appStoreUrl: "https://apps.apple.com/us/app/dklute%C5%99/id6499584739",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.fs.app.dkluter&hl=en_IN",
  },
  {
    id: 2,
    slug: "taskflow",
    title: "TaskFlow",
    subtitle: "Smart Task Management",
    description: "Minimalist task management with natural language processing.",
    longDescription:
      "TaskFlow revolutionizes task management by allowing users to create and organize tasks using natural language. Simply type or speak your task, and the app automatically extracts due dates, priorities, and categories. Built with a focus on simplicity and efficiency, TaskFlow syncs seamlessly across all your Apple devices using CloudKit.",
    image: "/task-management-dark-mode.png",
    technologies: ["Swift", "NLP", "CloudKit", "WidgetKit"],
    link: "#",
    featured: false,
    size: "small",
    role: "Solo Developer",
    timeline: "2022 — 2023",
    features: [
      "Natural language task input with smart parsing",
      "Automatic categorization and prioritization",
      "Beautiful widgets for Home Screen",
      "Seamless iCloud sync across devices",
      "Focus modes integration",
    ],
    screenshots: ["/task-app-main-screen.jpg", "/task-app-calendar-view.jpg"],
    appStoreUrl: "https://apps.apple.com",
  },
  {
    id: 3,
    slug: "ar-navigator",
    title: "AR Navigator",
    subtitle: "Indoor Navigation Reimagined",
    description: "Augmented reality indoor navigation system for large venues.",
    longDescription:
      "AR Navigator transforms how people navigate large indoor spaces like airports, shopping malls, and conference centers. Using advanced AR technology and precise indoor positioning, users can see directional arrows overlaid on the real world through their camera. The app includes accessibility features for visually impaired users with haptic feedback navigation.",
    image: "/ar-navigation-app-dark-mode.jpg",
    technologies: ["ARKit", "RealityKit", "Core Location", "MapKit"],
    link: "#",
    featured: false,
    size: "small",
    role: "AR Developer",
    timeline: "2022",
    features: [
      "Real-time AR navigation overlays",
      "Indoor positioning with sub-meter accuracy",
      "Offline map support",
      "Accessibility features with VoiceOver support",
      "Multi-floor navigation",
    ],
    screenshots: ["/ar-navigation-view.jpg", "/indoor-map-interface.jpg"],
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    slug: "cryptowallet",
    title: "CryptoWallet",
    subtitle: "Secure Digital Asset Management",
    description: "Secure cryptocurrency wallet with biometric authentication and real-time market data.",
    longDescription:
      "CryptoWallet provides a secure and intuitive way to manage digital assets. Built with security as the top priority, the app uses the Secure Enclave for key storage and requires biometric authentication for all transactions. Real-time market data and portfolio analytics help users make informed decisions.",
    image: "/crypto-wallet-app-dark-mode.jpg",
    technologies: ["SwiftUI", "CryptoKit", "WebSocket", "Charts"],
    link: "#",
    featured: true,
    size: "medium",
    role: "Senior iOS Developer",
    timeline: "2021 — 2022",
    features: [
      "Secure Enclave key storage",
      "Biometric authentication (Face ID / Touch ID)",
      "Real-time price tracking and alerts",
      "Portfolio analytics and performance tracking",
      "Multi-chain support",
      "DeFi protocol integration",
    ],
    screenshots: ["/crypto-wallet-portfolio.jpg", "/crypto-price-charts.jpg", "/crypto-send-transaction.jpg"],
    appStoreUrl: "https://apps.apple.com",
    liveUrl: "https://cryptowallet.app",
  },
  {
    id: 5,
    slug: "gemini-chat",
    title: "Gemini Chat",
    subtitle: "AI-Powered Assistant",
    description: "AI assistant powered by Gemini API with voice and image recognition.",
    longDescription:
      "Gemini Chat brings the power of Google's Gemini AI to iOS with a beautifully designed chat interface. Users can interact via text, voice, or images. The app supports multimodal conversations, code generation with syntax highlighting, and maintains conversation context for natural dialogue flow.",
    image: "/ai-chat-app-dark-mode.jpg",
    technologies: ["Swift", "Gemini AI", "Speech", "Vision"],
    link: "#",
    featured: false,
    size: "small",
    role: "Lead Developer",
    timeline: "2024",
    features: [
      "Multimodal AI conversations (text, voice, image)",
      "Code generation with syntax highlighting",
      "Conversation history with search",
      "Voice input and text-to-speech output",
      "Image analysis and description",
    ],
    screenshots: ["/ai-chat-interface.png", "/ai-image-analysis.jpg"],
    appStoreUrl: "https://apps.apple.com",
    githubUrl: "https://github.com",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}
