"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { Code, Globe, Lightbulb, Rocket } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-3 py-1 text-sm font-medium bg-red-500/10 text-red-500 rounded-full">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
              Passionate Developer & Designer
            </h2>
            <p className="text-xl text-gray-400">Transforming ideas into exceptional digital experiences</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-black shadow-2xl">
                <img
                  src="/syva-dev/img/profile.png"
                  alt="Profile"
                  width={600}
                  height={600}
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-700/20 rounded-full blur-xl" />

              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-red-500/20 rounded-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 border-4 border-red-700/20 rounded-2xl" />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Hello! I'm Syva.dev (twilight024)</h3>
                <p className="text-lg text-gray-400">
                  I'm a passionate web and software developer with almost 3 years of experience in building robust and
                  scalable applications. I'm 18 years old and started programming in 2021, having introduced myself to
                  coding at the age of 12.
                </p>

                <p className="text-lg text-gray-400">
                  I specialize in full-stack development, both backend and frontend, with a strong focus on modern
                  JavaScript frameworks and cloud technologies. My main tools are Java, HTML, CSS, JavaScript, and PHP,
                  but I'm proficient in many other programming languages.
                </p>

                <p className="text-lg text-gray-400">
                  When I'm not coding, you can find me contributing to open-source projects, mentoring junior
                  developers, or exploring the latest tech trends. I'm always excited to take on new challenges and push
                  the boundaries of what's possible in web and software development.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-black/50 backdrop-blur-sm border-red-500/10 hover:border-red-500/30 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="mb-4 bg-red-500/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                      <Code className="w-6 h-6 text-red-500" />
                    </div>
                    <h4 className="text-lg font-semibold mb-1">Development</h4>
                    <p className="text-gray-400 text-sm">
                      Building modern, responsive web applications and normal applications
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/50 backdrop-blur-sm border-red-500/10 hover:border-red-500/30 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="mb-4 bg-red-500/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                      <Globe className="w-6 h-6 text-red-500" />
                    </div>
                    <h4 className="text-lg font-semibold mb-1">UI / UX / Backend</h4>
                    <p className="text-gray-400 text-sm">Creating intuitive and beautiful interfaces</p>
                  </CardContent>
                </Card>

                <Card className="bg-black/50 backdrop-blur-sm border-red-500/10 hover:border-red-500/30 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="mb-4 bg-red-500/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                      <Lightbulb className="w-6 h-6 text-red-500" />
                    </div>
                    <h4 className="text-lg font-semibold mb-1">Strategy</h4>
                    <p className="text-gray-400 text-sm">Developing effective digital strategies</p>
                  </CardContent>
                </Card>

                <Card className="bg-black/50 backdrop-blur-sm border-red-500/10 hover:border-red-500/30 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="mb-4 bg-red-500/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                      <Rocket className="w-6 h-6 text-red-500" />
                    </div>
                    <h4 className="text-lg font-semibold mb-1">Performance</h4>
                    <p className="text-gray-400 text-sm">Optimizing for speed and efficiency</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

