"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, useAnimation, type PanInfo } from "framer-motion"
import { ExternalLink, Github, ChevronLeft, ChevronRight, Smartphone, Globe, Target, Film, Bot } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "AI-Powered Portfolio Websites",
    description:
      "I create stunning, high-performance portfolio websites using Next.js and AI tools to deliver modern, responsive designs tailored to your personal brand.",
    longDescription:
      "Leveraging the power of Next.js and AI, I build cutting-edge portfolio websites that load fast, rank well, and convert visitors. These sites are fully responsive, SEO-optimized, and designed to showcase your work with elegance and impact.",
    tags: ["Next.js", "AI", "Portfolio", "Frontend"],
    image: "/images/projects/task-management-app.png",
    links: {
      demo: "#",
      github: "#",
    },
    features: ["Task Management", "Reward System", "Progress Tracking", "Social Rankings"],
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Business & One-Page Websites",
    description:
      "I build sleek business websites and single-product landing pages using Next.js — optimized for speed, conversions, and search engine visibility.",
    longDescription:
      "From corporate business sites to focused one-page product launches, I use Next.js to craft high-converting, mobile-first websites. Every site is built with performance, accessibility, and user experience as top priorities.",
    tags: ["Next.js", "Business Websites", "One-Page", "Landing Pages"],
    image: "/images/projects/business-software.webp",
    links: {
      demo: "#",      
    },
    features: ["Integrated Calendar", "Team Chat", "CRM System", "ERP Module"],
    color: "from-purple-500/20 to-blue-500/20",
  },
  {
    title: "Online Tools & Utilities",
    description:
      "I develop practical online tools like MP4 to GIF converters and Google AdSense revenue calculators — simple, fast, and built with Next.js for maximum efficiency.",
    longDescription:
      "These utility websites solve real-world problems with clean interfaces and instant results. Built using Next.js for server-side rendering and optimal performance, tools like video converters and ad revenue calculators are designed for speed and reliability.",
    tags: ["Next.js", "Online Tools", "MP4 to GIF", "AdSense Calculator"],
    image: "/images/Adsense-revenue-calculator.png",
    links: {
      demo: "https://informi.online/",
      github: "#",
    },
    features: ["Revenue Calculator", "Ad Unit Generator", "Policy Checker", "Placement Optimizer"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Next.js Frontend Mastery",
    description:
      "Next.js is my go-to framework for building next-level frontend experiences — from static sites to dynamic web apps with seamless navigation and SEO.",
    longDescription:
      "I harness the full power of Next.js to create blazing-fast, SEO-friendly websites with features like SSR, ISR, API routes, and image optimization. Whether it’s a marketing site or a complex web app, Next.js delivers unmatched frontend performance.",
    tags: ["Next.js", "Frontend Development", "SSR", "SEO"],
    image: "/images/projects/film-finder.png",
    links: {
      demo: "#",
      github: "#",
    },
    features: ["AI Recommendations", "Movie Database", "User Profiles", "Review System"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "AI + Next.js Web Solutions",
    description:
      "Combining AI capabilities with Next.js architecture, I build intelligent, adaptive websites that respond to user behavior and deliver personalized experiences.",
    longDescription:
      "By integrating AI tools with Next.js, I create smarter websites — whether it’s content generation, dynamic layout adaptation, or predictive user interfaces. This fusion delivers next-generation web experiences that are both powerful and intuitive.",
    tags: ["AI", "Next.js", "Web Development", "Personalization"],
    image: "/images/projects/ai-automation.png",
    links: {
      demo: "#",
      github: "#",
    },
    features: ["AI Consultation", "Process Analysis", "Workflow Automation", "Smart Recommendations"],
    color: "from-cyan-500/20 to-emerald-500/20",
  },
]

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1, fallback: true })
  const controls = useAnimation()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const projectsRef = useRef<HTMLDivElement>(null)
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 })

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.1,
        },
      },
    },
    cardVariants = {
      hidden: { y: 30, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      },
    },
    itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    }

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 50
    if (info.offset.x > threshold) {
      prevProject()
    } else if (info.offset.x < -threshold) {
      nextProject()
    }
  }

  const getProjectIcon = (index: number) => {
    const icons = [
      <Smartphone key="smartphone" className="w-5 h-5 text-white" />,
      <Globe key="globe" className="w-5 h-5 text-white" />,
      <Target key="target" className="w-5 h-5 text-white" />,
      <Film key="film" className="w-5 h-5 text-white" />,
      <Bot key="bot" className="w-5 h-5 text-white" />,
    ]
    return icons[index] || <Globe className="w-5 h-5 text-white" />
  }

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(var(--primary),0.1),transparent_40%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
          style={{ opacity: 1 }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-2xl mx-auto">
            Real-world applications showcasing my expertise in AI, automation, and full-stack development
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4"
          ></motion.div>
        </motion.div>

        <div className="relative" ref={projectsRef}>
          {/* Desktop Navigation Arrows */}
          <div className="hidden lg:flex absolute top-1/2 -left-12 transform -translate-y-1/2 z-20">
            <motion.button
              onClick={prevProject}
              className="p-3 rounded-full glass hover:bg-card/50 transition-colors"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </motion.button>
          </div>

          <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
            <motion.button
              onClick={nextProject}
              className="p-3 rounded-full glass hover:bg-card/50 transition-colors"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Project Content with Swipe Support */}
          <div className="overflow-hidden">
            <motion.div
              key={activeIndex}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="grid md:grid-cols-2 gap-8 items-center project-card"
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 0.95 }}
            >
              <div className="order-2 md:order-1">
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                  style={{ opacity: 1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                      {getProjectIcon(activeIndex)}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold">{projects[activeIndex].title}</h3>
                  </div>

                  <motion.p
                    className="text-gray-300"
                    initial={{ height: "auto" }}
                    animate={{ height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    {isExpanded ? projects[activeIndex].longDescription : projects[activeIndex].description}
                  </motion.p>

                  <motion.button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-sm text-primary hover:text-secondary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {isExpanded ? "Show less" : "Read more"}
                  </motion.button>

                  <div className="flex flex-wrap gap-2">
                    {projects[activeIndex].tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full glass border border-primary/20"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <h4 className="text-lg font-medium">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {projects[activeIndex].features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-300"
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          style={{ opacity: 1 }}
                        >
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href={projects[activeIndex].links.demo}
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg glass bg-primary/10 hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={projects[activeIndex].links.github}
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg glass hover:bg-card/50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Contact
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              <div className="order-1 md:order-2">
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  className="gradient-border p-1 rounded-2xl overflow-hidden"
                  style={{ opacity: 1 }}
                >
                  <div className={`rounded-xl overflow-hidden bg-gradient-to-br ${projects[activeIndex].color} p-4`}>
                    <motion.div
                      whileHover={{ scale: 1.03, rotate: 1 }}
                      transition={{ duration: 0.3 }}
                      className="neomorphic overflow-hidden rounded-lg"
                    >
                      <Image
                        src={projects[activeIndex].image || "/placeholder.svg"}
                        alt={projects[activeIndex].title}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-primary w-6" : "bg-gray-600 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Swipe Hint */}
          <div className="lg:hidden text-center mt-4">
            <p className="text-sm text-gray-400">Swipe left or right to navigate projects</p>
          </div>
        </div>

        {/* Mobile Navigation Buttons - Positioned Higher */}
        <div className="lg:hidden flex justify-center mt-6 gap-4">
          <motion.button
            onClick={prevProject}
            className="p-3 rounded-full glass hover:bg-card/50 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous project"
          >
            <ChevronLeft size={20} />
          </motion.button>
          <motion.button
            onClick={nextProject}
            className="p-3 rounded-full glass hover:bg-card/50 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next project"
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>

        {/* Additional projects preview */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {projects
            .filter((_, idx) => idx !== activeIndex)
            .slice(0, 3)
            .map((project, idx) => (
              <motion.div
                key={idx}
                className="glass p-5 rounded-xl hover:bg-card/30 transition-all cursor-pointer project-card"
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => setActiveIndex(projects.findIndex((p) => p.title === project.title))}
              >
                <div className="h-40 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                <p className="text-sm text-gray-400 line-clamp-2 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-primary/10 border border-primary/20">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-gray-700">+{project.tags.length - 2}</span>
                  )}
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  )
}
