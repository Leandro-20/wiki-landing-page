import type { Metadata } from "next";
import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { CatalogHero } from "@/components/catalog-hero";
import { CatalogGrid } from "@/components/catalog-grid";
import { Footer } from "@/components/footer";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Catálogo - Casa Wiki Blanquería por Mayor",
  description:
    "Catálogo completo Campomayo: sabanas queen y king 1200H, cortinas blackout, cortinas de baño y sets de baño. Precios mayoristas.",
};

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CatalogoPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const category =
    typeof resolvedSearchParams.categoria === "string"
      ? resolvedSearchParams.categoria
      : undefined;

  return (
    <main>
      <Navbar />
      <CatalogHero />
      <Suspense fallback={null}>
        <CatalogGrid initialCategory={category} />
      </Suspense>
      <Footer />
    </main>
  );
}
