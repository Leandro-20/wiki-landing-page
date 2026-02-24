"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function CatalogHero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bedding.jpg"
          alt="Blanqueria Wiki"
          fill
          className="object-cover transition-transform duration-[1.5s] ease-out"
          style={{ transform: loaded ? "scale(1.05)" : "scale(1.15)" }}
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p
          className="text-sm font-medium uppercase tracking-[0.3em] text-background/70 mb-4 transition-all duration-700"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
          }}
        >
          Venta por mayor
        </p>
        <h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-background transition-all duration-700 delay-200"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
          }}
        >
          Nuestro Catalogo
        </h1>
        <p
          className="mt-4 text-background/80 text-lg max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-400"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
          }}
        >
          Explora nuestra linea completa de blanqueria. Selecciona el color que necesites para tu negocio.
        </p>
      </div>
    </section>
  )
}
