"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Github,
  Globe,
  Users,
  Code,
  Palette,
  LayoutGrid,
  Megaphone,
  Lightbulb,
  ChevronDown,
  Search,
  Filter,
  X,
  Calendar,
  FileText,
  Sparkles,
} from "lucide-react"

type SocialLink = {
  platform: "github" | "website"
  url: string
}

type Skill = {
  name: string
  level: number
}

type TeamMember = {
  id: string
  name: string
  role: string
  image: string
  department: "development" | "management" | "marketing"
  responsibilities: string[]
  background: string
  expertise: string[]
  skills: Skill[]
  bio: string
  joinedDate: string
  socialLinks?: SocialLink[]
  featured?: boolean
}

const teamMembers: TeamMember[] = [
  {
    id: "twinlight024",
    name: "Butterfly",
    role: "Owner, Creator & Developer",
    image: "/syva-dev/img/profile.png",
    department: "development",
    responsibilities: [
      "Full project ownership and technical leadership",
      "Development across multiple programming languages",
      "Software architecture and system design",
      "UI/UX design and optimization",
    ],
    background:
      "4 years of experience in web, software, and design development. Specializes in full-stack development and system architecture.",
    expertise: [
      "JavaScript",
      "TypeScript",
      "PHP",
      "Lua",
      "C",
      "C#",
      "C++",
      "Java",
      "Python",
      "SQL",
      "React.js",
      "Next.js",
    ],
    skills: [
      { name: "Web Development", level: 5 },
      { name: "Software Engineering", level: 5 },
      { name: "UI/UX Design", level: 4 },
      { name: "Project Management", level: 4 },
    ],
    bio: "Butterfly is the visionary behind all projects, combining expertise in multiple programming languages with a strong design and development background.",
    joinedDate: "2021-01-02",
    socialLinks: [
      { platform: "github", url: "https://github.com/tsx-awtns" },
      { platform: "website", url: "https://www.syva.uk/" },
    ],
    featured: true,
  },
  {
    id: "ilikechaos",
    name: "ilikechaos",
    role: "Support & Hoster",
    image: "/syva-dev/img/ilikechoase.png",
    department: "management",
    responsibilities: [
      "Server hosting and maintenance",
      "Providing technical advice and support",
      "Helping troubleshoot backend-related issues",
      "Ensuring system stability",
    ],
    background: "Provides hosting and technical guidance but does not contribute directly to code development.",
    expertise: ["Server Management", "Backend Architecture", "Troubleshooting", "Security"],
    skills: [
      { name: "Technical Support", level: 4 },
      { name: "Backend Knowledge", level: 4 },
      { name: "Server Administration", level: 5 },
      { name: "Security Awareness", level: 5 },
    ],
    bio: "ilikechaos ensures stable hosting and provides valuable technical insights when needed. While he doesn't write code, his advice helps improve backend performance and security.",
    joinedDate: "2021-01-02",
    socialLinks: [{ platform: "website", url: "" }],
  },
  {
    id: "zombieslayerop",
    name: "Zombieslayerop",
    role: "Tester & Community Moderator",
    image: "/syva-dev/img/zombieslayerop.png",
    department: "management",
    responsibilities: [
      "Bug hunting and reporting",
      "Testing website functionality",
      "Providing feedback on user experience",
      "Moderating the Dragon Soul Roblox Discord",
    ],
    background:
      "A community member and friend who helps with bug testing and site analysis. Not a developer but actively provides feedback.",
    expertise: ["Bug Detection", "Usability Testing", "Community Moderation"],
    skills: [
      { name: "Testing", level: 4 },
      { name: "Bug Reporting", level: 4 },
      { name: "Community Engagement", level: 5 },
    ],
    bio: "Zombieslayerop is a dedicated community member who assists in testing and debugging. He ensures a smooth user experience by reporting issues and providing valuable feedback.",
    joinedDate: "2025-03-24",
    socialLinks: [],
  },
]

const getDepartmentIcon = (department: string) => {
  switch (department) {
    case "development":
      return <Code className="w-4 h-4" />
    case "design":
      return <Palette className="w-4 h-4" />
    case "management":
      return <Users className="w-4 h-4" />
    case "marketing":
      return <Megaphone className="w-4 h-4" />
    default:
      return <Lightbulb className="w-4 h-4" />
  }
}

