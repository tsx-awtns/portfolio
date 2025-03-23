"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Gamepad2,
  X,
  Star,
  Clock,
  Users,
  Trophy,
  ThumbsUp,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Filter,
  SortAsc,
  SortDesc,
  Calendar,
  Monitor,
  Smartphone,
  Laptop,
  Joystick,
  Play,
  Info,
  Heart,
  Download,
  Bookmark,
  Sparkles,
  Crown,
  Check,
} from "lucide-react"
import Link from "next/link"
import { toast } from "@/components/ui/use-toast"

type Game = {
  id: number
  title: string
  description: string
  image: string
  platform: string[]
  genre: string[]
  playTime?: number
  rating: number
  playerCount: string
  releaseDate: string
  developer: string
  publisher: string
  link?: string
  screenshots: string[]
  videoUrl?: string
  lastPlayed?: string
}

type RobloxGame = {
  id: number
  title: string
  description: string
  image: string
  visits: string
  likes: string
  created: string
  lastPlayed: string
  favorite: boolean
  rating: number
  genre: string[]
  developer: string
  playerCount: string
  link: string
  screenshots: string[]
  videoUrl?: string
  gamelevel?: string
  badgesEarned: string
  playTime: string
}

const robloxGames: RobloxGame[] = [
  {
    id: 101,
    title: "Dragon Soul",
    description:
      "An anime-inspired MMO where players can train, fight, and evolve their characters. Battle against powerful foes, unlock new abilities, and become the ultimate warrior.",
    image: "https://www.syva.uk/svya-dev/img/games/roblox-screenshots/roblox-games/Dragon-Soul/banner.png",
    visits: "142.5M",
    likes: "350.7K",
    created: "Dec 13, 2021",
    lastPlayed: "Today",
    favorite: true,
    rating: 5,
    genre: ["Anime", "MMO", "Action", "RPG"],
    developer: "x2 Wish Studios",
    playerCount: "20K-50K",
    link: "https://www.roblox.com/games/8246874626/x2-wish-Dragon-Soul-Anime-MMO",
    gamelevel: "2361",
    badgesEarned: "None",
    playTime: "5 days",
    screenshots: [
      "https://www.syva.uk/svya-dev/img/games/roblox-screenshots/roblox-games/Dragon-Soul/pic2.png",
      "https://www.syva.uk/svya-dev/img/games/roblox-screenshots/roblox-games/Dragon-Soul/pic3.png",
      "https://www.syva.uk/svya-dev/img/games/roblox-screenshots/roblox-games/Dragon-Soul/pic4.png"
    ],
    videoUrl: "https://www.youtube.com/watch?v=ZyMIotzXxQQ"
  },  
  {
    id: 102,
    title: "Blox Fruits",
    description: 
      "An action-packed adventure game where players train to become powerful fighters or skilled pirates. Explore vast islands, discover powerful fruits, and master new abilities to dominate battles.",
    image: "https://www.syva.uk/svya-dev/img/games/roblox-screenshots/roblox-games/blox-fruit/banner.png",
    visits: "30B+",
    likes: "6.2M",
    created: "2019-01-16",
    lastPlayed: "3 days ago",
    favorite: true,
    rating: 5,
    genre: ["Action", "RPG", "Adventure"],
    developer: "Gamer Robot Inc.",
    playerCount: "100K-500K",
    gamelevel: "Max Level: 2550",
    badgesEarned: "139/182",
    playTime: "2 years",
    link: "https://www.roblox.com/games/2753915549/Blox-Fruits",
    screenshots: [
      "https://www.syva.uk/svya-dev/img/games/roblox-screenshots/roblox-games/blox-fruit/pic2.png",
      "https://www.syva.uk/svya-dev/img/games/roblox-screenshots/roblox-games/blox-fruit/pic3.png",
      "https://www.syva.uk/svya-dev/img/games/roblox-screenshots/roblox-games/blox-fruit/pic4.png"
    ],
    videoUrl: "https://www.youtube.com/watch?v=ObNyxwkc7p0"
  },
  {
    id: 103,
    title: "Blade Ball",
    description: 
      "A fast-paced action game where players deflect a homing ball using swords, unlock unique abilities, and compete to be the last one standing in intense battles.",
    image: "https://www.syva.uk/svya-dev/img/games/roblox-screenshots/roblox-games/blade-ball/banner.png",
    visits: "2B+",
    likes: "2.5M",
    created: "2023-07-04",
    lastPlayed: "2 days ago",
    favorite: true,
    rating: 4.7,
    genre: ["Action", "Fighting", "PvP"],
    developer: "Wiggity",
    playerCount: "80K-200K",
    gamelevel: "Skill-based",
    badgesEarned: "Varies",
    playTime: "9 Months",
    link: "https://www.roblox.com/games/13772394625/Blade-Ball",
    screenshots: [
      "https://www.syva.uk/svya-dev/img/games/roblox-screenshots/roblox-games/blade-ball/pic2.png",
      "https://www.syva.uk/svya-dev/img/games/roblox-screenshots/roblox-games/blade-ball/pic3.png",
      "https://www.syva.uk/svya-dev/img/games/roblox-screenshots/roblox-games/blade-ball/pic4.png"
    ],
    videoUrl: "https://www.youtube.com/watch?v=b2zMU43qqXM"
 },
 {
  id: 104,
  title: "Shindo Life",
  description: 
    "An open-world RPG inspired by Naruto, where players train to become powerful shinobi, unlock unique bloodlines, and engage in intense battles across different villages.",
  image: "https://www.syva.uk/svya-dev/img/games/roblox-screenshots/roblox-games/shindo-life/banner.png",
  visits: "2.5B+",
  likes: "1.8M",
  created: "2020-03-19",
  lastPlayed: "5 days ago",
  favorite: false,
  rating: 4.6,
  genre: ["RPG", "Fighting", "Adventure"],
  developer: "RELL World",
  playerCount: "30K-80K",
  gamelevel: "max-Rank: 202",
  badgesEarned: "Varies",
  playTime: "2 years",
  link: "https://www.roblox.com/games/4616652839/Shindo-Life",
  screenshots: [
    "https://syva.uk/svya-dev/img/games/roblox-screenshots/roblox-games/shindo-life/pic2.png",
    "https://syva.uk/svya-dev/img/games/roblox-screenshots/roblox-games/shindo-life/pic3.png",
    "https://syva.uk/svya-dev/img/games/roblox-screenshots/roblox-games/shindo-life/pic4.png"
  ],
  videoUrl: "https://youtu.be/-9PEaV7Ptjc"
  },
  {
    id: 105,
    title: "Creation Favorite",
    description: "This is a game that I created and is one of my favorites.",
    image: "https://www.syva.uk/svya-dev/img/slbv2.png",
    visits: "N/A",
    likes: "N/A",
    created: "N/A",
    lastPlayed: "N/A",
    favorite: false,
    rating: 0,
    genre: ["N/A"],
    developer: "mays_024 & nia22_022",
    playerCount: "N/A",
    gamelevel: "N/A",
    badgesEarned: "N/A",
    playTime: "N/A",
    link: "https://www.syva.uk/svya-dev/img/slbv2.png",
    screenshots: [
      "https://www.syva.uk/svya-dev/img/slbv2.png",
      "https://www.syva.uk/svya-dev/img/slbv2.png",
      "https://www.syva.uk/svya-dev/img/slbv2.png",
    ],
    videoUrl: "https://www.syva.uk/svya-dev/img/slbv2.png",
  },
]

