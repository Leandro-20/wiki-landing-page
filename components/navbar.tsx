"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Catalogo", href: "/catalogo" },
  { label: "Productos", href: "/#productos" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className={`font-serif text-3xl tracking-tight transition-colors duration-500 ${
            scrolled ? "text-foreground" : "text-background"
          }`}
        >
          Wiki
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-accent ${
                  scrolled ? "text-muted-foreground" : "text-background/80 hover:text-background"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/5491100000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95">
              <Phone className="h-4 w-4" />
              Consultar
            </Button>
          </a>
        </div>

        <button
          className={`md:hidden transition-colors duration-500 ${scrolled ? "text-foreground" : "text-background"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`md:hidden border-t border-border bg-background overflow-hidden transition-all duration-400 ease-in-out ${
          mobileOpen ? "max-h-80 opacity-100 px-6 pb-6" : "max-h-0 opacity-0 px-6"
        }`}
      >
        <ul className="flex flex-col gap-4 pt-4">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className="transition-all duration-300"
              style={{
                transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateX(0)" : "translateX(-12px)",
              }}
            >
              <Link
                href={link.href}
                className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground uppercase"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/5491100000000"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block"
        >
          <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 gap-2 cursor-pointer">
            <Phone className="h-4 w-4" />
            Consultar
          </Button>
        </a>
      </div>
    </header>
  )
}
