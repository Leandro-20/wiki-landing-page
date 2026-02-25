"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Search } from "lucide-react"

const navLinks = [
  { label: "Sabanas", href: "/#categorias" },
  { label: "Cortinas", href: "/#categorias" },
  { label: "Baño", href: "/#categorias" },
  { label: "Beneficios", href: "/#beneficios" },
  { label: "Mayoristas", href: "/#registro" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm"
          : "bg-background/80 backdrop-blur-md border-border"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-20 py-4">
        {/* Logo + Desktop Nav */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-casa-wiki.png"
              alt="Casa Wiki - Tu Blanqueria Online"
              width={140}
              height={56}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop right side */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex h-10 items-stretch rounded-xl border border-border overflow-hidden">
            <div className="flex items-center justify-center px-3 bg-secondary text-muted-foreground">
              <Search className="h-4 w-4" />
            </div>
            <input
              className="w-40 bg-secondary text-sm text-foreground placeholder:text-muted-foreground border-none focus:outline-none focus:ring-0 px-3"
              placeholder="Buscar productos..."
            />
          </div>
          <Link
            href="/catalogo"
            className="flex items-center justify-center rounded-xl h-10 px-5 bg-primary text-primary-foreground text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
          >
            Ver Catalogo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden border-t border-border bg-background overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6">
          <ul className="flex flex-col gap-3 pt-4">
            {navLinks.map((link, i) => (
              <li
                key={link.label}
                className="transition-all duration-300"
                style={{
                  transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "translateX(0)" : "translateX(-12px)",
                }}
              >
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/catalogo"
            className="mt-4 flex items-center justify-center rounded-xl h-10 px-5 bg-primary text-primary-foreground text-sm font-bold w-full"
            onClick={() => setMobileOpen(false)}
          >
            Ver Catalogo
          </Link>
        </div>
      </div>
    </header>
  )
}
