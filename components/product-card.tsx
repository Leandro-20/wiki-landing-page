"use client"

import { useState } from "react"
import Image from "next/image"

interface ColorVariant {
  name: string
  color: string
  image: string
}

interface ProductCardProps {
  name: string
  description: string
  variants: ColorVariant[]
  index: number
  isVisible: boolean
}

export function ProductCard({ name, description, variants, index, isVisible }: ProductCardProps) {
  const [activeVariant, setActiveVariant] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const currentVariant = variants[activeVariant]

  return (
    <div
      className="group flex flex-col transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden rounded-xl bg-secondary">
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out"
          style={{ transform: isHovered ? "scale(1.08)" : "scale(1)" }}
        >
          <Image
            src={currentVariant.image}
            alt={`${name} - ${currentVariant.name}`}
            fill
            className={`object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Overlay on hover */}
        <div
          className="absolute inset-0 bg-foreground/0 transition-colors duration-300"
          style={{ backgroundColor: isHovered ? "rgba(0,0,0,0.05)" : "transparent" }}
        />

        {/* Color name badge */}
        <div
          className="absolute top-3 left-3 rounded-full bg-background/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-foreground transition-all duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0)" : "translateY(-8px)",
          }}
        >
          {currentVariant.name}
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="font-serif text-xl text-foreground transition-colors duration-300 group-hover:text-accent">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

        {/* Color swatches */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xs text-muted-foreground mr-1">Color:</span>
          {variants.map((variant, i) => (
            <button
              key={variant.name}
              onClick={() => {
                setActiveVariant(i)
                setImageLoaded(false)
              }}
              className="relative h-7 w-7 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer"
              style={{
                backgroundColor: variant.color,
                boxShadow: activeVariant === i
                  ? `0 0 0 2px var(--background), 0 0 0 4px var(--accent)`
                  : "0 0 0 1px rgba(0,0,0,0.1)",
                transform: activeVariant === i ? "scale(1.1)" : "scale(1)",
              }}
              aria-label={`Color ${variant.name}`}
            >
              <span className="sr-only">{variant.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
