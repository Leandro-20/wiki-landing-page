"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bedding.jpg"
          alt="Blanqueria premium de Wiki"
          fill
          className={`object-cover transition-transform duration-[2000ms] ease-out ${
            mounted ? "scale-100" : "scale-110"
          }`}
          priority
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p
          className={`mb-4 text-sm font-medium tracking-[0.3em] uppercase text-background/80 transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          Venta por mayor
        </p>
        <h1
          className={`font-serif text-5xl leading-tight text-background md:text-7xl lg:text-8xl text-balance transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          Calidad que se siente en cada detalle
        </h1>
        <p
          className={`mx-auto mt-6 max-w-xl text-base leading-relaxed text-background/80 md:text-lg transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          Proveemos la mejor blanqueria para tu negocio. Sabanas, toallas, almohadas y acolchados a precios mayoristas.
        </p>
        <div
          className={`mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <a href="#productos">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-base px-8 py-6 cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              Ver Productos
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </a>
          <a href="#contacto">
            <Button
              size="lg"
              variant="outline"
              className="border-background/30 text-background hover:bg-background/10 text-base px-8 py-6 cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              Contactanos
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-700 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1200ms" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase text-background/60">Scroll</span>
          <div className="h-10 w-[1px] bg-background/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-background/80 animate-scroll-line" />
          </div>
        </div>
      </div>
    </section>
  )
}
