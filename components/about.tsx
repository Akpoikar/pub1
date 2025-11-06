"use client"

import { Card } from "@/components/ui/card"
import { Beer, Music, Users, Award } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Beer,
      title: "Craft Selection",
      description: "50+ craft beers, whiskeys, and signature cocktails",
    },
    {
      icon: Music,
      title: "Live Entertainment",
      description: "Traditional Irish music every weekend",
    },
    {
      icon: Users,
      title: "Community Hub",
      description: "A welcoming space for friends and family",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Best Pub 2023 - City's Choice Awards",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="relative py-20 md:py-28 sm:pt-2 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/dark-luxury-pub-interior-with-leather-seating-and-.jpg" alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center mb-20`}
        >
          <div 
            className={`inline-block mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            style={{ transitionDelay: "50ms" }}
          >
            <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">Our Story</span>
          </div>
          <h2 
            className={`font-serif text-5xl md:text-7xl font-bold text-foreground mb-8 text-shadow-gold transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"}`}
            style={{ transitionDelay: "150ms" }}
          >
            Welcome to Excellence
          </h2>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div 
              className={`h-px bg-primary/50 transition-all duration-700 ${isVisible ? "w-24 opacity-100" : "w-0 opacity-0"}`}
              style={{ transitionDelay: "300ms" }}
            />
            <div 
              className={`w-2 h-2 bg-primary rotate-45 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: "400ms" }}
            />
            <div 
              className={`h-px bg-primary/50 transition-all duration-700 ${isVisible ? "w-24 opacity-100" : "w-0 opacity-0"}`}
              style={{ transitionDelay: "300ms" }}
            />
          </div>
          <p 
            className={`text-xl md:text-2xl text-muted-foreground leading-relaxed font-light transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            style={{ transitionDelay: "500ms" }}
          >
            Step into a world where tradition meets modern luxury. Our authentic Irish pub offers an unparalleled
            atmosphere of refined elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`p-8 text-center bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 hover:bg-card/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-none bg-primary/10 text-primary mb-6 border border-primary/30">
                <feature.icon size={36} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="overflow-hidden">
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img
                src="/cozy-pub-booth-with-leather-seating.jpg"
                alt="Seating"
                className="w-full h-auto"
              />
              <img
                src="/premium-whiskey-collection-on-wooden-shelves.jpg"
                alt="Whiskey"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="inline-block mb-4">
              <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">Since 2020</span>
            </div>
            <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">A Legacy of Excellence</h3>
            <div className="h-px w-20 bg-primary mb-6" />
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Founded in 2020, Yarify was born from a passion to bring authentic Irish pub culture elevated to
              new heights of luxury and sophistication.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Every detail, from our hand-carved wooden bar to our carefully curated whiskey collection, has been
              meticulously chosen to create an atmosphere of timeless elegance.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We pride ourselves on being more than just a pub—we're a destination where memories are crafted, stories
              are shared, and excellence is the standard.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
