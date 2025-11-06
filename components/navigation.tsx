"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#gallery", label: "Gallery" },
    { href: "#events", label: "Events" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-xl shadow-2xl border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <Link
            href="/"
            className="flex items-center gap-3 text-2xl md:text-3xl font-serif font-bold text-primary tracking-wide hover:text-primary/80 transition-colors"
          >
            <Image
              src="/logo.png"
              alt="Yarify Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            Yarify
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium tracking-wider text-sm uppercase relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Link href="/reservation">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-medium tracking-wide glow-gold transition-all duration-300 hover:scale-105">
                Reserve
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-primary/20 bg-background/95 backdrop-blur-xl">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2 tracking-wider uppercase text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Link href="/reservation" className="w-full">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full py-6 font-medium tracking-wide">
                  Reserve Table
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
