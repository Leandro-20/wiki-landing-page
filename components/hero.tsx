"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="px-6 lg:px-20 py-8">
      <div className="relative min-h-[520px] flex flex-col gap-6 rounded-3xl items-start justify-center px-8 md:px-16 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bedding.jpg"
            alt="Cama de lujo con sabanas blancas y acolchado suave"
            fill
            className={`object-cover transition-transform duration-[2s] ease-out ${
              mounted ? "scale-100" : "scale-110"
            }`}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-4 max-w-2xl">
          <span
            className={`bg-primary/20 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-block w-fit backdrop-blur-sm border border-primary/30 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Buenos Aires, Argentina
          </span>
          <h1
            className={`text-card text-4xl md:text-6xl font-black leading-tight tracking-tight text-balance transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Somos Tu Blanquería Online
          </h1>
          <p
            className={`text-card/80 text-lg md:text-xl font-medium leading-relaxed transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            {
              "Proveemos a revendedores y negocios que buscan las tres B (bueno, bonito y barato)."
            }
          </p>
          <div
            className={`flex flex-wrap gap-4 mt-4 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <Link
              href="/catalogo"
              className="flex min-w-[180px] items-center justify-center rounded-xl h-14 px-8 bg-primary text-primary-foreground text-base font-bold shadow-xl shadow-primary/30 hover:scale-105 transition-transform"
            >
              Ver Catálogo Mayorista
            </Link>
            <a
              href="https://wa.me/5491124097141"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-[180px] items-center justify-center rounded-xl h-14 px-8 bg-white/10 backdrop-blur-md border border-white/30 text-card text-base font-bold hover:bg-white/20 transition-all"
            >
              Hablar con un asesor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
