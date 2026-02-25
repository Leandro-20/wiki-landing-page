"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Stats() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: imgRef, isVisible: imgVisible } = useScrollAnimation();

  return (
    <section id="quienes-somos" className="px-6 lg:px-20 py-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-center max-w-7xl mx-auto">
        {/* Text side */}
        <div
          ref={textRef}
          className={`flex-1 space-y-6 transition-all duration-700 ${
            textVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <h2 className="text-foreground text-4xl font-extrabold tracking-tight text-balance">
            ¿Quiénes somos?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Somos una Blanquería en crecimiento que busca trabajar con socios y
            crecer juntos. Ya proveemos a muchos revendedores y comercios de la
            zona y el interior del país.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Eleginos y crecé junto a nosotros.
          </p>
        </div>

        {/* Image side */}
        <div
          ref={imgRef}
          className={`flex-1 relative transition-all duration-700 delay-200 ${
            imgVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <div className="relative rounded-3xl shadow-2xl overflow-hidden w-full max-w-md mx-auto">
            <Image
              src="/images/logo-casa-wiki.png"
              alt="Casa Wiki - Tu Blanquería Online"
              width={400}
              height={160}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