const parsePlayTime = (playTime: string): number => {
  if (!playTime) return 0

  const timeUnits: { [key: string]: number } = {
    second: 1 / 3600,
    minute: 1 / 60,
    hour: 1,
    day: 24,
    week: 24 * 7,
    month: 24 * 30,
    year: 24 * 365,
  }

  const match = playTime.match(/(\d+)\s*(second|minute|hour|day|week|month|year)s?/i)
  if (match) {
    const value = parseInt(match[1], 10)
    const unit = match[2].toLowerCase()
    return value * (timeUnits[unit] || 0)
  }
  return 0
}

export default function Games() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedGame, setSelectedGame] = useState<Game | null>(null)
  const [selectedRobloxGame, setSelectedRobloxGame] = useState<RobloxGame | null>(null)
  const [robloxDialogOpen, setRobloxDialogOpen] = useState(false)
  const [currentRobloxPage, setCurrentRobloxPage] = useState(0)
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0)
  const [robloxFilter, setRobloxFilter] = useState("all")
  const [robloxSort, setRobloxSort] = useState("lastPlayed")
  const [robloxSortDirection, setRobloxSortDirection] = useState("desc")
  const [activeGameTab, setActiveGameTab] = useState("info")
  const [direction, setDirection] = useState(1)
  const gamesPerPage = 3

  const [favorites, setFavorites] = useState<number[]>(() => {
    return robloxGames.filter((game) => game.favorite).map((game) => game.id)
  })

  const toggleFavorite = (gameId: number, isCreationFavorite = false) => {
    if (isCreationFavorite) return 

    setFavorites((prev) => {
      if (prev.includes(gameId)) {
        return prev.filter((id) => id !== gameId)
      } else {
        return [...prev, gameId]
      }
    })

    const updatedGames = [...robloxGames]
    const gameIndex = updatedGames.findIndex((game) => game.id === gameId)
    if (gameIndex !== -1) {
      updatedGames[gameIndex] = {
        ...updatedGames[gameIndex],
        favorite: !updatedGames[gameIndex].favorite,
      }
    }
  }

  const isFavorited = (gameId: number) => {
    return favorites.includes(gameId)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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

  const favoriteGames: Game[] = [
    {
      id: 1,
      title: "Roblox",
      description:
        "A global platform where millions of people gather to imagine, create, and share experiences in immersive, user-generated 3D worlds.",
      image: "https://www.syva.uk/svya-dev/img/games/roblox.png",
      platform: ["PC", "Mobile", "Console"],
      genre: ["Platform", "MMO", "Sandbox"],
      playTime: 500,
      rating: 4.5,
      playerCount: "43.2M daily active users",
      releaseDate: "2006",
      developer: "Roblox Corporation",
      publisher: "Roblox Corporation",
      link: "https://www.roblox.com/",
      screenshots: [
        "https://www.syva.uk/svya-dev/img/games/roblox-screenshots/Background.png",
        "https://www.syva.uk/svya-dev/img/games/roblox-screenshots/4-games.png",
        "https://www.syva.uk/svya-dev/img/games/roblox-screenshots/front.png",
      ],
      videoUrl: "https://youtu.be/eAvXhNlO-rA?si=JDO-pGHaVTzENbxh",
      lastPlayed: "2 days ago",
    },
    {
      id: 2,
      title: "Minecraft",
      description:
        "A sandbox video game where players explore a blocky, procedurally-generated 3D world with infinite terrain and craft tools and items.",
      image: "https:/www.syva.uk/svya-dev/img/games/minecraft.png",
      platform: ["PC", "Mobile", "Console"],
      genre: ["Sandbox", "Survival", "Adventure"],
      playTime: 350,
      rating: 4.8,
      playerCount: "140M monthly active users",
      releaseDate: "November 2011",
      developer: "Mojang Studios",
      publisher: "Mojang Studios, Xbox Game Studios",
      link: "https://www.minecraft.net/",
      screenshots: [
        "/placeholder.svg?height=400&width=600"
      ],
      videoUrl: "https://www.youtube.com/watch?v=example",
      lastPlayed: "1 week ago",
    },
    {
      id: 3,
      title: "The Elder Scrolls V: Skyrim",
      description: 
        "An open-world action RPG where players embark on an epic journey through the vast lands of Skyrim, battling dragons, exploring dungeons, and shaping their destiny.",
      image: "https:/www.syva.uk/svya-dev/img/games/skyrim.png",
      platform: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
      genre: ["RPG", "Open-World", "Action"],
      playTime: 500,
      rating: 4.8,
      playerCount: "Over 30M copies sold",
      releaseDate: "November 2011",
      developer: "Bethesda Game Studios",
      publisher: "Bethesda Softworks",
      link: "https://elderscrolls.bethesda.net/en/skyrim",
      screenshots: [
        "/placeholder.svg?height=400&width=600"
      ],
      videoUrl: "https://www.youtube.com/watch?v=JSRtYpNRoN0",
      lastPlayed: "2 weeks ago"
    },          
    {
      id: 4,
      title: "VRChat",
      description: 
        "A social VR platform where players can create, explore, and interact in user-generated worlds with full-body avatars and voice chat.",
      image: "https:/www.syva.uk/svya-dev/img/games/vrchat.png",
      platform: ["PC", "VR Headsets"],
      genre: ["Social", "VR", "Multiplayer"],
      playTime: 500,
      rating: 4.2,
      playerCount: "Over 25M registered users",
      releaseDate: "February 2017",
      developer: "VRChat Inc.",
      publisher: "VRChat Inc.",
      link: "https://hello.vrchat.com/",
      screenshots: [
        "/"
      ],
      videoUrl: "https://www.youtube.com/watch?v=_T2V1xr7F0g",
      lastPlayed: "2 days ago"
    },    
  ]

  const filteredRobloxGames =
    robloxFilter === "all"
      ? [...robloxGames] 
      : robloxFilter === "favorite"
        ? robloxGames.filter((game) => favorites.includes(game.id))
        : robloxGames.filter((game) => game.genre.includes(robloxFilter))

  const sortedRobloxGames = [...filteredRobloxGames].sort((a, b) => {
    if (robloxSort === "rating") {
      return robloxSortDirection === "desc" ? b.rating - a.rating : a.rating - b.rating
    } else if (robloxSort === "created") {
      return robloxSortDirection === "desc"
        ? new Date(b.created).getTime() - new Date(a.created).getTime()
        : new Date(a.created).getTime() - new Date(b.created).getTime()
    } else if (robloxSort === "lastPlayed") {
      return robloxSortDirection === "desc"
        ? a.lastPlayed > b.lastPlayed
          ? -1
          : 1
        : a.lastPlayed > b.lastPlayed
          ? 1
          : -1
    } else if (robloxSort === "visits") {
      return robloxSortDirection === "desc"
        ? Number.parseInt(b.visits) - Number.parseInt(a.visits)
        : Number.parseInt(a.visits) - Number.parseInt(b.visits)
    }
    return 0
  })

  const totalRobloxPages = Math.ceil(sortedRobloxGames.length / gamesPerPage)

  const currentRobloxGames = sortedRobloxGames.slice(
    currentRobloxPage * gamesPerPage,
    (currentRobloxPage + 1) * gamesPerPage,
  )

  const nextRobloxPage = () => {
    setDirection(1)
    setCurrentRobloxPage((prev) => (prev + 1) % totalRobloxPages)
  }

  const prevRobloxPage = () => {
    setDirection(-1)
    setCurrentRobloxPage((prev) => (prev - 1 + totalRobloxPages) % totalRobloxPages)
  }

  const handleRobloxClick = () => {
    setRobloxDialogOpen(true)
  }

  const handleRobloxGameSelect = (game: RobloxGame) => {
    setSelectedRobloxGame(game)
    setCurrentScreenshotIndex(0)
  }

  const handleGameSelect = (game: Game) => {
    if (game.title === "Roblox") {
      setSelectedGame(game)
      setCurrentScreenshotIndex(0)
    }
  }

  const nextScreenshot = () => {
    const screenshots = selectedGame
      ? selectedGame.screenshots
      : selectedRobloxGame
        ? selectedRobloxGame.screenshots
        : []

    setCurrentScreenshotIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevScreenshot = () => {
    const screenshots = selectedGame
      ? selectedGame.screenshots
      : selectedRobloxGame
        ? selectedRobloxGame.screenshots
        : []

    setCurrentScreenshotIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "PC":
        return <Monitor className="h-4 w-4" />
      case "Mobile":
        return <Smartphone className="h-4 w-4" />
      case "Console":
        return <Joystick className="h-4 w-4" />
      default:
        return <Laptop className="h-4 w-4" />
    }
  }

  const renderStarRating = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-4 w-4 fill-yellow-500 text-yellow-500" />)
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-4 w-4 text-yellow-500" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
          </div>
        </div>,
      )
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-yellow-500" />)
    }

    return (
      <div className="flex items-center">
        <div className="flex">{stars}</div>
        <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
      </div>
    )
  }

  const getUniqueRobloxGenres = () => {
    const genres = new Set<string>()
    robloxGames.forEach((game) => {
      game.genre.forEach((g) => genres.add(g))
    })
    return Array.from(genres)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (selectedGame || selectedRobloxGame) {
      interval = setInterval(() => {
        nextScreenshot()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [selectedGame, selectedRobloxGame, currentScreenshotIndex])

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const sharedGameId = searchParams.get("game")

    if (sharedGameId && !isNaN(Number(sharedGameId))) {
      const gameId = Number.parseInt(sharedGameId, 10)


      const game = robloxGames.find((g) => g.id === gameId)

      if (game) {
        setRobloxDialogOpen(true)
        setSelectedRobloxGame(game)
        setCurrentScreenshotIndex(0)
      }
    }
  }, [])

  return (
    <section id="games" className="py-24 px-4 relative bg-gradient-to-b to-black">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b  to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t to-transparent" />

      <div className="absolute top-1/4 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-red-700/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-40 h-40 bg-red-600/5 rounded-full blur-2xl animate-pulse"
        style={{ animationDuration: "12s" }}
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
            <span className="px-3 py-1 text-sm font-medium bg-red-500/10 text-red-500 rounded-full">Gaming</span>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
              My Favorite Games
            </h2>
            <p className="text-xl text-gray-400">When I'm not coding, you'll find me in these virtual worlds</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteGames.map((game) => (
              <motion.div key={game.id} variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.2 } }}>
                {game.title === "Roblox" ? (
                  <motion.div
                    variants={glowVariants}
                    initial="inactive"
                    animate="active"
                    whileHover="hover"
                    className="h-full rounded-xl overflow-hidden cursor-pointer relative"
                    onClick={handleRobloxClick}
                  >
                    <div className="absolute inset-0 rounded-xl border-2 border-red-500/30 animate-pulse pointer-events-none z-10"></div>

                    <div className="absolute bottom-2 right-2 bg-red-500/80 text-white text-xs px-2 py-1 rounded-full z-10 animate-bounce">
                      Click to explore
                    </div>

                    <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
                      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.15),transparent_70%)]"></div>
                      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,0,0,0.1),transparent_70%)]"></div>
                    </div>

                    <Card className="h-full overflow-hidden bg-black/50 backdrop-blur-sm border-red-500/10 hover:border-red-500/30 transition-all duration-300 cursor-pointer group">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={game.image || "/placeholder.svg"}
                          alt={game.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute top-4 right-4">{renderStarRating(game.rating)}</div>
                        <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2">
                          {game.platform.map((platform, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full"
                            >
                              {getPlatformIcon(platform)}
                              <span className="text-xs">{platform}</span>
                            </div>
                          ))}
                        </div>

                        <div className="absolute top-2 left-2 animate-pulse">
                          <Sparkles className="h-5 w-5 text-red-500" />
                        </div>

                        <div className="absolute top-2 right-2 animate-bounce">
                          <div className="bg-red-500/80 text-white text-xs px-2 py-1 rounded-full">Interactive</div>
                        </div>
                      </div>
                      <CardContent className="p-6 space-y-4">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-bold group-hover:text-red-500 transition-colors">{game.title}</h3>
                          <div className="flex flex-wrap gap-1">
                            {game.genre.slice(0, 2).map((genre, index) => (
                              <span key={index} className="px-2 py-1 bg-red-500/10 text-red-500 text-xs rounded-full">
                                {genre}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm line-clamp-2">{game.description}</p>
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-gray-400" />
                            <span className="truncate">{game.playerCount}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span>{game.playTime}+ hours</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <span>{game.releaseDate}</span>
                          </div>
                          <div className="flex items-center gap-2 truncate">
                            <Info className="h-4 w-4 text-gray-400 flex-shrink-0" />
                            <span className="truncate">{game.developer}</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className={`border-red-500/20 ${game.title !== "Roblox" ? "opacity-50 cursor-not-allowed" : "hover:bg-red-500 hover:text-white"}`}
                            disabled={game.title !== "Roblox"}
                          >
                            <Play className="mr-1 h-4 w-4" />
                            Play Now
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-red-500 hover:text-red-600 hover:bg-red-500/10"
                          >
                            View Favorites
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ) : (
                  <motion.div
                    variants={glowVariants}
                    initial="inactive"
                    whileHover={{ y: 0 }} 
                    className="h-full rounded-xl overflow-hidden opacity-70"
                  >
                    <Card className="h-full overflow-hidden bg-black/50 backdrop-blur-sm border-red-500/10 transition-all duration-300 group">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={game.image || "/placeholder.svg"}
                          alt={game.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute top-4 right-4">{renderStarRating(game.rating)}</div>
                        <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2">
                          {game.platform.map((platform, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full"
                            >
                              {getPlatformIcon(platform)}
                              <span className="text-xs">{platform}</span>
                            </div>
                          ))}
                        </div>

                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-red-500/10 to-transparent" />
                      </div>
                      <CardContent className="p-6 space-y-4">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-bold group-hover:text-red-500 transition-colors">{game.title}</h3>
                          <div className="flex flex-wrap gap-1">
                            {game.genre.slice(0, 2).map((genre, index) => (
                              <span key={index} className="px-2 py-1 bg-red-500/10 text-red-500 text-xs rounded-full">
                                {genre}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm line-clamp-2">{game.description}</p>
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-gray-400" />
                            <span className="truncate">{game.playerCount}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span>{game.playTime}+ hours</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <span>{game.releaseDate}</span>
                          </div>
                          <div className="flex items-center gap-2 truncate">
                            <Info className="h-4 w-4 text-gray-400 flex-shrink-0" />
                            <span className="truncate">{game.developer}</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-red-500/20 hover:bg-red-500 hover:text-white"
                          >
                            <Play className="mr-1 h-4 w-4" />
                            Play Now
                          </Button>
                          {game.link && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-red-500 hover:text-red-600 hover:bg-red-500/10"
                              asChild
                            >
                              <Link href={game.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-1" />
                                Visit
                              </Link>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16">
            <Card className="bg-black/50 backdrop-blur-sm border-red-500/10 overflow-hidden relative">
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.15),transparent_70%)]"></div>
                <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,0,0,0.1),transparent_70%)]"></div>
              </div>

              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
                  Gaming Stats
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <motion.div className="text-center space-y-2" whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                    <div className="bg-red-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                      <Gamepad2 className="h-6 w-6 text-red-500" />
                    </div>
                    <h4 className="text-xl font-bold">4+</h4>
                    <p className="text-sm text-gray-400">Games Played</p>
                  </motion.div>
                  <div className="text-center space-y-2">
                    <div className="bg-red-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                      <Clock className="h-6 w-6 text-red-500" />
                    </div>
                    <h4 className="text-xl font-bold">2,500+</h4>
                    <p className="text-sm text-gray-400">Hours Played</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="bg-red-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                      <Trophy className="h-6 w-6 text-red-500" />
                    </div>
                    <h4 className="text-xl font-bold">N/A</h4>
                    <p className="text-sm text-gray-400">Achievements</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="bg-red-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                      <Users className="h-6 w-6 text-red-500" />
                    </div>
                    <h4 className="text-xl font-bold">10+</h4>
                    <p className="text-sm text-gray-400">Gaming Friends</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      <Dialog open={selectedGame !== null} onOpenChange={(open) => !open && setSelectedGame(null)}>
        <DialogContent className="sm:max-w-[900px] max-h-[90vh] bg-black/95 border-red-500/20 p-0 overflow-hidden">
          {selectedGame && (
            <>
              <DialogHeader className="p-6 pb-0 sticky top-0 bg-black/95 z-10 border-b border-red-500/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-red-500/10 p-2 rounded-lg">
                      <Gamepad2 className="h-6 w-6 text-red-500" />
                    </div>
                    <DialogTitle className="text-2xl font-bold">{selectedGame.title}</DialogTitle>
                  </div>
                  <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </DialogClose>
                </div>
                <DialogDescription className="text-gray-400 mt-2 px-1">
                  {selectedGame.developer} • {selectedGame.releaseDate}
                </DialogDescription>
              </DialogHeader>

              <div className="p-6 overflow-y-auto" style={{ maxHeight: "calc(90vh - 120px)" }}>
                <Tabs defaultValue="info" value={activeGameTab} onValueChange={setActiveGameTab}>
                  <TabsList className="grid grid-cols-3 mb-6 bg-black/50 border border-red-500/20 p-1 rounded-lg">
                    <TabsTrigger
                      value="info"
                      className="data-[state=active]:bg-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-red-500/20"
                    >
                      Info
                    </TabsTrigger>
                    <TabsTrigger
                      value="media"
                      className="data-[state=active]:bg-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-red-500/20"
                    >
                      Media
                    </TabsTrigger>
                    <TabsTrigger
                      value="details"
                      className="data-[state=active]:bg-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-red-500/20"
                    >
                      Details
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="info" className="space-y-6 pr-2">
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        className="relative h-[250px] rounded-lg overflow-hidden"
                        variants={glowVariants}
                        initial="inactive"
                        animate="active"
                        whileHover="hover"
                      >
                        <Image
                          src={selectedGame.image || "/placeholder.svg"}
                          alt={selectedGame.title}
                          fill
                          className="object-cover"
                        />

                        <div className="absolute top-2 right-2 animate-pulse">
                          <Sparkles className="h-5 w-5 text-red-500" />
                        </div>
                      </motion.div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>{renderStarRating(selectedGame.rating)}</div>
                          <div className="flex items-center gap-2">
                            {selectedGame.platform.map((platform, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full"
                              >
                                {getPlatformIcon(platform)}
                                <span className="text-xs">{platform}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <p className="text-gray-300">{selectedGame.description}</p>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div className="space-y-1">
                            <div className="text-xs text-gray-500">PLAYERS</div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-red-500" />
                              <span>{selectedGame.playerCount}</span>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-xs text-gray-500">PLAY TIME</div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-red-500" />
                              <span>{selectedGame.playTime}+ hours</span>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-xs text-gray-500">DEVELOPER</div>
                            <div>{selectedGame.developer}</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-xs text-gray-500">PUBLISHER</div>
                            <div>{selectedGame.publisher}</div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedGame.genre.map((genre, index) => (
                            <span key={index} className="px-3 py-1 bg-red-500/10 text-red-500 text-sm rounded-full">
                              {genre}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-6">
                      <Button
                        className="flex-1 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800"
                        asChild
                      >
                        <Link href={selectedGame.link || "#"} target="_blank" rel="noopener noreferrer">
                          <Play className="h-4 w-4 mr-2" />
                          Play Game
                        </Link>
                      </Button>
                      <Button variant="outline" className="border-red-500/20">
                        <Heart className="h-4 w-4 mr-2" />
                        Favorite
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="media" className="space-y-6 pr-2">
                    <motion.div
                      className="relative h-[400px] rounded-lg overflow-hidden"
                      variants={glowVariants}
                      initial="inactive"
                      animate="active"
                      whileHover="hover"
                    >
                      <Image
                        src={selectedGame.screenshots[currentScreenshotIndex] || "/placeholder.svg"}
                        alt={`${selectedGame.title} screenshot ${currentScreenshotIndex + 1}`}
                        fill
                        className="object-cover"
                      />

                      <Button
                        variant="outline"
                        size="icon"
                        onClick={prevScreenshot}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 border-red-500/20 hover:bg-red-500/20 rounded-full"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>

                      <Button
                        variant="outline"
                        size="icon"
                        onClick={nextScreenshot}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 border-red-500/20 hover:bg-red-500/20 rounded-full"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedGame.screenshots.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentScreenshotIndex(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                              currentScreenshotIndex === index ? "bg-red-500 w-6" : "bg-red-500/30"
                            }`}
                            aria-label={`Go to screenshot ${index + 1}`}
                          />
                        ))}
                      </div>
                    </motion.div>

                    {selectedGame.videoUrl && (
                      <div className="mt-6">
                        <h4 className="text-lg font-medium mb-2">Gameplay Video</h4>
                        <div className="relative h-[250px] rounded-lg overflow-hidden bg-black/50 flex items-center justify-center">
                          <Play className="h-12 w-12 text-red-500" />
                          <span className="ml-2">Video preview not available in this demo</span>
                        </div>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="details" className="space-y-6 pr-2">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-medium mb-4">Game Details</h4>
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Developer</span>
                            <span>{selectedGame.developer}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Publisher</span>
                            <span>{selectedGame.publisher}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Release Date</span>
                            <span>{selectedGame.releaseDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Platforms</span>
                            <span>{selectedGame.platform.join(", ")}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Genres</span>
                            <span>{selectedGame.genre.join(", ")}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Player Count</span>
                            <span>{selectedGame.playerCount}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Last Played</span>
                            <span>{selectedGame.lastPlayed}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium mb-4">My Stats</h4>
                        <div className="space-y-6">
                            <div>
                            <div className="flex justify-between mb-2">
                              <span className="text-gray-400">Play Time</span>
                              <span>{selectedGame.playTime}</span>
                            </div>
                            <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                              <div
                              className="h-full bg-red-500 rounded-full"
                              style={{ width: `${Math.min(100, parsePlayTime(String(selectedGame.playTime) || "0") / 10)}%` }}
                              />
                            </div>
                            </div>

                          <div>
                            <div className="flex justify-between mb-2">
                              <span className="text-gray-400">Completion</span>
                              <span>65%</span>
                            </div>
                            <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                              <div className="h-full bg-red-500 rounded-full" style={{ width: "65%" }} />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between mb-2">
                              <span className="text-gray-400">Achievements</span>
                              <span>24/40</span>
                            </div>
                            <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                              <div className="h-full bg-red-500 rounded-full" style={{ width: "60%" }} />
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 flex gap-2">
                          <Button variant="outline" className="flex-1 border-red-500/20">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                          <Button variant="outline" className="flex-1 border-red-500/20">
                            <Bookmark className="h-4 w-4 mr-2" />
                            Add to List
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={robloxDialogOpen} onOpenChange={setRobloxDialogOpen}>
        <DialogContent className="sm:max-w-[900px] max-h-[90vh] bg-black/95 border-red-500/20 p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-0 sticky top-0 bg-black/95 z-10 border-b border-red-500/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-red-500/10 p-2 rounded-lg">
                  <Gamepad2 className="h-6 w-6 text-red-500" />
                </div>
                <DialogTitle className="text-2xl font-bold">My Favorite Roblox Games</DialogTitle>
              </div>
              <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
            </div>
            <DialogDescription className="text-gray-400 mt-2 px-1">
              Explore my most played and favorite Roblox experiences
            </DialogDescription>
          </DialogHeader>

          <div className="p-6 overflow-y-auto" style={{ maxHeight: "calc(90vh - 120px)" }}>
            {selectedRobloxGame ? (
              <div className="space-y-6">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white mb-2"
                  onClick={() => setSelectedRobloxGame(null)}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Back to games
                </Button>

                <Tabs defaultValue="info">
                  <TabsList className="grid grid-cols-3 mb-6 bg-black/50 border border-red-500/20 p-1 rounded-lg">
                    <TabsTrigger
                      value="info"
                      className="data-[state=active]:bg-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-red-500/20"
                    >
                      Info
                    </TabsTrigger>
                    <TabsTrigger
                      value="media"
                      className="data-[state=active]:bg-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-red-500/20"
                    >
                      Media
                    </TabsTrigger>
                    <TabsTrigger
                      value="stats"
                      className="data-[state=active]:bg-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-red-500/20"
                    >
                      Stats
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="info" className="space-y-6 pr-2">
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        className="relative h-[250px] rounded-lg overflow-hidden"
                        variants={glowVariants}
                        initial="inactive"
                        animate="active"
                        whileHover="hover"
                      >
                        <Image
                          src={selectedRobloxGame.image || "/placeholder.svg"}
                          alt={selectedRobloxGame.title}
                          fill
                          className="object-cover"
                        />
                        {selectedRobloxGame.favorite && (
                          <div className="absolute top-3 right-3 bg-red-500/90 p-1.5 rounded-full">
                            <Star className="h-4 w-4 text-white" />
                          </div>
                        )}

                        <div className="absolute top-2 left-2 animate-pulse">
                          <Sparkles className="h-5 w-5 text-red-500" />
                        </div>

                        {selectedRobloxGame.rating >= 4.5 && (
                          <div className="absolute bottom-3 left-3 bg-yellow-500/90 p-1.5 rounded-full">
                            <Crown className="h-4 w-4 text-white" />
                          </div>
                        )}
                      </motion.div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>{renderStarRating(selectedRobloxGame.rating)}</div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                              <Gamepad2 className="h-4 w-4" />
                              <span className="text-xs">Roblox</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-300">{selectedRobloxGame.description}</p>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div className="space-y-1">
                            <div className="text-xs text-gray-500">VISITS</div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-red-500" />
                              <span>{selectedRobloxGame.visits}</span>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-xs text-gray-500">LIKES</div>
                            <div className="flex items-center gap-2">
                              <ThumbsUp className="h-4 w-4 text-red-500" />
                              <span>{selectedRobloxGame.likes}</span>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-xs text-gray-500">CREATED</div>
                            <div>{selectedRobloxGame.created}</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-xs text-gray-500">LAST PLAYED</div>
                            <div>{selectedRobloxGame.lastPlayed}</div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedRobloxGame.genre.map((genre, index) => (
                            <span key={index} className="px-3 py-1 bg-red-500/10 text-red-500 text-sm rounded-full">
                              {genre}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-6">
                      <Button
                        className="flex-1 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800"
                        asChild
                      >
                        <Link href={selectedRobloxGame.link} target="_blank" rel="noopener noreferrer">
                          <Play className="h-4 w-4 mr-2" />
                          Play Game
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className={`border-red-500/20 ${selectedRobloxGame.favorite ? "bg-red-500/10 text-red-500" : ""}`}
                        onClick={() => toggleFavorite(selectedRobloxGame.id)}
                      >
                        <Heart className={`h-4 w-4 mr-2 ${isFavorited(selectedRobloxGame.id) ? "fill-red-500" : ""}`} />
                        {isFavorited(selectedRobloxGame.id) ? "Favorited" : "Favorite"}
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="media" className="space-y-6 pr-2">
                    <motion.div
                      className="relative h-[400px] rounded-lg overflow-hidden"
                      variants={glowVariants}
                      initial="inactive"
                      animate="active"
                      whileHover="hover"
                    >
                      <Image
                        src={selectedRobloxGame.screenshots[currentScreenshotIndex] || "/placeholder.svg"}
                        alt={`${selectedRobloxGame.title} screenshot ${currentScreenshotIndex + 1}`}
                        fill
                        className="object-cover"
                      />

                      <Button
                        variant="outline"
                        size="icon"
                        onClick={prevScreenshot}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 border-red-500/20 hover:bg-red-500/20 rounded-full"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>

                      <Button
                        variant="outline"
                        size="icon"
                        onClick={nextScreenshot}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 border-red-500/20 hover:bg-red-500/20 rounded-full"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedRobloxGame.screenshots.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentScreenshotIndex(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                              currentScreenshotIndex === index ? "bg-red-500 w-6" : "bg-red-500/30"
                            }`}
                            aria-label={`Go to screenshot ${index + 1}`}
                          />
                        ))}
                      </div>
                    </motion.div>

                    {selectedRobloxGame.videoUrl && (
                      <div className="mt-6">
                        <h4 className="text-lg font-medium mb-2">Gameplay Video</h4>
                        <div className="relative h-[250px] rounded-lg overflow-hidden bg-black/50 flex items-center justify-center">
                          <Play className="h-12 w-12 text-red-500" />
                            <span className="ml-2">Video preview not available. YouTube connection refused.</span>
                        </div>
                      </div>
                    )}
                  </TabsContent>

                    <TabsContent value="stats" className="space-y-6 pr-2">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                      <h4 className="text-lg font-medium mb-4">Game Stats</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                        <span className="text-gray-400">Developer</span>
                        <span>{selectedRobloxGame.developer}</span>
                        </div>
                        <div className="flex justify-between">
                        <span className="text-gray-400">Created</span>
                        <span>{selectedRobloxGame.created}</span>
                        </div>
                        <div className="flex justify-between">
                        <span className="text-gray-400">Visits</span>
                        <span>{selectedRobloxGame.visits}</span>
                        </div>
                        <div className="flex justify-between">
                        <span className="text-gray-400">Likes</span>
                        <span>{selectedRobloxGame.likes}</span>
                        </div>
                        <div className="flex justify-between">
                        <span className="text-gray-400">Genres</span>
                        <span>{selectedRobloxGame.genre.join(", ")}</span>
                        </div>
                        <div className="flex justify-between">
                        <span className="text-gray-400">Player Count</span>
                        <span>{selectedRobloxGame.playerCount}</span>
                        </div>
                        <div className="flex justify-between">
                        <span className="text-gray-400">Last Played</span>
                        <span>{selectedRobloxGame.lastPlayed}</span>
                        </div>
                      </div>
                      </div>

                      <div>
                      <h4 className="text-lg font-medium mb-4">My Progress</h4>
                      <div className="space-y-6">
                        <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-400">Playtime</span>
                          <span>{selectedRobloxGame.playTime ?? "N/A"}</span>
                        </div>
                        <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${selectedRobloxGame.playTime ? (parseFloat(selectedRobloxGame.playTime) / 100) * 100 : 0}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-red-500 rounded-full"
                          />
                        </div>
                        </div>

                        <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-400">Badges Earned</span>
                          <span>{selectedRobloxGame.badgesEarned ?? "N/A"}</span>
                        </div>
                        <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${selectedRobloxGame.badgesEarned ? (Number(selectedRobloxGame.badgesEarned) / 100) * 100 : 0}%` }}
                          transition={{ duration: 1, delay: 0.4 }}
                          className="h-full bg-red-500 rounded-full"
                          />
                        </div>
                        </div>

                        <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-400">Game Rank</span>
                          <span>{selectedRobloxGame.gamelevel ?? "N/A"}</span>
                        </div>
                        <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${selectedRobloxGame.gamelevel ? (Number(selectedRobloxGame.gamelevel) / 100) * 100 : 0}%` }}
                          transition={{ duration: 1, delay: 0.6 }}
                          className="h-full bg-red-500 rounded-full"
                          />
                        </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-sm font-medium mb-2">Game Rating</h4>
                        <div className="flex items-center">
                        <div className="flex-1">
                          <Slider
                          defaultValue={[selectedRobloxGame.rating * 20]}
                          max={100}
                          step={1}
                          disabled
                          className="w-full"
                          />
                        </div>
                        <div className="ml-4 min-w-[60px] text-center">{selectedRobloxGame.rating}/5</div>
                        </div>
                      </div>
                      </div>
                    </div>
                    </TabsContent>
                </Tabs>
              </div>
            ) : (
              <>
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                  <div className="flex gap-2">
                    <Select value={robloxFilter} onValueChange={setRobloxFilter}>
                      <SelectTrigger className="w-[180px] bg-black/50 border-red-500/20">
                        <div className="flex items-center gap-2">
                          <Filter className="h-4 w-4" />
                          <SelectValue placeholder="Filter by" />
                        </div>
                      </SelectTrigger>
                      <SelectContent className="bg-black/90 border-red-500/20">
                        <SelectItem value="all">All Games</SelectItem>
                        <SelectItem value="favorite">Favorites</SelectItem>
                        {getUniqueRobloxGenres().map((genre) => (
                          <SelectItem key={genre} value={genre}>
                            {genre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select value={robloxSort} onValueChange={setRobloxSort}>
                      <SelectTrigger className="w-[180px] bg-black/50 border-red-500/20">
                        <div className="flex items-center gap-2">
                          {robloxSortDirection === "desc" ? (
                            <SortDesc className="h-4 w-4" />
                          ) : (
                            <SortAsc className="h-4 w-4" />
                          )}
                          <SelectValue placeholder="Sort by" />
                        </div>
                      </SelectTrigger>
                      <SelectContent className="bg-black/90 border-red-500/20">
                        <SelectItem value="lastPlayed">Last Played</SelectItem>
                        <SelectItem value="rating">Rating</SelectItem>
                        <SelectItem value="created">Release Date</SelectItem>
                        <SelectItem value="visits">Popularity</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setRobloxSortDirection((prev) => (prev === "desc" ? "asc" : "desc"))}
                    className="border-red-500/20 hover:bg-red-500/10"
                  >
                    {robloxSortDirection === "desc" ? (
                      <SortDesc className="h-4 w-4" />
                    ) : (
                      <SortAsc className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                {robloxFilter === "all" && (
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Crown className="h-5 w-5 text-yellow-500" />
                      Creation Favorites
                      <span className="text-xs bg-red-500/10 text-red-500 px-2 py-0.5 rounded-full ml-2">
                        Cannot be modified
                      </span>
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {robloxGames
                        .filter((game) => game.developer === "mays_024 & nia22_022")
                        .map((game) => (
                          <motion.div
                            key={game.id}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="cursor-pointer"
                            onClick={() => handleRobloxGameSelect(game)}
                          >
                            <motion.div
                              variants={glowVariants}
                              initial="inactive"
                              whileHover="hover"
                              className="h-full rounded-xl overflow-hidden"
                            >
                              <Card className="overflow-hidden bg-black/50 backdrop-blur-sm border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 h-full">
                                <div className="relative h-40 overflow-hidden">
                                  <Image
                                    src={game.image || "/placeholder.svg"}
                                    alt={game.title}
                                    fill
                                    className="object-cover"
                                  />
                                  <div className="absolute top-3 right-3 bg-yellow-500/90 p-1.5 rounded-full">
                                    <Crown className="h-4 w-4 text-white" />
                                  </div>
                                  <div className="absolute bottom-3 left-3">{renderStarRating(game.rating)}</div>
                                </div>
                                <CardContent className="p-4">
                                  <h4 className="font-bold mb-1 line-clamp-1">{game.title}</h4>
                                  <p className="text-gray-400 text-xs line-clamp-2 mb-2">{game.description}</p>
                                  <div className="flex flex-wrap gap-1 mb-2">
                                    {game.genre.slice(0, 2).map((genre, index) => (
                                      <span
                                        key={index}
                                        className="px-2 py-0.5 bg-yellow-500/10 text-yellow-500 text-xs rounded-full"
                                      >
                                        {genre}
                                      </span>
                                    ))}
                                  </div>
                                  <div className="flex justify-between text-xs text-gray-500">
                                    <div className="flex items-center gap-1">
                                      <Users className="h-3 w-3" />
                                      <span>{game.visits.split("+")[0]}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      <span>{game.lastPlayed}</span>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </motion.div>
                          </motion.div>
                        ))}
                    </div>
                  </div>
                )}

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${robloxFilter}-${robloxSort}-${robloxSortDirection}-${currentRobloxPage}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid md:grid-cols-3 gap-4">
                      {currentRobloxGames.map((game) => (
                        <motion.div
                          key={game.id}
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                          className="cursor-pointer"
                          onClick={() => handleRobloxGameSelect(game)}
                        >
                          <motion.div
                            variants={glowVariants}
                            initial="inactive"
                            whileHover="hover"
                            className="h-full rounded-xl overflow-hidden"
                          >
                            <Card className="overflow-hidden bg-black/50 backdrop-blur-sm border-red-500/10 hover:border-red-500/30 transition-all duration-300 h-full">
                              <div className="relative h-40 overflow-hidden">
                                <Image
                                  src={game.image || "/placeholder.svg"}
                                  alt={game.title}
                                  fill
                                  className="object-cover"
                                />
                                <div className="absolute top-3 right-3 flex gap-2">
                                  <div
                                    className={`p-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                                      isFavorited(game.id) ? "bg-red-500/90" : "bg-black/50 hover:bg-red-500/50"
                                    }`}
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      toggleFavorite(game.id, game.developer === "mays_024 & nia22_022")
                                    }}
                                  >
                                    <Heart
                                      className={`h-4 w-4 ${isFavorited(game.id) ? "text-white fill-white" : "text-white"}`}
                                    />
                                  </div>
                                </div>
                                <div className="absolute bottom-3 left-3">{renderStarRating(game.rating)}</div>
                                {game.rating >= 4.5 && (
                                  <div className="absolute top-3 left-3 animate-pulse">
                                    <Sparkles className="h-4 w-4 text-yellow-500" />
                                  </div>
                                )}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-red-500/10 to-transparent" />
                              </div>
                              <CardContent className="p-4">
                                <h4 className="font-bold mb-1 line-clamp-1">{game.title}</h4>
                                <p className="text-gray-400 text-xs line-clamp-2 mb-2">{game.description}</p>
                                <div className="flex flex-wrap gap-1 mb-2">
                                  {game.genre.slice(0, 2).map((genre, index) => (
                                    <span
                                      key={index}
                                      className="px-2 py-0.5 bg-red-500/10 text-red-500 text-xs rounded-full"
                                    >
                                      {genre}
                                    </span>
                                  ))}
                                  {game.genre.length > 2 && (
                                    <span className="px-2 py-0.5 bg-red-500/10 text-red-500 text-xs rounded-full">
                                      +{game.genre.length - 2}
                                    </span>
                                  )}
                                </div>
                                <div className="flex justify-between text-xs text-gray-500">
                                  <div className="flex items-center gap-1">
                                    <Users className="h-3 w-3" />
                                    <span>{game.visits.split("+")[0]}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    <span>{game.lastPlayed}</span>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex justify-center items-center gap-4 mt-6">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevRobloxPage}
                      className="border-red-500/20 hover:bg-red-500/10"
                      disabled={totalRobloxPages <= 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                  </motion.div>

                  <span className="text-sm">
                    Page {currentRobloxPage + 1} of {totalRobloxPages}
                  </span>

                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextRobloxPage}
                      className="border-red-500/20 hover:bg-red-500/10"
                      disabled={totalRobloxPages <= 1}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

