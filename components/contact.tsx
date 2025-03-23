"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
    alert("Thank you for your message! I'll get back to you soon.")
  }

  return (
    <section id="contact" className="py-24 px-4 relative">
      
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-red-700/10 rounded-full blur-3xl" />

      <div className="container mx-auto">
        <motion.div
        
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-3 py-1 text-sm font-medium bg-red-500/10 text-red-500 rounded-full">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-400">Let's discuss your project and bring your ideas to life</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div variants={itemVariants}>
              <Card className="h-full bg-black/50 backdrop-blur-sm border-red-500/10">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription className="text-gray-400">
                    Feel free to reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="bg-gradient-to-br from-red-500 to-red-700 p-4 rounded-2xl text-white">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="text-gray-400">syva-team@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="bg-gradient-to-br from-red-500 to-red-700 p-4 rounded-2xl text-white">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Location</h3>
                      <p className="text-gray-400">Germany</p>
                    </div>
                  </div>

                  <div className="pt-8">
                    <h3 className="font-medium text-lg mb-4">Follow Me</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/tsx-awtns"
                        className="bg-black p-3 rounded-full border border-red-500/20 hover:border-red-500/50 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://discord.gg/bHX7YZSCdm"
                        className="bg-black p-3 rounded-full border border-red-500/20 hover:border-red-500/50 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            d="M19.85 4.54A19.8 19.8 0 0 0 15.4 3c-.2.37-.42.85-.58 1.23a18.3 18.3 0 0 0-5.63 0c-.16-.38-.38-.86-.58-1.23a19.8 19.8 0 0 0-4.45 1.54C1.2 9.6.58 14.5 1.14 19.26a19.9 19.9 0 0 0 6.02 3.03c.48-.64.9-1.32 1.24-2.03a12.2 12.2 0 0 1-1.93-.93c.16-.11.32-.22.47-.33a13.7 13.7 0 0 0 11.74 0c.16.11.31.22.47.33-.62.37-1.28.69-1.96.94.34.7.76 1.37 1.24 2.02a19.8 19.8 0 0 0 6.02-3.02c.61-5.15-.94-9.66-3.4-14.72ZM8.5 15.26c-1.2 0-2.15-.96-2.15-2.15 0-1.18.95-2.15 2.15-2.15s2.15.97 2.15 2.15c0 1.19-.95 2.15-2.15 2.15Zm7 0c-1.2 0-2.15-.96-2.15-2.15 0-1.18.95-2.15 2.15-2.15s2.15.97 2.15 2.15c0 1.19-.95 2.15-2.15 2.15Z"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UCUWqu3BENBHq-k1faVZYaQA"
                        className="bg-black p-3 rounded-full border border-red-500/20 hover:border-red-500/50 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full bg-black/50 backdrop-blur-sm border-red-500/10">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                  <CardDescription className="text-gray-400">I'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Syva"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-black/50 border-red-500/20 focus:border-red-500"
                          required
                          disabled
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Your Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="syva-team@gmail.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-black/50 border-red-500/20 focus:border-red-500"
                          required
                          disabled
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Project Inquiry"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-black/50 border-red-500/20 focus:border-red-500"
                        required
                        disabled
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="bg-black/50 border-red-500/20 focus:border-red-500 resize-none"
                        required
                        disabled
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={!formData.name || !formData.email || !formData.subject || !formData.message}
                      className="w-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white border-0 h-12 rounded-full"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

