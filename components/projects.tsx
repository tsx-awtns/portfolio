"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Code2,
  Gamepad,
  Smartphone,
  Globe,
  Sparkles,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion, useInView, AnimatePresence } from "framer-motion"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  technologies: string[]
  features: string[]
  demoUrl: string
  repoUrl: string
  featured?: boolean
  category: string
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "web":
      return <Globe className="h-4 w-4" />
    case "app":
      return <Smartphone className="h-4 w-4" />
    case "game":
      return <Gamepad className="h-4 w-4" />
    default:
      return <Code2 className="h-4 w-4" />
  }
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0)
  const [activeFilter, setActiveFilter] = useState("all")
  const [autoplay, setAutoplay] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isHovering, setIsHovering] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const slideVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.5, ease: "easeIn" },
    }),
  }

  const glowVariants = {
    inactive: {
      boxShadow: "0 0 0 rgba(239, 68, 68, 0)",
      transition: { duration: 0.3 },
    },
    active: {
      boxShadow: "0 0 20px rgba(239, 68, 68, 0.5)",
      transition: { duration: 0.3 },
    },
    hover: {
      boxShadow: "0 0 25px rgba(239, 68, 68, 0.7)",
      transition: { duration: 0.3 },
    },
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "Bunny Hub",
      description:
        "Bunny Hub is a Lua script that is loaded into the game via an executor. It provides a custom GUI with pre-made scripts and a built-in editor for custom scripting.",
      image: "/syva-dev/img/bunny-hub.png",
      tags: ["Lua", "Roblox"],
      technologies: ["Lua", "Roblox"],
      features: ["Custom GUI", "Pre-made scripts", "Built-in editor"],
      demoUrl: "/error/",
      repoUrl: "https://github.com/Rich0242/Roblox-multi-script",
      featured: true,
      category: "game",
    },
    {
      id: 2,
      title: "Main Domain - Role Application System",
      description:
        "A platform where users can apply for roles on a Discord server. This is the main domain for the application system, built using JavaScript, React, PHP, and SQL. Users can easily submit their applications and join the community.",
      image: "/syva-dev/img/application.png",
      tags: ["React", "Node.js", "PHP", "SQL", "Discord API"],
      technologies: ["JavaScript", "React", "PHP", "SQL"],
      features: ["Role application", "Discord integration", "User-friendly"],
      demoUrl: "/error/",
      repoUrl: "/",
      featured: true,
      category: "web",
    },
    {
      id: 3,
      title: "ShindoBoosterV2 - Shindo Life 2 Script",
      description:
        "A script for the game 'Shindo Life 2' that removes the cooldown for the Rell bloodline, allowing users to infinitely use the RC granted by this bloodline. Built using Lua and Roblox, this script provides an enhanced experience by bypassing the 2-hour cooldown.",
      image: "/syva-dev/img/slbv2.png",
      tags: ["Lua", "Roblox"],
      technologies: ["Lua", "Roblox"],
      features: ["Cooldown removal", "Enhanced experience"],
      demoUrl: "/error/",
      repoUrl: "/error/",
      category: "game",
    },
    {
      id: 4,
      title: "Discord Bot Hoster",
      description:
        "A program that allows users to host a Discord bot without programming. Users only need to provide a few details, and they can fully control the bot. Built with Java, this tool simplifies the process of bot hosting, making it accessible for non-developers.",
      image: "/syva-dev/img/slbv2.png",
      tags: ["Java"],
      technologies: ["Java"],
      features: ["Easy bot hosting", "No programming required"],
      demoUrl: "/BotHoster/",
      repoUrl: "/BotHoster/",
      category: "app",
    },
    {
      id: 5,
      title: "Main Domain -  Support Portal",
      description:
        "A web platform where users could create tickets for different cases, such as general requests, reports, and unban requests. The system provided an easy-to-use interface where users could select a category and submit their issues efficiently. Built with JavaScript, React, PHP, and SQL, it was an essential tool for managing Discord server requests and reports.",
      image: "/syva-dev/img/awtns.png",
      tags: ["Report", "Question", "Discord"],
      technologies: ["CSS", "JS", "HTML", "PHP", "SQL", "Discord API"],
      features: ["Report System", "Discord Integration", "Ticket Management"],
      demoUrl: "/oldawtns/",
      repoUrl: "/oldawtns/",
      category: "web",
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const filteredProjects =
    activeFilter === "all"
      ? projects.filter((project) => !project.featured)
      : projects.filter((project) => !project.featured && project.category === activeFilter)

  const nextFeaturedProject = () => {
    setDirection(1)
    setCurrentFeaturedIndex((prev) => (prev + 1) % featuredProjects.length)
  }

  const prevFeaturedProject = () => {
    setDirection(-1)
    setCurrentFeaturedIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay && !isHovering) {
      interval = setInterval(() => {
        setDirection(1)
        nextFeaturedProject()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoplay, currentFeaturedIndex, isHovering])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      setDirection(1)
      nextFeaturedProject()
    }

    if (touchStart - touchEnd < -50) {
      setDirection(-1)
      prevFeaturedProject()
    }
  }

  const getCategoryCount = (category: string) => {
    return projects.filter((project) => project.category === category).length
  }

  return (
    <section id="projects" className="py-24 px-4 relative bg-gradient-to-b  to-black">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t to-transparent" />

      <div
        className="absolute top-1/4 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "10s" }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-red-700/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "15s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-40 h-40 bg-red-600/5 rounded-full blur-2xl animate-pulse"
        style={{ animationDuration: "8s" }}
      />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-3 py-1 text-sm font-medium bg-red-500/10 text-red-500 rounded-full inline-block animate-pulse">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400">Showcasing my best work and technical expertise</p>

            <div className="flex justify-center">
              <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
            onMouseEnter={() => {
              setAutoplay(false)
              setIsHovering(true)
            }}
            onMouseLeave={() => {
              setAutoplay(true)
              setIsHovering(false)
            }}
          >
            <div
              className="overflow-hidden rounded-xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentFeaturedIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="relative"
                >
                  <motion.div
                    className="grid md:grid-cols-2 gap-8 items-center bg-black/30 p-6 md:p-10 rounded-xl border border-red-500/10 backdrop-blur-sm relative overflow-hidden"
                    variants={glowVariants}
                    initial="inactive"
                    animate="active"
                    whileHover="hover"
                  >
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.15),transparent_70%)]"></div>
                      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,0,0,0.1),transparent_70%)]"></div>
                    </div>

                    <div className="absolute inset-0 rounded-xl border-2 border-red-500/30 animate-pulse pointer-events-none"></div>
                    <div className="relative group overflow-hidden rounded-xl border border-red-500/10 shadow-xl">
                      <img
                        src={featuredProjects[currentFeaturedIndex].image || "/placeholder.svg"}
                        alt={featuredProjects[currentFeaturedIndex].title}
                        className="object-cover w-full aspect-video group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6 w-full">
                          <div className="flex gap-4 justify-end">
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-black/20 backdrop-blur-sm border-red-500/20 text-white hover:bg-red-500 hover:text-white"
                              asChild
                            >
                              <Link
                                href={featuredProjects[currentFeaturedIndex].demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </Link>
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-black/20 backdrop-blur-sm border-red-500/20 text-white hover:bg-red-500 hover:text-white"
                              asChild
                            >
                              <Link
                                href={featuredProjects[currentFeaturedIndex].repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="mr-2 h-4 w-4" />
                                Repository
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="absolute top-2 right-2 animate-pulse">
                        <Sparkles className="h-5 w-5 text-red-500" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(featuredProjects[currentFeaturedIndex].category)}
                        <span className="text-sm font-medium text-red-500 uppercase">
                          {featuredProjects[currentFeaturedIndex].category}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold">{featuredProjects[currentFeaturedIndex].title}</h3>
                      <p className="text-gray-400">{featuredProjects[currentFeaturedIndex].description}</p>

                      <div className="space-y-4 mt-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-2">KEY FEATURES</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                            {featuredProjects[currentFeaturedIndex].features.slice(0, 4).map((feature, index) => (
                              <li key={index} className="text-sm text-gray-400 flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {featuredProjects[currentFeaturedIndex].tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-red-500/10 text-red-500 text-sm rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-between items-center mt-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
              >
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevFeaturedProject}
                  className="bg-black/70 border-red-500/30 hover:bg-red-500/30 hover:border-red-500/70 rounded-full shadow-lg hover:shadow-red-500/30 w-12 h-12"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
              >
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextFeaturedProject}
                  className="bg-black/70 border-red-500/30 hover:bg-red-500/30 hover:border-red-500/70 rounded-full shadow-lg hover:shadow-red-500/30 w-12 h-12"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </motion.div>
            </div>

            <div className="flex justify-center mt-6 space-x-3">
              {featuredProjects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentFeaturedIndex ? 1 : -1)
                    setCurrentFeaturedIndex(index)
                  }}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentFeaturedIndex === index
                      ? "bg-red-500 w-10 shadow-md shadow-red-500/30"
                      : "bg-red-500/30 w-3 hover:bg-red-500/50"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mt-16">
            <Badge
              variant={activeFilter === "all" ? "default" : "outline"}
              className={`px-4 py-2 text-sm cursor-pointer transition-all duration-300 ${
                activeFilter === "all"
                  ? "bg-red-500 hover:bg-red-600 shadow-md shadow-red-500/20"
                  : "hover:bg-red-500/10 hover:text-red-500 border-red-500/20"
              }`}
              onClick={() => setActiveFilter("all")}
            >
              All Projects ({projects.filter((p) => !p.featured).length})
            </Badge>

            {["web", "app", "game"].map((category) => (
              <Badge
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                className={`px-4 py-2 text-sm cursor-pointer transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-red-500 hover:bg-red-600 shadow-md shadow-red-500/20"
                    : "hover:bg-red-500/10 hover:text-red-500 border-red-500/20"
                }`}
                onClick={() => setActiveFilter(category)}
              >
                <span className="flex items-center gap-1">
                  {getCategoryIcon(category)}
                  {category.charAt(0).toUpperCase() + category.slice(1)} ({getCategoryCount(category)})
                </span>
              </Badge>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="pt-8">
            <h3 className="text-2xl font-bold text-center mb-8">More Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <motion.div key={project.id} whileHover={{ y: -10, transition: { duration: 0.2 } }}>
                  <motion.div
                    variants={glowVariants}
                    initial="inactive"
                    whileHover="hover"
                    className="h-full rounded-xl overflow-hidden"
                  >
                    <Card className="overflow-hidden bg-black/50 backdrop-blur-sm border-red-500/10 hover:border-red-500/30 transition-all duration-300 h-full group relative">
                      <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.15),transparent_70%)]"></div>
                        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,0,0,0.1),transparent_70%)]"></div>
                      </div>

                      <div className="relative h-48 w-full overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <div className="bg-black/60 backdrop-blur-sm p-1.5 rounded-full">
                            {getCategoryIcon(project.category)}
                          </div>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-2">
                            <ExternalLink className="h-4 w-4" />
                            View Details
                          </div>
                        </div>

                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-red-500/10 to-transparent" />
                      </div>
                      <CardContent className="p-6 space-y-4">
                        <h3 className="text-xl font-bold group-hover:text-red-500 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>

                        <div className="space-y-3">
                          <h4 className="text-xs font-medium text-gray-500">TECHNOLOGIES</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.slice(0, 5).map((tech, index) => (
                              <span key={index} className="px-2 py-1 bg-black/40 text-gray-300 text-xs rounded-md">
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 5 && (
                              <span className="px-2 py-1 bg-black/40 text-gray-300 text-xs rounded-md">
                                +{project.technologies.length - 5} more
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex gap-4 pt-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full border-red-500/20 hover:bg-red-500 hover:text-white"
                            asChild
                          >
                            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </Link>
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full border-red-500/20 hover:bg-red-500 hover:text-white"
                            asChild
                          >
                            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

