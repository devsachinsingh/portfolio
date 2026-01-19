import { Hero, TechStack, Experience, Projects, Articles, Footer } from "@/components/home"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Articles />
      <Footer />
    </main>
  )
}
