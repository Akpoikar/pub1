"use client"

import { useEffect, useRef, useState } from "react"

export function Gallery() {
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

  const images = [
    {
      src: "/traditional-irish-food-platter-with-stew-and-bread.jpg",
      alt: "Traditional Irish Food",
    },


    {
      src: "/luxury-pub-bar-with-brass-fixtures-and-premium-spi.jpg",
      alt: "Premium Bar",
    },
    {
      src: "/cozy-pub-booth-with-leather-seating.jpg",
      alt: "Private Booths",
    },
    {
      src: "/premium-whiskey-collection-on-wooden-shelves.jpg",
      alt: "Whiskey Collection",
    },
    {
      src: "/luxury-pub-live-music-performance.jpg",
      alt: "Live Entertainment",
    },
  ]

  return (
    <section id="gallery" ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block mb-6">
            <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">Experience</span>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-8 text-shadow-gold">Gallery</h2>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-24 bg-primary/50" />
            <div className="w-2 h-2 bg-primary rotate-45" />
            <div className="h-px w-24 bg-primary/50" />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            Immerse yourself in the ambiance of refined luxury
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group cursor-pointer aspect-[4/3] ${
                index === 0 ? "lg:col-span-2 lg:row-span-2 aspect-[16/9]" : ""
              } transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
              <div className="absolute inset-0 border-2 border-primary/0" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4">
                <div className="h-px w-12 bg-primary mb-3 opacity-0" />
                <p className="text-white text-xl font-serif font-bold tracking-wide">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
