"use client"

import { useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <div
        ref={glowRef}
        className="absolute inset-0 overflow-hidden"
        style={{
          background:
            "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(255, 0, 0, 0.15), transparent 40%)",
        }}
      />

      <motion.div
        className="space-y-6 max-w-4xl relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-6">
          <motion.div
            className="px-4 py-1 border border-red-500/20 rounded-full text-sm font-medium text-red-500 bg-red-500/5 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Full Stack Developer & UI/UX Designer
          </motion.div>
        </div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tighter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
            Crafting Digital
          </span>
          <br />
          Experiences That Matter
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          I build exceptional and accessible digital experiences for the web, mobile, and beyond.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white border-0 h-12 px-8 rounded-full"
            asChild
          >
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-red-500/20 bg-background/50 backdrop-blur-sm hover:bg-background/80 hover:border-red-500/40 h-12 px-8 rounded-full"
            asChild
          >
            <Link href="#contact">Let's Talk</Link>
          </Button>
        </motion.div>

        <motion.div
          className="absolute bottom-50 left-1/2 -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Link href="#about" className="text-gray-400 hover:text-red-500 transition-colors">
            <ArrowDown size={32} />
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute top-1/4 left-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-red-700/10 rounded-full blur-3xl" />
    </section>
  )
}

