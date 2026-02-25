import type { Metadata } from "next"
import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { CatalogHero } from "@/components/catalog-hero"
import { CatalogGrid } from "@/components/catalog-grid"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Catalogo - Casa Wiki Blanqueria por Mayor",
  description:
    "Catalogo completo Campomayo: sabanas queen y king 1200H, cortinas blackout, cortinas de baño y sets de baño. Precios mayoristas.",
}

export default function CatalogoPage() {
  return (
    <main>
      <Navbar />
      <CatalogHero />
      <Suspense fallback={null}>
        <CatalogGrid />
      </Suspense>
      <Footer />
    </main>
  )
}
