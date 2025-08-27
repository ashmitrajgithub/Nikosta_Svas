"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Main Header - Optimized animation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100" : "bg-white"
        }`}
        data-aos="fade-down"
        data-aos-duration="600"
        data-aos-delay="200"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="https://res.cloudinary.com/duewgaxov/image/upload/v1756280747/svasthifylogo_xtinf5.jpg"
                alt="Svasthify Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation - Single group animation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Trainers", href: "#trainers" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2 rounded-lg">
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu - Simplified animation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
              <nav className="flex flex-col space-y-4 px-4">
                {[
                  { name: "Home", href: "#home" },
                  { name: "About", href: "#about" },
                  { name: "Services", href: "#services" },
                  { name: "Trainers", href: "#trainers" },
                  { name: "Contact", href: "#contact" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-emerald-600 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="bg-emerald-600 text-white font-semibold py-2 rounded-lg mt-4">Book Now</Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
