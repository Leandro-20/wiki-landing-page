"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProductCardProps {
  name: string
  brand: string
  line: string
  price: string
  specs: string[]
  images: string[]
  index: number
  isVisible: boolean
}

export function ProductCard({
  name,
  brand,
  line,
  price,
  specs,
  images,
  index,
  isVisible,
}: ProductCardProps) {
  const [activePhoto, setActivePhoto] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(true)
  const [showSpecs, setShowSpecs] = useState(false)

  const currentImage = images[activePhoto]

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    const prev = activePhoto === 0 ? images.length - 1 : activePhoto - 1
    setActivePhoto(prev)
    setImageLoaded(false)
    setTimeout(() => setImageLoaded(true), 50)
  }

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    const next = activePhoto === images.length - 1 ? 0 : activePhoto + 1
    setActivePhoto(next)
    setImageLoaded(false)
    setTimeout(() => setImageLoaded(true), 50)
  }

  return (
    <div
      className="group flex flex-col bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${index * 120}ms`,
      }}
    >
      {/* Image container */}
      <div
        className="relative aspect-[4/5] overflow-hidden bg-secondary cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false)
          setShowSpecs(false)
        }}
        onClick={() => setShowSpecs(!showSpecs)}
      >
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out"
          style={{ transform: isHovered ? "scale(1.06)" : "scale(1)" }}
        >
          <Image
            src={currentImage}
            alt={`${name} - foto ${activePhoto + 1}`}
            fill
            className={`object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Arrow navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-card-foreground shadow-md transition-all duration-300 hover:bg-card hover:scale-110 cursor-pointer"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? "translate(0, -50%)" : "translate(-8px, -50%)",
              }}
              aria-label="Foto anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-card-foreground shadow-md transition-all duration-300 hover:bg-card hover:scale-110 cursor-pointer"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? "translate(0, -50%)" : "translate(8px, -50%)",
              }}
              aria-label="Foto siguiente"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        {/* Photo counter badge top left */}
        {images.length > 1 && (
          <div
            className="absolute top-3 left-3 rounded-full bg-card/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-card-foreground transition-all duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translateY(0)" : "translateY(-8px)",
            }}
          >
            {activePhoto + 1} / {images.length}
          </div>
        )}

        {/* Price badge top right */}
        <div className="absolute top-3 right-3 rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-sm font-bold shadow-lg shadow-primary/20">
          {price}
        </div>

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation()
                  setActivePhoto(i)
                  setImageLoaded(false)
                  setTimeout(() => setImageLoaded(true), 50)
                }}
                className="h-2 rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  width: activePhoto === i ? "16px" : "8px",
                  backgroundColor: activePhoto === i ? "var(--primary)" : "rgba(255,255,255,0.6)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
                }}
                aria-label={`Foto ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Specs overlay on hover/click */}
        <div
          className="absolute inset-x-0 bottom-0 bg-foreground/90 backdrop-blur-sm p-4 transition-all duration-400 ease-out"
          style={{
            transform: showSpecs || isHovered ? "translateY(0)" : "translateY(100%)",
            opacity: showSpecs || isHovered ? 1 : 0,
          }}
        >
          <p className="text-xs font-bold text-card/60 uppercase tracking-wider mb-2">
            Especificaciones
          </p>
          <ul className="flex flex-col gap-1">
            {specs.map((spec) => (
              <li key={spec} className="text-xs text-card/90 flex items-start gap-1.5">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary" />
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-1.5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-lg font-bold text-card-foreground">{name}</h3>
        </div>

        <p className="text-sm text-muted-foreground">
          {brand}
          {line ? ` - ${line}` : ""}
        </p>

        {/* WhatsApp CTA */}
        <a
          href={`https://wa.me/5491124097141?text=Hola! Me interesa el producto: ${name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center rounded-xl h-10 bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  )
}
