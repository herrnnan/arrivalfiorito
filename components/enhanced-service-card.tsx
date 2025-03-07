"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface EnhancedServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  index: number
  accentColor?: string
  imageUrl?: string
}

export function EnhancedServiceCard({
  icon,
  title,
  description,
  index,
  accentColor = "from-primary/20 to-primary/5",
  imageUrl,
}: EnhancedServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
      },
    }),
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={cardRef}
      className="h-full"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      custom={index}
      whileHover="hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative h-full overflow-hidden rounded-xl p-6 transition-all duration-300",
          "bg-gradient-to-br from-background to-secondary/10",
          "border border-border/50 hover:border-primary/30",
          "shadow-sm hover:shadow-md",
          isHovered ? "translate-y-[-5px]" : "",
        )}
      >
        {/* Background gradient overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500",
            accentColor,
            isHovered ? "opacity-100" : "",
          )}
        />

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id={`grid-${index}`} width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill={`url(#grid-${index})`} />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          <motion.div
            className="mb-4 flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 text-primary"
            variants={iconVariants}
          >
            {icon}
          </motion.div>

          <motion.h3
            className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300"
            variants={childVariants}
          >
            {title}
          </motion.h3>

          <motion.p className="text-muted-foreground leading-relaxed" variants={childVariants}>
            {description}
          </motion.p>

          {/* Decorative elements */}
          <div
            className={cn(
              "absolute bottom-0 right-0 w-24 h-24 rounded-tl-full bg-primary/5 transition-all duration-500",
              isHovered ? "scale-125" : "scale-100",
            )}
          />

          <div
            className={cn(
              "absolute top-4 right-4 w-2 h-2 rounded-full bg-primary transition-all duration-300",
              isHovered ? "opacity-100" : "opacity-30",
            )}
          />

          <div
            className={cn(
              "absolute bottom-4 left-4 w-3 h-3 rounded-full bg-secondary transition-all duration-300",
              isHovered ? "opacity-100" : "opacity-30",
            )}
          />
        </div>
      </div>
    </motion.div>
  )
}

