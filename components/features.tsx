"use client"

import { Truck, ShieldCheck, Package, BadgePercent } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: BadgePercent,
    title: "Precios Mayoristas",
    description:
      "Accede a los mejores precios del mercado comprando directamente por mayor. Descuentos especiales por volumen.",
  },
  {
    icon: ShieldCheck,
    title: "Calidad Garantizada",
    description:
      "Todos nuestros productos pasan por un riguroso control de calidad. Trabajamos solo con las mejores fabricas.",
  },
  {
    icon: Truck,
    title: "Envios a Todo el Pais",
    description:
      "Realizamos envios a todas las provincias. Logistica propia y de terceros para llegar a donde estes.",
  },
  {
    icon: Package,
    title: "Stock Permanente",
    description:
      "Mantenemos stock constante en todos nuestros productos para que puedas reabastecer tu negocio cuando lo necesites.",
  },
]

export function Features() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="nosotros" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={headingRef}
          className={`mb-16 text-center transition-all duration-700 ease-out ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-accent">
            Por que elegirnos
          </p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl text-balance">
            Tu socio en blanqueria
          </h2>
        </div>

        <div ref={gridRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group rounded-lg bg-card p-8 border border-border text-center transition-all duration-500 hover:shadow-md hover:-translate-y-1 ${
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: gridVisible ? `${i * 120}ms` : "0ms" }}
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 transition-all duration-500 group-hover:bg-accent/20 group-hover:scale-110">
                <f.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-lg text-card-foreground">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
