"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function CatalogHero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="px-6 lg:px-20 py-8">
      <div className="relative min-h-[320px] flex flex-col gap-4 rounded-3xl items-start justify-center px-8 md:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bedding.jpg"
            alt="Blanqueria Wiki"
            fill
            className={`object-cover transition-transform duration-[1.5s] ease-out ${
              loaded ? "scale-100" : "scale-110"
            }`}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20" />
        </div>

        <div className="relative z-10 max-w-2xl">
          <span
            className={`bg-primary/20 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-block w-fit backdrop-blur-sm border border-primary/30 mb-4 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Venta por mayor
          </span>
          <h1
            className={`text-card text-4xl md:text-6xl font-black leading-tight tracking-tight transition-all duration-700 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Catálogo Mayorista
          </h1>
          <p
            className={`mt-4 text-card/80 text-lg max-w-xl leading-relaxed transition-all duration-700 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {'Explora nuestros articulos y elegí productos ganadores para tu negocio.'}
          </p>
        </div>
      </div>
    </section>
  )
}
