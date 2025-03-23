"use client"

import { useEffect, useRef } from "react"

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const particlesArray: Particle[] = []
    const numberOfParticles = 100

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 3
    }

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      pulse: number
      pulseSpeed: number

      constructor() {
        this.x = Math.random() * (canvas?.width || 0)
        this.y = Math.random() * (canvas?.height || 0)
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = Math.random() > 0.5 ? "#ff0000" : "#ff3333"
        this.pulse = 0
        this.pulseSpeed = Math.random() * 0.1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        this.pulse += this.pulseSpeed
        if (this.pulse > Math.PI * 2) this.pulse = 0

        if (canvas) {
          if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
          if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
        }
      }

      draw() {
        if (!ctx) return
        const pulseFactor = Math.sin(this.pulse) * 0.5 + 0.5
        ctx.fillStyle = this.color
        ctx.globalAlpha = 0.3 + pulseFactor * 0.3
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * (1 + pulseFactor * 0.3), 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    function init() {
      particlesArray.length = 0
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
    }

    function drawBackground() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(0, 0, 0, 0.95)")
      gradient.addColorStop(1, "rgba(20, 0, 0, 0.95)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.strokeStyle = "rgba(255, 0, 0, 0.1)"
      ctx.lineWidth = 0.5

      const gridSize = 50
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    function connectParticles() {
      if (!ctx) return;
      const maxDistance = 150
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle = `rgba(255, 0, 0, ${opacity * 0.2})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      drawBackground()

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      connectParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", handleResize)
    handleResize()
    init()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}
