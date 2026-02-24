import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { CatalogHero } from "@/components/catalog-hero"
import { CatalogGrid } from "@/components/catalog-grid"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Catalogo - Wiki Blanqueria por Mayor",
  description: "Explora nuestro catalogo completo de blanqueria por mayor. Sabanas, toallas, almohadas, acolchados, cubrecamas, manteles y cortinas en todos los colores.",
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
