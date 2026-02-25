"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { ProductCard } from "@/components/product-card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { products, categories } from "@/lib/catalog-data"

export function CatalogGrid() {
  const searchParams = useSearchParams()
  const categoriaParam = searchParams.get("categoria")
  const initialCategory = categoriaParam && categories.includes(categoriaParam) ? categoriaParam : "Todos"
  const [activeCategory, setActiveCategory] = useState(initialCategory)

  useEffect(() => {
    if (categoriaParam && categories.includes(categoriaParam)) {
      setActiveCategory(categoriaParam)
    }
  }, [categoriaParam])
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 })

  const filtered =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <section ref={ref} className="py-12 px-6 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Filter tabs */}
        <div
          className="mb-10 flex flex-wrap items-center gap-3 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-xl px-5 py-2.5 text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card text-muted-foreground border border-border hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="text-sm text-muted-foreground ml-auto">
            {filtered.length} {filtered.length === 1 ? "producto" : "productos"}
          </span>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <ProductCard
              key={product.id}
              name={product.name}
              brand={product.brand}
              line={product.line}
              price={product.price}
              specs={product.specs}
              images={product.images}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">
            No se encontraron productos en esta categoria.
          </p>
        )}
      </div>
    </section>
  )
}
