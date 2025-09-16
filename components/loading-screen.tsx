"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const name = "Waqas Bukhari"

  useEffect(() => {
    // Simulate progress with intervals
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 300)

    // Simple timeout to hide loading screen
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3500)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotate: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const progressVariants = {
    hidden: { width: "0%" },
    visible: {
      width: `${progress}%`,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  const particleVariants = {
    animate: {
      y: [0, -40, 0],
      x: [0, 20, -20, 0],
      opacity: [0.3, 1, 0.3],
      scale: [0.8, 1.4, 0.8],
      rotate: [0, 180, 360],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  background: Math.random() > 0.5 ? "#fc52ff" : "#00e1f4",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${4 + Math.random() * 8}px`,
                  height: `${4 + Math.random() * 8}px`,
                  filter: "blur(1px)",
                }}
                variants={particleVariants}
                animate="animate"
                transition={{
                  delay: Math.random() * 2,
                  duration: 3 + Math.random() * 3,
                }}
              />
            ))}
          </div>

          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                                  linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
                maskImage: "radial-gradient(circle at center, black, transparent 70%)",
              }}
            />
          </div>

          <div className="flex flex-col items-center justify-center z-10 relative">
            {/* Avatar with enhanced animation */}
            <motion.div className="mb-8" variants={floatingVariants} animate="animate">
              <div className="relative">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-primary/50 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse" />
                  <Image
                    src="/images/waqas-bukhari.webp"
                    alt="Waqas Bukhari"
                    width={112}
                    height={112}
                    className="w-full h-full object-cover relative z-10"
                    priority
                  />
                </div>
                {/* Outer ring pulse effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeOut",
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-secondary/30"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeOut",
                    delay: 1,
                  }}
                />
              </div>
            </motion.div>

            {/* Name with enhanced animation */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                {name.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    variants={letterVariants}
                    transition={{
                      delay: index * 0.07,
                    }}
                    whileHover={{ scale: 1.2, y: -5 }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            {/* Progress Bar with percentage */}
            <div className="w-72 mb-4">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Loading...</span>
                <span>{Math.min(100, Math.round(progress))}%</span>
              </div>
              <motion.div
                className="h-2 bg-gray-800 rounded-full overflow-hidden"
                variants={itemVariants}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
                  variants={progressVariants}
                  animate="visible"
                >
                  <motion.div
                    className="absolute right-0 top-0 h-full w-2 bg-white opacity-50"
                    animate={{
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Loading Text with typing indicator */}
            <motion.div
              className="text-sm text-gray-400 flex items-center"
              variants={itemVariants}
              animate={{
                opacity: [0.5, 1, 0.5],
                transition: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            >
              <span>Initializing AI Automation</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                ...
              </motion.span>
            </motion.div>
          </div>

          {/* Background effects */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_70%)]" />
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
              scale: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
