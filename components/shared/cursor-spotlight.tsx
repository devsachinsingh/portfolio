"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CursorSpotlight() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 200 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    document.body.style.cursor = "none"

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.body.addEventListener("mouseenter", handleMouseEnter)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.body.style.cursor = "auto"
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.body.removeEventListener("mouseenter", handleMouseEnter)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [cursorX, cursorY])

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 0.8 : 1,
            rotate: isClicking ? -10 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" className="drop-shadow-lg">
            {/* Pikachu cursor SVG */}
            {/* Ears */}
            <path d="M25 35 L15 5 L35 25 Z" fill="#FFD93D" stroke="#222" strokeWidth="2" />
            <path d="M75 35 L85 5 L65 25 Z" fill="#FFD93D" stroke="#222" strokeWidth="2" />
            {/* Ear tips - black */}
            <path d="M17 12 L15 5 L22 15 Z" fill="#222" />
            <path d="M83 12 L85 5 L78 15 Z" fill="#222" />
            {/* Head */}
            <ellipse cx="50" cy="55" rx="35" ry="32" fill="#FFD93D" stroke="#222" strokeWidth="2" />
            {/* Red cheeks */}
            <ellipse cx="22" cy="60" rx="8" ry="6" fill="#FF6B6B" />
            <ellipse cx="78" cy="60" rx="8" ry="6" fill="#FF6B6B" />
            {/* Eyes */}
            <ellipse cx="38" cy="50" rx="6" ry="8" fill="#222" />
            <ellipse cx="62" cy="50" rx="6" ry="8" fill="#222" />
            {/* Eye shine */}
            <ellipse cx="40" cy="47" rx="2" ry="3" fill="#fff" />
            <ellipse cx="64" cy="47" rx="2" ry="3" fill="#fff" />
            {/* Nose */}
            <ellipse cx="50" cy="58" rx="3" ry="2" fill="#222" />
            {/* Mouth */}
            <path d="M42 65 Q50 72 58 65" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Spotlight glow effect */}
      <motion.div
        className="fixed pointer-events-none z-30 w-[500px] h-[500px] rounded-full"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(255, 217, 61, 0.08) 0%, rgba(255, 107, 107, 0.02) 40%, transparent 70%)",
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  )
}
