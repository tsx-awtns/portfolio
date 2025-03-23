"use client"

import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart, Legend } from "recharts"
import {
  Braces,
  Layout,
  Layers,
  Globe,
  Palette,
  Code,
  Grid,
  Server,
  Database,
  Cloud,
  Cpu,
  Smartphone,
  GitBranch,
  Terminal,
  Wrench,
  Gauge,
  Lock,
} from "lucide-react"

type Skill = {
  name: string
  level: number
  color: string
}

type SkillData = {
  name: string
  [key: string]: number | string
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [activeCategory, setActiveCategory] = useState("frontend")
  const [activeIndex, setActiveIndex] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const frontendSkills = [
    {
      icon: <Braces className="w-6 h-6" />,
      title: "HTML/CSS/JavaScript",
      description:
        "Expert in creating responsive layouts and interactive interfaces with modern HTML5, CSS3, and ES6+.",
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "React & Next.js",
      description:
        "Building high-performance applications with React and leveraging Next.js for server-side rendering and static generation.",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "State Management",
      description:
        "Implementing efficient state management with Redux, Context API, and React Query for complex applications.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Responsive Design",
      description: "Creating fluid layouts that work seamlessly across all devices and screen sizes.",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI Frameworks",
      description: "Proficient with Tailwind CSS, Material UI, and other modern UI frameworks for rapid development.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Sass & SCSS",
      description: "Experienced in writing maintainable and scalable styles using Sass and SCSS.",
    },
    {
      icon: <Grid className="w-6 h-6" />,
      title: "Bootstrap",
      description: "Skilled in building responsive and mobile-first designs using Bootstrap.",
    },
  ]

  const backendSkills = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "Node.js & Express",
      description: "Building scalable and efficient server-side applications and RESTful APIs.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Design",
      description: "Designing and optimizing databases with MongoDB, PostgreSQL, and MySQL.",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Services",
      description: "Deploying and managing applications on AWS, Google Cloud, and canva.",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Microservices",
      description: "Architecting distributed systems with microservices for scalability and maintainability.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "API Development",
      description: "Creating robust and well-documented APIs with OpenAPI/Swagger specifications.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Java",
      description: "Building robust and scalable backend systems using Java and related frameworks like Spring Boot.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "C, C#, C++",
      description:
        "Proficient in low-level programming and developing high-performance applications in C, C#, and C++.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "PHP",
      description: "Creating dynamic websites and applications using PHP with frameworks like Laravel.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Lua",
      description: "Scripting and developing lightweight applications and game logic with Lua.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Python",
      description:
        "Developing backend systems, web applications, and automation scripts using Python and frameworks like Django and Flask.",
    },
  ]

  const toolsSkills = [
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Version Control",
      description: "Expert in Git workflows, branching strategies, and collaborative development.",
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "CI/CD",
      description: "Setting up continuous integration and deployment pipelines with GitHub Actions and Jenkins.",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Testing",
      description: "Implementing comprehensive testing strategies with Jest, React Testing Library, and Cypress.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "TypeScript",
      description:
        "Building type-safe applications with TypeScript for improved code quality and developer experience.",
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Analyzing and optimizing application performance for speed and efficiency.",
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Git & GitHub",
      description:
        "Proficient in version control using Git and GitHub for code collaboration, branching, and pull requests.",
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "SSH & Terminal",
      description: "Skilled in using SSH and terminal for secure remote access, server management, and automation.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Cybersecurity Basics",
      description:
        "Understanding the fundamentals of cybersecurity, including encryption, authentication, and secure coding practices.",
    },
  ]

  const skillCategories = {
    frontend: [
      { name: "JavaScript", level: 90, color: "#f7df1e" },
      { name: "React", level: 85, color: "#61dafb" },
      { name: "Next.js", level: 80, color: "#ffffff" },
      { name: "TypeScript", level: 85, color: "#3178c6" },
      { name: "CSS/Tailwind", level: 80, color: "#06b6d4" },
      { name: "Sass/SCSS", level: 78, color: "#cc6699" },
      { name: "Bootstrap", level: 82, color: "#7952b3" },
    ],
    backend: [
      { name: "Node.js", level: 75, color: "#339933" },
      { name: "Java", level: 80, color: "#007396" },
      { name: "PHP", level: 78, color: "#777bb4" },
      { name: "Python", level: 72, color: "#3776ab" },
      { name: "C/C++/C#", level: 70, color: "#a8b9cc" },
      { name: "Lua", level: 65, color: "#000080" },
      { name: "MongoDB", level: 72, color: "#47A248" },
      { name: "PostgreSQL", level: 68, color: "#336791" },
    ],
    tools: [
      { name: "Git", level: 88, color: "#F05032" },
      { name: "TypeScript", level: 85, color: "#3178c6" },
      { name: "Docker", level: 65, color: "#2496ED" },
      { name: "CI/CD", level: 70, color: "#4CAF50" },
      { name: "Testing", level: 75, color: "#C21325" },
      { name: "Terminal", level: 80, color: "#4D4D4D" },
      { name: "Security", level: 68, color: "#FF5722" },
    ],
  }

  const generateChartData = (): SkillData[] => {
    const data: SkillData[] = []
    const years = ["2018", "2019", "2020", "2021", "2022", "2023", "2024"]

    const skillsToShow = {
      frontend: ["JavaScript", "React", "Next.js", "TypeScript", "CSS/Tailwind"],
      backend: ["Node.js", "Java", "PHP", "Python", "MongoDB"],
      tools: ["Git", "TypeScript", "Docker", "CI/CD", "Testing"],
    }

    const currentSkills = skillsToShow[activeCategory as keyof typeof skillsToShow]

    years.forEach((year, index) => {
      const entry: SkillData = { name: year }

      if (activeCategory === "frontend") {
        entry["JavaScript"] = Math.min(90, 50 + index * 7 + Math.sin(index) * 5)
        entry["React"] = Math.min(85, 30 + index * 10 + Math.cos(index) * 7)
        entry["Next.js"] = Math.min(80, 10 + index * 12 + Math.sin(index * 2) * 6)
        entry["TypeScript"] = Math.min(85, 20 + index * 11 + Math.sin(index * 0.8) * 8)
        entry["CSS/Tailwind"] = Math.min(80, 40 + index * 7 + Math.cos(index * 1.2) * 5)
      } else if (activeCategory === "backend") {
        entry["Node.js"] = Math.min(75, 40 + index * 6 + Math.cos(index * 1.5) * 4)
        entry["Java"] = Math.min(80, 35 + index * 8 + Math.sin(index * 1.1) * 5)
        entry["PHP"] = Math.min(78, 45 + index * 6 + Math.cos(index * 0.9) * 4)
        entry["Python"] = Math.min(72, 25 + index * 8 + Math.sin(index * 1.3) * 6)
        entry["MongoDB"] = Math.min(72, 30 + index * 7 + Math.sin(index * 1.1) * 4)
      } else {
        entry["Git"] = Math.min(88, 60 + index * 5 + Math.sin(index * 0.7) * 3)
        entry["TypeScript"] = Math.min(85, 30 + index * 9 + Math.sin(index * 1.2) * 5)
        entry["Docker"] = Math.min(65, 10 + index * 9 + Math.cos(index * 1.2) * 5)
        entry["CI/CD"] = Math.min(70, 15 + index * 9 + Math.cos(index * 0.8) * 6)
        entry["Testing"] = Math.min(75, 25 + index * 8 + Math.sin(index * 1.0) * 5)
      }

      data.push(entry)
    })

    return data
  }

  const chartData = generateChartData()

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black/90 backdrop-blur-sm p-3 border border-red-500/20 rounded-lg shadow-lg">
          <p className="font-medium text-white">{`Year: ${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value.toFixed(1)}%`}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  const handleMouseEnter = (data: any, index: number) => {
    setActiveIndex(index)
  }

  const renderSkillCards = () => {
    let skills = []

    if (activeCategory === "frontend") {
      skills = frontendSkills
    } else if (activeCategory === "backend") {
      skills = backendSkills
    } else {
      skills = toolsSkills
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="bg-black/50 backdrop-blur-sm border-red-500/10 hover:border-red-500/30 transition-all duration-300 overflow-hidden group h-full"
          >
            <CardContent className="p-4">
              <div className="mb-3 bg-red-500/10 w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                {skill.icon}
              </div>
              <h4 className="text-base font-semibold mb-1 group-hover:text-red-500 transition-colors">{skill.title}</h4>
              <p className="text-gray-400 text-xs">{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-red-700/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-3 py-1 text-sm font-medium bg-red-500/10 text-red-500 rounded-full">My Skills</span>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
              Skill Development
            </h2>
            <p className="text-xl text-gray-400">Tracking my growth and expertise over time</p>
          </motion.div>

          {/* Category Selection */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-4 mb-8">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-red-500 text-white shadow-lg shadow-red-500/20"
                    : "bg-black/30 text-gray-400 border border-red-500/20 hover:bg-black/50"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>

          {/* Skill Cards */}
          <motion.div variants={itemVariants}>{renderSkillCards()}</motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
            <motion.div variants={itemVariants} className="space-y-8">
              <Card className="bg-black/50 backdrop-blur-sm border-red-500/10">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl font-semibold mb-6">
                    {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Proficiency
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {activeCategory === "frontend" &&
                      "My frontend expertise focuses on modern JavaScript frameworks and responsive design principles."}
                    {activeCategory === "backend" &&
                      "My backend skills center around multiple languages and database management systems."}
                    {activeCategory === "tools" &&
                      "I'm proficient with various development tools that enhance productivity and code quality."}
                  </p>
                  <div className="space-y-4">
                    {skillCategories[activeCategory as keyof typeof skillCategories].map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full rounded-full"
                            style={{
                              backgroundColor: skill.color,
                              boxShadow: `0 0 10px ${skill.color}80`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="h-[500px] w-full">
              <Card className="bg-black/50 backdrop-blur-sm border-red-500/10 h-full">
                <CardContent className="p-6 h-full">
                  <h3 className="text-2xl font-semibold mb-6">Growth Timeline</h3>
                  <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={chartData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        onMouseMove={(data: any) =>
                          data.activeTooltipIndex !== undefined && handleMouseEnter(data, data.activeTooltipIndex)
                        }
                      >
                        <defs>
                          {Object.keys(chartData[0])
                            .filter((key) => key !== "name")
                            .map((key) => {
                              const allSkills = [
                                ...skillCategories.frontend,
                                ...skillCategories.backend,
                                ...skillCategories.tools,
                              ]
                              const color = allSkills.find((s) => s.name === key)?.color || "#ff0000"
                              return (
                                <linearGradient key={key} id={`color${key}`} x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                                  <stop offset="95%" stopColor={color} stopOpacity={0.1} />
                                </linearGradient>
                              )
                            })}
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,0,0,0.1)" />
                        <XAxis dataKey="name" stroke="#666" />
                        <YAxis stroke="#666" />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        {Object.keys(chartData[0])
                          .filter((key) => key !== "name")
                          .map((key, index) => {
                            const allSkills = [
                              ...skillCategories.frontend,
                              ...skillCategories.backend,
                              ...skillCategories.tools,
                            ]
                            const color = allSkills.find((s) => s.name === key)?.color || "#ff0000"
                            return (
                              <Area
                                key={key}
                                type="monotone"
                                dataKey={key}
                                stroke={color}
                                fillOpacity={1}
                                fill={`url(#color${key})`}
                                strokeWidth={activeIndex === index ? 3 : 2}
                                activeDot={{ r: 8, strokeWidth: 2, stroke: "#fff" }}
                              />
                            )
                          })}
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Skill Comparison */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="bg-black/50 backdrop-blur-sm border-red-500/10">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Skill Distribution</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {Object.entries(skillCategories).map(([category, skills]) => (
                    <div key={category} className="space-y-4">
                      <h4 className="text-xl font-medium text-center mb-4">
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </h4>
                      <div className="relative h-[200px] w-[200px] mx-auto">
                        <svg viewBox="0 0 200 200" className="transform -rotate-90">
                          {skills.map((skill, index) => {
                            const segmentSize = (2 * Math.PI) / skills.length
                            const startAngle = index * segmentSize
                            const endAngle = (index + 1) * segmentSize

                            const x1 = 100 + 90 * Math.cos(startAngle)
                            const y1 = 100 + 90 * Math.sin(startAngle)
                            const x2 = 100 + 90 * Math.cos(endAngle)
                            const y2 = 100 + 90 * Math.sin(endAngle)

                            const largeArcFlag = endAngle - startAngle <= Math.PI ? "0" : "1"

                            // Calculate inner circle points based on skill level
                            const ratio = skill.level / 100
                            const innerRadius = 30 + (90 - 30) * ratio
                            const x3 = 100 + innerRadius * Math.cos(endAngle)
                            const y3 = 100 + innerRadius * Math.sin(endAngle)
                            const x4 = 100 + innerRadius * Math.cos(startAngle)
                            const y4 = 100 + innerRadius * Math.sin(startAngle)

                            return (
                              <path
                                key={skill.name}
                                d={`M ${x1} ${y1} A 90 90 0 ${largeArcFlag} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4} Z`}
                                fill={skill.color}
                                opacity="0.7"
                                stroke="#111"
                                strokeWidth="1"
                              />
                            )
                          })}
                          <circle cx="100" cy="100" r="30" fill="#111" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-lg font-bold transform rotate-90">
                            {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2 mt-4">
                        {skills.map((skill) => (
                          <div key={skill.name} className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: skill.color }}></div>
                            <span className="text-sm text-gray-400">{skill.name}</span>
                          </div>
                        ))}
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

