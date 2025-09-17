"use client"

import { useEffect } from 'react'

export default function TechBackground() {
  useEffect(() => {
    // Создание плавающих частиц
    function createParticles() {
      const container = document.querySelector('.floating-elements')
      if (!container) return
      
      const particleCount = 20

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div')
        particle.className = 'tech-particle'
        particle.style.left = Math.random() * 100 + 'vw'
        particle.style.top = Math.random() * 100 + 'vh'
        particle.style.animationDelay = Math.random() * 6 + 's'
        particle.style.animationDuration = (4 + Math.random() * 4) + 's'
        container.appendChild(particle)
      }
    }

    // Создание линий схем
    function createCircuitLines() {
      const container = document.querySelector('.floating-elements')
      if (!container) return
      
      const lineCount = 5

      for (let i = 0; i < lineCount; i++) {
        const line = document.createElement('div')
        line.className = 'circuit-line'
        line.style.top = Math.random() * 100 + 'vh'
        line.style.width = (200 + Math.random() * 300) + 'px'
        line.style.animationDelay = Math.random() * 8 + 's'
        line.style.animationDuration = (6 + Math.random() * 4) + 's'
        container.appendChild(line)
      }
    }

    // Инициализация
    createParticles()
    createCircuitLines()

    // Интерактивность при движении мыши
    const handleMouseMove = (e: MouseEvent) => {
      const particles = document.querySelectorAll('.tech-particle')
      const mouseX = e.clientX / window.innerWidth
      const mouseY = e.clientY / window.innerHeight

      particles.forEach((particle, index) => {
        if (index % 3 === 0) { // Только каждая третья частица реагирует
          const moveX = (mouseX - 0.5) * 20
          const moveY = (mouseY - 0.5) * 20
          ;(particle as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`
        }
      })
    }

    document.addEventListener('mousemove', handleMouseMove)

    // Очистка при размонтировании компонента
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      const container = document.querySelector('.floating-elements')
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [])

  return (
    <>
      <div className="tech-background"></div>
      <div className="grid-overlay"></div>
      <div className="floating-elements"></div>
      <div className="accent-glow accent-glow-1"></div>
      <div className="accent-glow accent-glow-2"></div>
    </>
  )
}
