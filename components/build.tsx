"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
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
} from "lucide-react"

export default function Build() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
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
        description: "Component-based UI library for building interactive interfaces",
        color: "#61dafb",
        gradient: "from-[#61dafb]/80 to-[#61dafb]/30",
        logo: "/syva-dev/img/build-img/react.png",
      },
      {
        name: "Next.js",
        icon: <Globe className="w-full h-full" />,
        description: "React framework for production with SSR, SSG, and more",
        color: "#ffffff",
        gradient: "from-white/80 to-white/30",
        logo: "/syva-dev/img/build-img/next.png",
      },
      {
        name: "Tailwind CSS",
        icon: <Palette className="w-full h-full" />,
        description: "Utility-first CSS framework for rapid UI development",
        color: "#06b6d4",
        gradient: "from-[#06b6d4]/80 to-[#06b6d4]/30",
        logo: "/syva-dev/img/build-img/tailwind-css.png",
      },
      {
        name: "TypeScript",
        icon: <Braces className="w-full h-full" />,
        description: "Typed superset of JavaScript for improved developer experience",
        color: "#3178c6",
        gradient: "from-[#3178c6]/80 to-[#3178c6]/30",
        logo: "/syva-dev/img/build-img/typescript.png",
      },
      {
        name: "Framer Motion",
        icon: <Layers className="w-full h-full" />,
        description: "Production-ready animation library for React",
        color: "#ff4d4d",
        gradient: "from-[#ff4d4d]/80 to-[#ff4d4d]/30",
        logo: "/syva-dev/img/build-img/framer-motion.png",
      },
      {
        name: "Recharts",
        icon: <Gauge className="w-full h-full" />,
        description: "Composable charting library built on React components",
        color: "#22c55e",
        gradient: "from-[#22c55e]/80 to-[#22c55e]/30",
        logo: "/syva-dev/img/build-img/recharts.png",
      },
    ],
    backend: [
      {
        name: "Node.js",
        icon: <Server className="w-full h-full" />,
        description: "JavaScript runtime for server-side applications",
        color: "#339933",
        gradient: "from-[#339933]/80 to-[#339933]/30",
        logo: "/syva-dev/img/build-img/node.png",
      },
      {
        name: "Express",
        icon: <Workflow className="w-full h-full" />,
        description: "Fast, unopinionated web framework for Node.js",
        color: "#ffffff",
        gradient: "from-white/80 to-white/30",
        logo: "/syva-dev/img/build-img/express.png",
      },
    ],
    languages: [
      {
        name: "JavaScript",
        icon: <FileJson className="w-full h-full" />,
        description: "High-level, interpreted programming language",
        color: "#f7df1e",
        gradient: "from-[#f7df1e]/80 to-[#f7df1e]/30",
        logo: "/syva-dev/img/build-img/javascript.png",
      },
      {
        name: "TypeScript",
        icon: <FileJson className="w-full h-full" />,
        description: "Strongly typed programming language that builds on JavaScript",
        color: "#3178c6",
        gradient: "from-[#3178c6]/80 to-[#3178c6]/30",
        logo: "/syva-dev/img/build-img/typescript.png",
      },
    ],
    tools: [
      {
        name: "Git",
        icon: <GitBranch className="w-full h-full" />,
        description: "Distributed version control system",
        color: "#F05032",
        gradient: "from-[#F05032]/80 to-[#F05032]/30",
        logo: "/syva-dev/img/build-img/git.png",
      },
      {
        name: "GitHub",
        icon: <GitBranch className="w-full h-full" />,
        description: "Web-based hosting service for version control",
        color: "#ffffff",
        gradient: "from-white/80 to-white/30",
        logo: "/syva-dev/img/build-img/github.png",
      },
      {
        name: "VS Code",
        icon: <Laptop className="w-full h-full" />,
        description: "Lightweight but powerful source code editor",
        color: "#007ACC",
        gradient: "from-[#007ACC]/80 to-[#007ACC]/30",
        logo: "/syva-dev/img/build-img/vsc.png",
      },
      {
        name: "Terminal",
        icon: <Terminal className="w-full h-full" />,
        description: "Command-line interface for executing commands",
        color: "#ffffff",
        gradient: "from-white/80 to-white/30",
        logo: "/syva-dev/img/build-img/terminal.png",
      },
      {
        name: "CI/CD",
        icon: <Workflow className="w-full h-full" />,
        description: "Continuous integration and continuous delivery",
        color: "#4CAF50",
        gradient: "from-[#4CAF50]/80 to-[#4CAF50]/30",
        logo: "/syva-dev/img/build-img/ci-cd.png",
      },
      {
        name: "SpellCheck AI",
        icon: <FileText className="w-full h-full" />,
        description: "AI-powered spelling and grammar correction",
        color: "#4CAF50",
        gradient: "from-[#4CAF50]/80 to-[#4CAF50]/30",
        logo: "/syva-dev/img/build-img/spellcheck-ai.png",
      },
    ],
  }

  const tabs = [
    {
      id: "all",
      label: "All Technologies",
      count: Object.values(technologies).flat().length,
      icon: <Code className="w-4 h-4 mr-2" />,
    },
    {
      id: "frontend",
      label: "Frontend",
      count: technologies.frontend.length,
      icon: <Globe className="w-4 h-4 mr-2" />,
    },
    { id: "backend", label: "Backend", count: technologies.backend.length, icon: <Server className="w-4 h-4 mr-2" /> },
    {
      id: "languages",
      label: "Languages",
      count: technologies.languages.length,
      icon: <Braces className="w-4 h-4 mr-2" />,
    },
    { id: "tools", label: "Tools", count: technologies.tools.length, icon: <Terminal className="w-4 h-4 mr-2" /> },
  ]

  const renderTechnologies = () => {
    if (activeTab === "all") {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(technologies)
            .flat()
            .map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
        </div>
      )
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies[activeTab as keyof typeof technologies].map((tech, index) => (
          <TechCard key={index} tech={tech} />
        ))}
      </div>
    )
  }

  return (
    <section id="build" className="py-12 sm:py-24 px-2 sm:px-4 relative">
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-red-700/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-8 sm:space-y-12 md:space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4">
            <span className="px-2 py-1 text-xs sm:text-sm font-medium bg-red-500/10 text-red-500 rounded-full">
              Technology Stack
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
              Built With Modern Technologies
            </h2>
            <p className="text-base sm:text-xl text-gray-400">
              A comprehensive overview of the technologies used to build this website
            </p>
          </motion.div>

          {/* Custom Tabs like in the image */}
          <motion.div variants={itemVariants} className="mt-8">
            <div className="flex justify-center mb-8 space-x-2 overflow-x-auto pb-2 max-w-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-red-500 text-white shadow-lg shadow-red-500/20"
                      : "bg-black/30 text-white hover:bg-black/50 border border-red-500/10"
                  }`}
                >
                  {tab.icon}
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>

            {renderTechnologies()}
          </motion.div>

          {/* Technology Ecosystem */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="bg-black/50 backdrop-blur-sm border-red-500/10 overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
                      Technology Ecosystem
                    </h3>
                    <p className="text-gray-400">
                      This website is built with a modern technology stack that prioritizes performance, developer
                      experience, and user experience. The architecture follows industry best practices for scalability,
                      maintainability, and security.
                    </p>

                    <div className="mt-6 grid grid-cols-3 gap-4">
                      {[technologies.frontend[0], technologies.backend[0], technologies.languages[0]].map((tech, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div
                            className="w-14 h-14 rounded-full flex items-center justify-center mb-2 p-3 bg-gradient-to-br"
                            style={{
                              backgroundImage: `linear-gradient(to bottom right, ${tech.color}40, ${tech.color}10)`,
                              boxShadow: `0 0 15px ${tech.color}30`,
                            }}
                          >
                            <div className="w-full h-full text-white">{tech.icon}</div>
                          </div>
                          <span className="text-xs text-center">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-red-500">Frontend Architecture</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>React for component-based UI development</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>Next.js for server-side rendering and routing</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>Tailwind CSS for utility-first styling</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>Framer Motion for smooth animations</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>TypeScript for type safety and better developer experience</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-red-500">Backend Infrastructure</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>Node.js runtime environment</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>Express.js for API routing and middleware</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Logo Cloud */}
          <motion.div variants={itemVariants} className="mt-12">
            <Card className="bg-black/50 backdrop-blur-sm border-red-500/10 overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-6 text-center">Technologies Used</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center justify-items-center">
                  {[...technologies.frontend, ...technologies.backend, ...technologies.languages, ...technologies.tools]
                    .map((tech, index) => (
                      <div key={index} className="group flex flex-col items-center justify-center gap-2">
                        <div
                          className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 p-3 bg-gradient-to-br"
                          style={{
                            backgroundImage: `linear-gradient(to bottom right, ${tech.color}40, ${tech.color}10)`,
                            boxShadow: `0 0 15px ${tech.color}20`,
                          }}
                        >
                          <img
                            src={tech.logo || "/placeholder.svg"}
                            alt={tech.name}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-xs text-gray-400 text-center">{tech.name}</span>
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
  }
}

function TechCard({ tech }: TechProps) {
  return (
    <Card className="bg-black/50 backdrop-blur-sm border-red-500/10 hover:border-red-500/30 transition-all duration-300 overflow-hidden group h-full relative">
      <div
        className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ backgroundImage: `linear-gradient(to bottom right, ${tech.color}, transparent)` }}
      />
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center p-3 bg-gradient-to-br group-hover:scale-105 transition-all duration-300"
              style={{
                backgroundImage: `linear-gradient(to bottom right, ${tech.color}40, ${tech.color}10)`,
                boxShadow: `0 0 15px ${tech.color}20`,
              }}
            >
              <div className="w-full h-full" style={{ color: tech.color }}>
                {tech.icon}
              </div>
            </div>
            <div
              className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center bg-black/80 border-2 group-hover:scale-110 transition-transform duration-300"
              style={{ borderColor: tech.color }}
            >
              <div className="w-3 h-3" style={{ color: tech.color }}>
                {tech.icon}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-lg mb-1 group-hover:text-red-500 transition-colors">{tech.name}</h4>
            <p className="text-gray-400 text-sm">{tech.description}</p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-red-500/10 flex justify-between items-center">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }}></span>
            <span className="text-xs text-gray-500">Technology</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

