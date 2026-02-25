"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useCounter } from "@/hooks/use-counter"

function AnimatedStat({ value, label, isVisible, delay }: {
  value: number
  label: string
  isVisible: boolean
  delay: number
}) {
  const count = useCounter(value, isVisible)

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="text-primary text-4xl font-black tabular-nums">{count}+</p>
      <p className="text-muted-foreground text-sm font-bold uppercase tracking-wider">{label}</p>
    </div>
  )
}

export function Stats() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation()
  const { ref: imgRef, isVisible: imgVisible } = useScrollAnimation()

  return (
    <section className="px-6 lg:px-20 py-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-center max-w-7xl mx-auto">
        {/* Text side */}
        <div
          ref={textRef}
          className={`flex-1 space-y-6 transition-all duration-700 ${
            textVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <h2 className="text-foreground text-4xl font-extrabold tracking-tight text-balance">
            Pasion por los textiles, compromiso con la calidad
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            En Wiki entendemos que un buen descanso comienza con la textura correcta. Nuestra mision es democratizar el acceso a productos de alta gama, trabajando con los mejores hilados y procesos que aseguran durabilidad incluso tras multiples lavados industriales.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Desde nuestro centro de distribucion, controlamos cada detalle del packaging y la logistica para que tus productos lleguen impecables a tus estantes.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <AnimatedStat value={500} label="Clientes activos" isVisible={textVisible} delay={300} />
            <AnimatedStat value={100000} label="Unidades vendidas" isVisible={textVisible} delay={450} />
          </div>
        </div>

        {/* Image side */}
        <div
          ref={imgRef}
          className={`flex-1 relative transition-all duration-700 delay-200 ${
            imgVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="bg-primary/20 absolute -inset-4 rounded-3xl rotate-3" />
          <div className="relative rounded-3xl shadow-2xl overflow-hidden w-full min-h-[320px] lg:min-h-[400px]">
            <Image
              src="/images/about-quality.jpg"
              alt="Control de calidad y empaquetado de blanqueria"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
