"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { products } from "@/lib/catalog-data"

const categories = ["Todos", "Sabanas", "Toallas", "Almohadas", "Acolchados", "Cubrecamas", "Manteles", "Cortinas"]

export function CatalogGrid() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 })

  const filtered = activeCategory === "Todos"
    ? products
    : products.filter((p) => p.name === activeCategory)

  return (
    <section ref={ref} className="py-16 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Filter tabs */}
        <div
          className="mb-12 flex flex-wrap items-center justify-center gap-2 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product, i) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              variants={product.variants}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No se encontraron productos.</p>
        )}
      </div>
    </section>
  )
}
