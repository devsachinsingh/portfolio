"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useMemo } from "react"
import { Search } from "lucide-react"
import { techStackCategories } from "@/lib/data"
import { SectionHeader } from "@/components/shared/section-header"

/**
 * LEVEL LABEL UTILITY
 * Kept inside the file to manage specific proficiency display logic.
 */
const getLevelLabel = (level: number) => {
  if (level >= 95) return "Expert";
  if (level >= 85) return "Advanced";
  if (level >= 75) return "Proficient";
  return "Intermediate";
};

/**
 * SKILL CARD COMPONENT
 * Features animated progress bars and hover effects.
 */
interface Tech {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
}

const SkillCard = ({ tech, color, index }: { tech: Tech; color: string; index: number }) => {
  const Icon = tech.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/20 bg-card/40 p-6 backdrop-blur-md transition-all hover:border-border hover:bg-card/60"
    >
      <div className="relative z-10">
        <div className="mb-6 flex items-start justify-between">
          <div className={`rounded-2xl bg-gradient-to-br ${color} p-3 shadow-xl shadow-black/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
            <Icon className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors">
              Level
            </span>
            <span className="text-xs font-semibold text-muted-foreground">{getLevelLabel(tech.level)}</span>
          </div>
        </div>
        <h4 className="text-xl font-bold tracking-tight text-foreground">{tech.name}</h4>
      </div>

      <div className="relative z-10 mt-8 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Mastery</span>
          <span className="font-mono text-xs font-bold text-muted-foreground">{tech.level}%</span>
        </div>
        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-muted/50">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${tech.level}%` }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${color}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export function TechStack() {
  const [activeTab, setActiveTab] = useState(techStackCategories[0].name);

  const activeCategory = useMemo(() =>
    techStackCategories.find(c => c.name === activeTab),
    [activeTab]
  );

  return (
    <section className="relative min-h-screen overflow-hidden bg-background py-24 selection:bg-primary/10" id="skills">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{ backgroundColor: activeCategory?.color || 'rgba(255,255,255,0.05)' }}
          transition={{ duration: 1 }}
          className="absolute -top-[10%] left-1/2 h-[500px] w-full -translate-x-1/2 rounded-full blur-[120px] opacity-50"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <header className="mb-20 text-center">
          <SectionHeader
            title="Technical Expertise"
            subtitle="A curated collection of technologies I use to build high-performance mobile and web applications."
            centered
          />
        </header>

        {/* Tab Switcher */}
        <div className="mb-16 flex justify-center">
          <nav className="inline-flex flex-wrap justify-center gap-1 rounded-2xl bg-card/50 p-1.5 backdrop-blur-xl border border-border/20 shadow-2xl">
            {techStackCategories.map((cat) => {
              const isActive = activeTab === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveTab(cat.name)}
                  className={`relative flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-bold transition-all duration-500 ${
                    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 rounded-xl bg-muted shadow-inner border border-border"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{cat.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Dynamic Content Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="contents"
            >
              {activeCategory?.items.map((tech, idx) => (
                <SkillCard
                  key={`${activeTab}-${tech.name}`}
                  tech={tech}
                  index={idx}
                  color={activeCategory.color}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/20 bg-card/30 px-5 py-2 text-xs font-medium text-muted-foreground">
            <Search size={14} className="text-muted-foreground" />
            <span>Currently exploring <span className="text-orange-400">Swift 6 Concurrency</span> and <span className="text-purple-400">Generative AI</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}