const getSocialIcon = (platform: string) => {
  switch (platform) {
    case "github":
      return <Github className="w-4 h-4" />
    case "website":
      return <Globe className="w-4 h-4" />
    default:
      return <Globe className="w-4 h-4" />
  }
}

const SkillLevel = ({ level }: { level: number }) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            backgroundColor: i <= level ? "rgb(239, 68, 68)" : "rgb(75, 85, 99)",
          }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          className={`h-1.5 w-4 rounded-full`}
        />
      ))}
    </div>
  )
}

const TeamMemberCard = ({
  member,
  isExpanded,
  onToggleExpand,
}: {
  member: TeamMember
  isExpanded: boolean
  onToggleExpand: () => void
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5 }}
        className="h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -8, transition: { duration: 0.2 } }}
        ref={cardRef}
      >
        <motion.div
          variants={{
            inactive: {
              boxShadow: "0 0 0 rgba(239, 68, 68, 0)",
              transition: { duration: 0.3 },
            },
            active: {
              boxShadow: "0 0 20px rgba(239, 68, 68, 0.2)",
              transition: { duration: 0.3 },
            },
            hover: {
              boxShadow: "0 0 25px rgba(239, 68, 68, 0.3)",
              transition: { duration: 0.3 },
            },
          }}
          initial="inactive"
          animate={isHovered ? "hover" : "active"}
          className="h-full rounded-xl overflow-hidden"
        >
          <Card className="h-full bg-black/50 backdrop-blur-sm border-red-500/10 hover:border-red-500/30 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.15),transparent_70%)]"></div>
              <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,0,0,0.1),transparent_70%)]"></div>
            </div>

            {member.featured && (
              <div className="absolute inset-0 rounded-xl border-2 border-red-500/30 animate-pulse pointer-events-none z-10"></div>
            )}

            <CardContent className="p-0">
              <div className="relative">
                <div className="h-48 relative overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-auto object-cover rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  {member.featured && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      Featured
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                      {member.name}
                    </h3>
                    <div className="flex items-center mt-1">
                      <Badge
                        variant="outline"
                        className="bg-red-500/20 text-white border-red-500/30 flex items-center gap-1"
                      >
                        {getDepartmentIcon(member.department)}
                        <span>{member.role}</span>
                      </Badge>
                    </div>
                  </div>

                  {member.featured && (
                    <div className="absolute top-2 left-2 animate-pulse">
                      <Sparkles className="h-4 w-4 text-red-500" />
                    </div>
                  )}
                </div>
              </div>

              <div className="p-5">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-red-500 mb-2 flex items-center">
                    <Users className="w-3.5 h-3.5 mr-1.5" />
                    Responsibilities
                  </h4>
                  <ul className="space-y-1.5">
                    {member.responsibilities.map((responsibility, index) => (
                      <li key={index} className="text-xs text-gray-300 flex items-start">
                        <span className="text-red-500 mr-2 text-lg leading-none">&bull;</span>
                        <span className="leading-tight">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-red-500 mb-2 flex items-center">
                    <Lightbulb className="w-3.5 h-3.5 mr-1.5" />
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {member.expertise.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-3 pt-3 border-t border-red-500/10">
                  <div className="flex space-x-2">
                    {member.socialLinks?.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-red-500 transition-colors p-1.5 hover:bg-red-500/10 rounded-full"
                      >
                        {getSocialIcon(link.platform)}
                      </Link>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onToggleExpand}
                    className="text-xs text-gray-400 hover:text-red-500 hover:bg-red-500/10"
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                    <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Expanded content as a separate floating element */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 right-0 z-50 mt-2"
          >
            <Card className="bg-black/80 backdrop-blur-md border border-red-500/20 shadow-lg shadow-red-500/10">
              <CardContent className="p-5">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-red-500 mb-2 flex items-center">
                    <Globe className="w-3.5 h-3.5 mr-1.5" />
                    Background
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">{member.background}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-red-500 mb-2 flex items-center">
                    <Code className="w-3.5 h-3.5 mr-1.5" />
                    Skills
                  </h4>
                  <div className="space-y-2.5">
                    {member.skills.map((skill, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-xs text-gray-300">{skill.name}</span>
                        <SkillLevel level={skill.level} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-red-500 mb-2 flex items-center">
                    <FileText className="w-3.5 h-3.5 mr-1.5" />
                    Bio
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">{member.bio}</p>
                </div>

                <div className="text-xs text-gray-400 mb-4 flex items-center">
                  <Calendar className="w-3.5 h-3.5 mr-1.5 text-gray-500" />
                  Joined: {new Date(member.joinedDate).toLocaleDateString("en-US", { year: "numeric", month: "long" })}
                </div>

                <div className="flex justify-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onToggleExpand}
                    className="text-xs text-gray-400 hover:text-red-500 hover:bg-red-500/10"
                  >
                    Close Details
                    <ChevronDown className="ml-1 h-3 w-3 rotate-180" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function SyvaTeam() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedMemberId, setExpandedMemberId] = useState<string | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [isFiltering, setIsFiltering] = useState(false)

  const filteredMembers = teamMembers.filter((member) => {
    const matchesTab = activeTab === "all" || member.department === activeTab
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.expertise.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesTab && matchesSearch
  })

  const handleTabChange = (tab: string) => {
    if (tab !== activeTab) {
      setIsFiltering(true)
      setActiveTab(tab)

      setTimeout(() => {
        setIsFiltering(false)
      }, 600)
    }
  }

  const handleSearch = (value: string) => {
    if (value !== searchQuery) {
      setIsFiltering(true)
      setSearchQuery(value)

      setTimeout(() => {
        setIsFiltering(false)
      }, 600)
    }
  }

  const clearFilters = () => {
    setIsFiltering(true)
    setSearchQuery("")
    setActiveTab("all")

    setTimeout(() => {
      setIsFiltering(false)
    }, 600)
  }

  const toggleMemberExpand = (memberId: string) => {
    setExpandedMemberId((prevId) => (prevId === memberId ? null : memberId))
  }

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

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  }

  return (
    <section className="py-12 md:py-24 px-4 relative bg-gradient-to-b">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t to-transparent" />

      <div className="absolute top-1/4 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-red-700/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "8s" }}
      />

      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-3 py-1 text-sm font-medium bg-red-500/10 text-red-500 rounded-full inline-block">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
              Meet the Syva Team
            </h2>
            <p className="text-xl text-gray-400">
              Talented professionals working together to bring your vision to life
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge
                  variant={activeTab === "all" ? "default" : "outline"}
                  className={`px-4 py-2 text-sm cursor-pointer transition-all duration-300 ${
                    activeTab === "all"
                      ? "bg-red-500 hover:bg-red-600 shadow-md shadow-red-500/20"
                      : "hover:bg-red-500/10 hover:text-red-500 border-red-500/20"
                  }`}
                  onClick={() => handleTabChange("all")}
                >
                  <Users className="w-4 h-4 mr-1.5" />
                  All ({teamMembers.length})
                </Badge>

                <Badge
                  variant={activeTab === "development" ? "default" : "outline"}
                  className={`px-4 py-2 text-sm cursor-pointer transition-all duration-300 ${
                    activeTab === "development"
                      ? "bg-red-500 hover:bg-red-600 shadow-md shadow-red-500/20"
                      : "hover:bg-red-500/10 hover:text-red-500 border-red-500/20"
                  }`}
                  onClick={() => handleTabChange("development")}
                >
                  <Code className="w-4 h-4 mr-1.5" />
                  Development ({teamMembers.filter((m) => m.department === "development").length})
                </Badge>

                <Badge
                  variant={activeTab === "management" ? "default" : "outline"}
                  className={`px-4 py-2 text-sm cursor-pointer transition-all duration-300 ${
                    activeTab === "management"
                      ? "bg-red-500 hover:bg-red-600 shadow-md shadow-red-500/20"
                      : "hover:bg-red-500/10 hover:text-red-500 border-red-500/20"
                  }`}
                  onClick={() => handleTabChange("management")}
                >
                  <LayoutGrid className="w-4 h-4 mr-1.5" />
                  Management ({teamMembers.filter((m) => m.department === "management").length})
                </Badge>

                <Badge
                  variant={activeTab === "marketing" ? "default" : "outline"}
                  className={`px-4 py-2 text-sm cursor-pointer transition-all duration-300 ${
                    activeTab === "marketing"
                      ? "bg-red-500 hover:bg-red-600 shadow-md shadow-red-500/20"
                      : "hover:bg-red-500/10 hover:text-red-500 border-red-500/20"
                  }`}
                  onClick={() => handleTabChange("marketing")}
                >
                  <Megaphone className="w-4 h-4 mr-1.5" />
                  Marketing ({teamMembers.filter((m) => m.department === "marketing").length})
                </Badge>
              </div>

              <div className="relative w-full max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, role, or skill..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 bg-black/30 border border-red-500/10 rounded-lg text-sm text-gray-300 focus:outline-none focus:border-red-500/30 focus:ring-1 focus:ring-red-500/20"
                />
                {searchQuery && (
                  <button
                    onClick={() => handleSearch("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {(activeTab !== "all" || searchQuery) && (
                <div className="flex justify-center mt-3">
                  <Badge
                    variant="outline"
                    className="border-red-500/20 text-red-500 hover:bg-red-500/10 cursor-pointer"
                    onClick={clearFilters}
                  >
                    <Filter className="w-3.5 h-3.5 mr-1.5" />
                    Clear Filters
                  </Badge>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${searchQuery}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                ref={gridRef}
              >
                {filteredMembers.length > 0 ? (
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-10"
                    variants={gridVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    layout
                  >
                    <AnimatePresence>
                      {filteredMembers.map((member) => (
                        <TeamMemberCard
                          key={member.id}
                          member={member}
                          isExpanded={expandedMemberId === member.id}
                          onToggleExpand={() => toggleMemberExpand(member.id)}
                        />
                      ))}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div
                    className="text-center py-16 bg-black/30 rounded-xl border border-red-500/10 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center">
                        <Search className="h-8 w-8 text-red-500" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">No team members found</h3>
                    <p className="text-gray-400 max-w-md mx-auto mb-6">
                      We couldn't find any team members matching your current filters.
                    </p>
                    <Button
                      variant="outline"
                      className="border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white"
                      onClick={clearFilters}
                    >
                      <Filter className="w-4 h-4 mr-2" />
                      Clear All Filters
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16">
            <Card className="bg-black/50 backdrop-blur-sm border-red-500/10 overflow-hidden relative">
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.15),transparent_70%)]"></div>
                <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,0,0,0.1),transparent_70%)]"></div>
              </div>

              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
                  Team Composition
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <motion.div className="text-center space-y-2" whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                    <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto border border-red-500/20 shadow-lg shadow-red-500/5">
                      <Code className="h-8 w-8 text-red-500" />
                    </div>
                    <h4 className="text-2xl font-bold">
                      {teamMembers.filter((m) => m.department === "development").length}
                    </h4>
                    <p className="text-sm text-gray-400">Developers</p>
                  </motion.div>
                  <motion.div className="text-center space-y-2" whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                    <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto border border-red-500/20 shadow-lg shadow-red-500/5">
                      <Palette className="h-8 w-8 text-red-500" />
                    </div>
                    <h4 className="text-2xl font-bold">Syva.uk</h4>
                    <p className="text-sm text-gray-400">Designers</p>
                  </motion.div>
                  <motion.div className="text-center space-y-2" whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                    <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto border border-red-500/20 shadow-lg shadow-red-500/5">
                      <Users className="h-8 w-8 text-red-500" />
                    </div>
                    <h4 className="text-2xl font-bold">
                      {teamMembers.filter((m) => m.department === "management").length}
                    </h4>
                    <p className="text-sm text-gray-400">Management</p>
                  </motion.div>
                  <motion.div className="text-center space-y-2" whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                    <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto border border-red-500/20 shadow-lg shadow-red-500/5">
                      <Megaphone className="h-8 w-8 text-red-500" />
                    </div>
                    <h4 className="text-2xl font-bold">
                      {teamMembers.filter((m) => m.department === "marketing").length}
                    </h4>
                    <p className="text-sm text-gray-400">Marketing</p>
                  </motion.div>
                </div>

                <div className="flex justify-center mt-8">
                  <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

