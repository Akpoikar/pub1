"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Phone, ChevronDown } from "lucide-react"
import { useEffect, useRef } from "react"
import Link from "next/link"

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // On first render, animate the hero content in (fade + rise)
    if (contentRef.current) {
      const node = contentRef.current
      node.style.opacity = "0"
      node.style.transform = "translateY(20px)"
      node.style.transition = "opacity 800ms ease, transform 800ms ease"
      requestAnimationFrame(() => {
        node.style.opacity = "1"
        node.style.transform = "translateY(0)"
      })
    }

    const handleScroll = () => {
      if (contentRef.current) {
        const scrolled = window.scrollY
        const opacity = Math.max(0, 1 - scrolled / 500)
        const translateY = scrolled * 0.5
        contentRef.current.style.opacity = opacity.toString()
        contentRef.current.style.transform = `translateY(${translateY}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden grain">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full object-cover bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90" />
      </div>

      <div ref={contentRef} className="relative z-10 text-center px-4 max-w-5xl mx-auto parallax">
        <div className="mb-8">
          <div className="inline-block mb-6">
            <div className="h-px w-16 bg-primary inline-block mr-4" />
            <span className="text-primary text-sm md:text-base font-medium tracking-[0.3em] uppercase">Est. 2020</span>
            <div className="h-px w-16 bg-primary inline-block ml-4" />
          </div>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-none tracking-tight text-shadow-gold">
            Yarify
          </h1>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-24 bg-primary/50" />
            <div className="w-2 h-2 bg-primary rotate-45" />
            <div className="h-px w-24 bg-primary/50" />
          </div>

          <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            Where luxury meets tradition in an atmosphere of refined elegance
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link href="#menu">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-10 py-6 font-medium tracking-wide glow-gold transition-all duration-300 hover:scale-105"
            >
              Explore Menu
            </Button>
          </Link>
          <Link href="/reservation">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base px-10 py-6 bg-transparent font-medium tracking-wide transition-all duration-300 hover:scale-105"
            >
              Reserve Your Table
            </Button>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/80 text-sm tracking-wider">
          <div className="flex items-center gap-3">
            <MapPin className="text-primary" size={18} />
            <span>Raisova 916/15, 709 00 Ostrava 9</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-primary/30" />
          <div className="flex items-center gap-3">
            <Phone className="text-primary" size={18} />
            <span>+420 777 212 491</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-primary">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  )
}
