import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { CatalogHero } from "@/components/catalog-hero"
import { CatalogGrid } from "@/components/catalog-grid"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Catalogo - Wiki Blanqueria por Mayor",
  description:
    "Catalogo completo Campomayo: sabanas queen y king 1200H, cortinas blackout, cortinas de bano y sets de bano. Precios mayoristas.",
}

export default function CatalogoPage() {
  return (
    <main>
      <Navbar />
      <CatalogHero />
      <CatalogGrid />
      <Footer />
    </main>
  )
}
