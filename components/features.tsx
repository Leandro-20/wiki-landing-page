"use client"

import { Truck, Factory, HeadphonesIcon } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Truck,
    title: "Envios a todo el país",
    description: "Despachamos en 24hs a cualquier punto del país a través de transportes líderes.",
  },
  {
    icon: Factory,
    title: "Precios de fabrica",
    description: "Somos distribuidores directos. Eliminamos intermediarios para darte el mejor margen de ganancia.",
  },
  {
    icon: HeadphonesIcon,
    title: "Atención personalizada",
    description: "Un asesor especializado te acompañará en cada pedido para optimizar tu stock.",
  },
]

export function Features() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="beneficios" className="bg-primary/5 px-6 lg:px-20 py-20">
      <div
        ref={headingRef}
        className={`text-center mb-16 max-w-2xl mx-auto transition-all duration-700 ${
          headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-foreground text-4xl font-extrabold tracking-tight mb-4">
          {"¿Por qué elegir Casa Wiki?"}
        </h2>
        <p className="text-muted-foreground text-lg">
          Llevamos 2 años siendo el socio estratégico de comercios textiles en todo el país.
        </p>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-xl transition-all duration-500 group text-center ${
              gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: gridVisible ? `${i * 150}ms` : "0ms" }}
          >
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <f.icon className="h-7 w-7" />
            </div>
            <h3 className="text-foreground text-xl font-bold mb-3">{f.title}</h3>
            <p className="text-muted-foreground">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
