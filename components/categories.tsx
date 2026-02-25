"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const categories = [
  {
    title: "Sábanas",
    description: "Línea Boutique 1200H",
    image: "/images/category-sheets.jpg",
    catalogCategory: "Sabanas",
  },
  {
    title: "Cortinas",
    description: "Blackout y más",
    image: "/images/catalog/cortinas-blanco.jpg",
    catalogCategory: "Cortinas",
  },
  {
    title: "Baño",
    description: "Cortinas y sets de baño",
    image: "/images/catalog/set-bano-blanco.jpg",
    catalogCategory: "Baño",
  },
  {
    title: "Toallería",
    description: "Toallas y toallones",
    image: "/images/catalog/toallas-blanco.jpg",
    catalogCategory: "Toallas",
  },
];

export function Categories() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({
    threshold: 0.05,
  });

  return (
    <section id="categorias" className="px-6 lg:px-20 py-16">
      <div
        ref={headingRef}
        className={`flex items-end justify-between mb-10 transition-all duration-700 ${
          headingVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-foreground text-3xl font-extrabold tracking-tight">
            Nuestros Productos
          </h2>
          <p className="text-muted-foreground">
            Variedad y stock permanente en todos nuestros productos
          </p>
        </div>
        <Link
          href="/catalogo"
          className="text-primary font-bold flex items-center gap-1 hover:underline hidden sm:flex"
        >
          Ver todas <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {categories.map((cat, i) => (
          <Link
            key={cat.title}
            href={`/catalogo?categoria=${encodeURIComponent(cat.catalogCategory)}`}
            className={`group relative overflow-hidden rounded-2xl aspect-[4/5] bg-secondary transition-all duration-500 ${
              gridVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: gridVisible ? `${i * 120}ms` : "0ms" }}
          >
            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-card text-xl font-bold">{cat.title}</h3>
              <p className="text-card/70 text-sm">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
