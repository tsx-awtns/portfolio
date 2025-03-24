"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Braces,
  Server,
  Code,
  Globe,
  Layout,
  Layers,
  GitBranch,
  Terminal,
  Palette,
  Gauge,
  FileJson,
  Workflow,
  Laptop,
  FileText,
  Star,
  ChevronRight,
} from "lucide-react"

export default function Build() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeTab, setActiveTab] = useState("all")

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
      transition: { duration: 0.8 },
    },
  }

  const technologies = {
    frontend: [
      {
        name: "React",
        icon: <Layout className="w-full h-full" />,
        description:
          "A JavaScript library for building user interfaces with a component-based architecture that efficiently updates and renders components.",
        color: "#61dafb",
        gradient: "from-[#61dafb]/80 to-[#61dafb]/30",
        logo: "/syva-dev/img/build-img/react.png",
        website: "https://reactjs.org",
        usedFor: "Component-based UI development",
        featured: true,
      },
      {
        name: "Next.js",
        icon: <Globe className="w-full h-full" />,
        description:
          "The React framework for production that enables server-side rendering, static site generation, and more.",
        color: "#ffffff",
        gradient: "from-white/80 to-white/30",
        logo: "/syva-dev/img/build-img/next.png",
        website: "https://nextjs.org",
        usedFor: "Server-side rendering and routing",
        featured: true,
      },
      {
        name: "Tailwind CSS",
        icon: <Palette className="w-full h-full" />,
        description:
          "A utility-first CSS framework packed with classes that can be composed to build any design directly in your markup.",
        color: "#06b6d4",
        gradient: "from-[#06b6d4]/80 to-[#06b6d4]/30",
        logo: "/syva-dev/img/build-img/tailwind-css.png",
        website: "https://tailwindcss.com",
        usedFor: "Utility-first styling",
        featured: true,
      },
      {
        name: "TypeScript",
        icon: <Braces className="w-full h-full" />,
        description:
          "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
        color: "#3178c6",
        gradient: "from-[#3178c6]/80 to-[#3178c6]/30",
        logo: "/syva-dev/img/build-img/typescript.png",
        website: "https://www.typescriptlang.org",
        usedFor: "Type safety and better developer experience",
        featured: true,
      },
      {
        name: "Framer Motion",
        icon: <Layers className="w-full h-full" />,
        description:
          "A production-ready motion library for React that makes creating animations and interactions simple and intuitive.",
        color: "#ff4d4d",
        gradient: "from-[#ff4d4d]/80 to-[#ff4d4d]/30",
        logo: "/syva-dev/img/build-img/framer-motion.png",
        website: "https://www.framer.com/motion",
        usedFor: "Smooth animations",
        featured: true,
      },
      {
        name: "Recharts",
        icon: <Gauge className="w-full h-full" />,
        description:
          "A composable charting library built on React components with seamless integration into React applications.",
        color: "#22c55e",
        gradient: "from-[#22c55e]/80 to-[#22c55e]/30",
        logo: "/syva-dev/img/build-img/recharts.png",
        website: "https://recharts.org",
        usedFor: "Data visualization and charts",
        featured: true,
      },
    ],
    backend: [
      {
        name: "PHP",
        icon: <Server className="w-full h-full" />,
        description:
          "A popular general-purpose scripting language that is especially suited to web development.",
        color: "#777bb4",
        gradient: "from-[#777bb4]/80 to-[#777bb4]/30",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
        website: "https://www.php.net",
        usedFor: "Server-side scripting",
        featured: true,
      },
      {
        name: "Laravel",
        icon: <Workflow className="w-full h-full" />,
        description:
          "A PHP framework for web artisans that provides an elegant syntax and powerful tools for web application development.",
        color: "#ff2d20",
        gradient: "from-[#ff2d20]/80 to-[#ff2d20]/30",
        logo: "/syva-dev/img/build-img/laravel.png",
        website: "https://laravel.com",
        usedFor: "Web application framework",
        featured: false,
      },
    ],
    languages: [
      {
        name: "JavaScript",
        icon: <FileJson className="w-full h-full" />,
        description: "A high-level, interpreted programming language that conforms to the ECMAScript specification.",
        color: "#f7df1e",
        gradient: "from-[#f7df1e]/80 to-[#f7df1e]/30",
        logo: "/syva-dev/img/build-img/javascript.png",
        website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        usedFor: "Core programming language",
        featured: false,
      },
      {
        name: "TypeScript",
        icon: <FileJson className="w-full h-full" />,
        description:
          "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
        color: "#3178c6",
        gradient: "from-[#3178c6]/80 to-[#3178c6]/30",
        logo: "/syva-dev/img/build-img/typescript.png",
        website: "https://www.typescriptlang.org",
        usedFor: "Type safety and better developer experience",
        featured: true,
      },
    ],
    tools: [
      {
        name: "Git",
        icon: <GitBranch className="w-full h-full" />,
        description:
          "A free and open source distributed version control system designed to handle everything from small to very large projects.",
        color: "#F05032",
        gradient: "from-[#F05032]/80 to-[#F05032]/30",
        logo: "/syva-dev/img/build-img/git.png",
        website: "https://git-scm.com",
        usedFor: "Version control",
        featured: true,
      },
      {
        name: "GitHub",
        icon: <GitBranch className="w-full h-full" />,
        description: "A provider of Internet hosting for software development and version control using Git.",
        color: "#ffffff",
        gradient: "from-white/80 to-white/30",
        logo: "/syva-dev/img/build-img/github.png",
        website: "https://github.com",
        usedFor: "Code hosting and collaboration",
        featured: true,
      },
      {
        name: "VS Code",
        icon: <Laptop className="w-full h-full" />,
        description:
          "A lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux.",
        color: "#007ACC",
        gradient: "from-[#007ACC]/80 to-[#007ACC]/30",
        logo: "/syva-dev/img/build-img/vsc.png",
        website: "https://code.visualstudio.com",
        usedFor: "Code editing and development",
        featured: true,
      },
      {
        name: "Terminal",
        icon: <Terminal className="w-full h-full" />,
        description: "A text-based interface used to execute commands and interact with the operating system.",
        color: "#ffffff",
        gradient: "from-white/80 to-white/30",
        logo: "/syva-dev/img/build-img/terminal.png",
        website: "https://en.wikipedia.org/wiki/Terminal_emulator",
        usedFor: "Command-line operations",
        featured: true,
      },
      {
        name: "CI/CD",
        icon: <Workflow className="w-full h-full" />,
        description:
          "Continuous integration and continuous delivery practices that automate the building, testing, and deployment of applications.",
        color: "#4CAF50",
        gradient: "from-[#4CAF50]/80 to-[#4CAF50]/30",
        logo: "/syva-dev/img/build-img/ci-cd.png",
        website:
          "https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment",
        usedFor: "Automated testing and deployment",
        featured: false,
      },
      {
        name: "SpellCheck AI",
        icon: <FileText className="w-full h-full" />,
        description:
          "AI-powered spelling and grammar correction tool that helps improve the quality of written content.",
        color: "#4CAF50",
        gradient: "from-[#4CAF50]/80 to-[#4CAF50]/30",
        logo: "/syva-dev/img/build-img/spellcheck-ai.png",
        website: "https://www.grammarly.com",
        usedFor: "Content quality improvement",
        featured: true,
      },
    ],
  }

  const featuredTechnologies = Object.values(technologies)
    .flat()
    .filter((tech) => tech.featured)

  const tabs = [
    {
      id: "all",
      label: "All",
      count: Object.values(technologies).flat().length,
      icon: <Code className="w-4 h-4 md:mr-1" />,
    },
    {
      id: "frontend",
      label: "Frontend",
      count: technologies.frontend.length,
      icon: <Globe className="w-4 h-4 md:mr-1" />,
    },
    {
      id: "backend",
      label: "Backend",
      count: technologies.backend.length,
      icon: <Server className="w-4 h-4 md:mr-1" />,
    },
    {
      id: "languages",
      label: "Languages",
      count: technologies.languages.length,
      icon: <Braces className="w-4 h-4 md:mr-1" />,
    },
    {
      id: "tools",
      label: "Tools",
      count: technologies.tools.length,
      icon: <Terminal className="w-4 h-4 md:mr-1" />,
    },
  ]

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
  }

  const renderTechnologies = () => {
    const techsToRender =
      activeTab === "all" ? Object.values(technologies).flat() : technologies[activeTab as keyof typeof technologies]

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {techsToRender.map((tech, index) => (
          <TechCard key={index} tech={tech} />
        ))}
      </div>
    )
  }

  return (
    <section id="build" className="py-6 sm:py-12 md:py-24 px-2 sm:px-4 w-full overflow-hidden">
      <div
        suppressHydrationWarning
        className="absolute top-1/4 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl hidden md:block"
      />
      <div
        suppressHydrationWarning
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-red-700/10 rounded-full blur-3xl hidden md:block"
      />

      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-4 sm:space-y-6 md:space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4">
            <span className="px-2 py-1 text-xs sm:text-sm font-medium bg-red-500/10 text-red-500 rounded-full">
              Technology Stack
            </span>
            <h2 className="text-xl sm:text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
              Built With Modern Technologies
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-400">
              A comprehensive overview of the technologies used to build this website
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-4 sm:mt-6">
            <div className="flex justify-center mb-4 sm:mb-6 space-x-1 sm:space-x-2 overflow-x-auto pb-2 max-w-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  suppressHydrationWarning
                  className={`flex items-center px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-red-500 hover:bg-red-600 shadow-md shadow-red-500/20"
                      : "bg-black/30 text-white hover:bg-red-500/10 hover:text-red-500 border border-red-500/10"
                  }`}
                >
                  {tab.icon}
                  <span suppressHydrationWarning className="hidden md:inline-block">
                    {tab.label} ({tab.count})
                  </span>
                  <span suppressHydrationWarning className="md:hidden ml-1">
                    ({tab.count})
                  </span>
                </button>
              ))}
            </div>

            {renderTechnologies()}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6 sm:mt-8 md:mt-12">
            <Card className="h-full bg-black/50 backdrop-blur-sm border-red-500/10 hover:border-red-500/30 transition-all duration-300 overflow-hidden">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-6 w-1 bg-red-500 rounded-full"></div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-500">Technology Ecosystem</h3>
                    </div>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      This website is built with a modern technology stack that prioritizes performance, developer
                      experience, and user experience. The architecture follows industry best practices for scalability,
                      maintainability, and security.
                    </p>

                    <div className="mt-4 md:mt-6 grid grid-cols-3 gap-3 sm:gap-4">
                      {[technologies.frontend[0], technologies.backend[0], technologies.languages[1]].map((tech, i) => (
                        <div key={i} className="flex flex-col items-center group">
                          <div
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-2 p-3 transition-all duration-300 group-hover:scale-110"
                            style={{
                              backgroundColor: `rgba(0,0,0,0.5)`,
                              boxShadow: `0 0 20px ${tech.color}40`,
                              border: `1px solid ${tech.color}40`,
                            }}
                          >
                            <div className="w-full h-full" style={{ color: tech.color }}>
                              {tech.icon}
                            </div>
                          </div>
                          <span className="text-xs text-center text-gray-300 font-medium">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-black/30 p-4 rounded-lg border border-red-500/10">
                      <div className="flex items-center gap-2 mb-3">
                        <Globe className="w-4 h-4 text-red-500" />
                        <h4 className="font-semibold text-red-500 text-sm md:text-base">Frontend Architecture</h4>
                      </div>
                      <ul className="space-y-2 text-xs md:text-sm text-gray-300">
                        {technologies.frontend.slice(0, 5).map((tech, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-red-500 mr-2 mt-0.5">•</span>
                            <span>
                              {tech.name} for {tech.usedFor}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-black/30 p-4 rounded-lg border border-red-500/10">
                      <div className="flex items-center gap-2 mb-3">
                        <Server className="w-4 h-4 text-red-500" />
                        <h4 className="font-semibold text-red-500 text-sm md:text-base">Backend Infrastructure</h4>
                      </div>
                      <ul className="space-y-2 text-xs md:text-sm text-gray-300">
                        {technologies.backend.map((tech, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-red-500 mr-2 mt-0.5">•</span>
                            <span>
                              {tech.name} for {tech.usedFor}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-4 sm:mt-6 md:mt-12">
            <Card className="h-full bg-black/50 backdrop-blur-sm border-red-500/10 hover:border-red-500/30 transition-all duration-300 overflow-hidden">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-red-500 rounded-full"></div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-red-500">Featured Technologies</h3>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Star className="w-3 h-3 text-red-500" />
                    <span>Showing {featuredTechnologies.length} featured technologies</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 items-center">
                  {featuredTechnologies.map((tech, index) => (
                    <div key={index} className="group relative">
                      <div className="flex flex-col items-center justify-center gap-2 p-3 bg-black/30 rounded-lg border border-red-500/10 hover:border-red-500/30 transition-all duration-300 h-full">
                        <div
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 p-2 sm:p-3"
                          style={{
                            backgroundColor: `rgba(0,0,0,0.5)`,
                            boxShadow: `0 0 15px ${tech.color}30`,
                            border: `1px solid ${tech.color}30`,
                          }}
                        >
                          <img
                            src={tech.logo || "/placeholder.svg"}
                            alt={tech.name}
                            className="object-contain w-7 h-7 sm:w-8 sm:h-8"
                          />
                        </div>
                        <div className="text-center">
                          <span className="text-xs sm:text-sm text-gray-200 font-medium block">{tech.name}</span>
                          <span className="text-[10px] text-gray-400 block mt-0.5">{tech.usedFor}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

interface TechProps {
  tech: {
    name: string
    icon: React.ReactNode
    description: string
    color: string
    gradient?: string
    logo: string
    website: string
    usedFor: string
    featured?: boolean
  }
}

function TechCard({ tech }: TechProps) {
  return (
    <Card className="h-full bg-black/50 backdrop-blur-sm border-red-500/10 hover:border-red-500/30 transition-all duration-300 overflow-hidden group relative">
      <CardContent className="p-4 sm:p-5 flex flex-col h-full">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="relative flex-shrink-0">
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center p-2.5 sm:p-3 transition-all duration-300 group-hover:scale-105"
              style={{
                backgroundColor: `rgba(0,0,0,0.5)`,
                boxShadow: `0 0 15px ${tech.color}30`,
                border: `1px solid ${tech.color}30`,
              }}
            >
              <div className="w-full h-full" style={{ color: tech.color }}>
                {tech.icon}
              </div>
            </div>
            {tech.featured && (
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center">
                <Star className="w-3 h-3" />
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-sm sm:text-base mb-1 text-gray-100 group-hover:text-red-500 transition-colors truncate">
              {tech.name}
            </h4>
            <p className="text-xs text-gray-400 line-clamp-2">{tech.description}</p>

            <div className="mt-1.5 flex items-center">
              <span className="text-[10px] text-red-500 font-medium">Used for:</span>
              <span className="text-[10px] text-gray-300 ml-1">{tech.usedFor}</span>
            </div>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-red-500/10 flex justify-between items-center">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tech.color }}></span>
            <span className="text-[10px] text-gray-500">Technology</span>
          </div>
        </div>

        <Button
          asChild
          className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 
                    bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700
                    text-white border-none rounded-full h-8 px-3 shadow-lg hover:shadow-xl
                    transform translate-y-2 group-hover:translate-y-0 hover:-translate-y-1 z-20"
          onClick={(e) => e.stopPropagation()}
        >
          <a
            href={tech.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-medium"
          >
            <span>Explore</span>
            <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}

