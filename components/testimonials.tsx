"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"

type Testimonial = {
  id: number
  name: string
  role: string
  company: string
  image: string
  quote: string
}

export default function Testimonials() {
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

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Astral",
      role: "Watcher",
      company: "None",
      image: "/syva-dev/img/astral.png",
      quote:
        "Looks absolutely fantastic! Honestly, it's one of the most impressive things I've seen. The design, functionality, and attention to detail are unmatched. It's clear a lot of thought and effort went into making it not only aesthetically pleasing but also user-friendly and intuitive. I'm truly blown away by how well everything comes together – this is definitely something special!",
    },
    {
      id: 2,
      name: "Zombieslayerop",
      role: "Discord: Dragon Soul - Moderator",
      company: "None",
      image: "/syva-dev/img/zombieslayerop.png",
      quote:
        "Wow, this is incredible! The level of innovation and creativity is off the charts. The features are so well thought out, and the overall experience is seamless. It's clear that a lot of hard work went into this, and it really shows. I've seen similar projects before, but this one stands out by far. It's both impressive and inspiring to see something so well-executed!",
    },
    {
      id: 3,
      name: "Jazzy",
      role: "In Relationship with syva-dev (twinlight024)",
      company: "None",
      image: "/syva-dev/img/jazzy.png",
      quote:
        "You are worth more than words can express. Not only do you have incredible talent and brilliant intelligence, but you also have a heart of gold. Your creativity and dedication to everything you do are truly inspiring. You have this unique way of seeing things and turning them into something amazing. I admire your strength, your passion, and your ability to make the best of every situation. You are an invaluable treasure to me, and I'm so thankful to have you in my life.",
    },
  ]

  return (
    <section id="testimonials" className="py-24 px-4 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b  to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t to-transparent" />

      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-3 py-1 text-sm font-medium bg-red-500/10 text-red-500 rounded-full">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-400">Feedback from people I've worked with</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={itemVariants}>
                <Card className="h-full bg-black/50 backdrop-blur-sm border-red-500/10 hover:border-red-500/30 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-8 relative">
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-red-500/10" />
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-red-500/20">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-sm text-gray-400">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-400 italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

