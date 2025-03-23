"use client"

import Link from "next/link"
import { Github, Youtube } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-20 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/50 pointer-events-none" />

      <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red-700/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="text-2xl font-bold inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
                syva<span className="font-light">.uk</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-md">
              A passionate Full Stack Developer and UI/UX Designer creating modern and responsive web applications that
              help businesses grow.
            </p>
            <div className="flex space-x-4 pt-4">
              <motion.a
                href="https://github.com/tsx-awtns"
                className="p-3 rounded-full bg-black hover:bg-red-500 hover:text-white border border-red-500/20 transition-colors flex items-center justify-center"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </motion.a>

              <motion.a
                href="https://discord.gg/bHX7YZSCdm"
                className="p-3 rounded-full bg-black border border-red-500/20 hover:border-red-500/50 transition-colors flex items-center justify-center"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M19.85 4.54A19.8 19.8 0 0 0 15.4 3c-.2.37-.42.85-.58 1.23a18.3 18.3 0 0 0-5.63 0c-.16-.38-.38-.86-.58-1.23a19.8 19.8 0 0 0-4.45 1.54C1.2 9.6.58 14.5 1.14 19.26a19.9 19.9 0 0 0 6.02 3.03c.48-.64.9-1.32 1.24-2.03a12.2 12.2 0 0 1-1.93-.93c.16-.11.32-.22.47-.33a13.7 13.7 0 0 0 11.74 0c.16.11.31.22.47.33-.62.37-1.28.69-1.96.94.34.7.76 1.37 1.24 2.02a19.8 19.8 0 0 0 6.02-3.02c.61-5.15-.94-9.66-3.4-14.72ZM8.5 15.26c-1.2 0-2.15-.96-2.15-2.15 0-1.18.95-2.15 2.15-2.15s2.15.97 2.15 2.15c0 1.19-.95 2.15-2.15 2.15Zm7 0c-1.2 0-2.15-.96-2.15-2.15 0-1.18.95-2.15 2.15-2.15s2.15.97 2.15 2.15c0 1.19-.95 2.15-2.15 2.15Z"
                  />
                </svg>
                <span className="sr-only">Join Discord</span>
              </motion.a>

              <motion.a
                href="#"
                className="p-3 rounded-full bg-black hover:bg-red-500 hover:text-white border border-red-500/20 transition-colors flex items-center justify-center"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </motion.a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-red-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#expertise" className="text-gray-400 hover:text-red-500 transition-colors">
                  Expertise
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-400 hover:text-red-500 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-red-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-red-500 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-red-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-red-500 transition-colors">
                  Service
                </Link>
              </li>
              <li>
                <Link href="#games" className="text-gray-400 hover:text-red-500 transition-colors">
                  Games
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Germany</li>
              <li>
                <a href="syva-team@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors">
                  syva-team@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-500/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {currentYear} Syva. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="https://www.syva.uk/policies/" className="text-sm text-gray-400 hover:text-red-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="https://www.syva.uk/policies/?inc=rules" className="text-sm text-gray-400 hover:text-red-500 transition-colors">
              Guild & Rules
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

