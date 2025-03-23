"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { Code, Database, Layout, Smartphone, Sparkles, Zap } from "lucide-react"

export default function Services() {
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

  const services = [
    {
      icon: <Layout className="w-10 h-10" />,
      title: "UI/UX Design",
      description:
        "Creating intuitive and beautiful user interfaces that enhance user experience and drive engagement.",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Web Development",
      description: "Building responsive, fast, and accessible websites using modern frameworks and best practices.",
      gradient: "from-primary to-purple-500",
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications that work seamlessly on iOS and Android devices.",
      gradient: "from-green-500 to-emerald-400",
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Backend Development",
      description:
        "Creating robust server-side applications, APIs, and database architectures to power your digital products.",
      gradient: "from-orange-500 to-amber-400",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Performance Optimization",
      description:
        "Improving the speed and efficiency of your websites and applications to provide a better user experience and higher conversion rates.",
      gradient: "from-red-500 to-pink-400",
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Digital Transformation",
      description:
        "Helping businesses leverage technology to improve processes, enhance customer experiences, and drive growth.",
      gradient: "from-violet-500 to-indigo-400",
    },
  ]

  return (
    <section id="services" className="py-24 px-4 relative">
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
            <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">Services</span>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
              What I Offer
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions to help your business thrive in the digital world
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-8">
                    <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
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

