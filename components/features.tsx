import { Truck, ShieldCheck, Package, BadgePercent } from "lucide-react"

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
  return (
    <section id="nosotros" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-accent">
            Por que elegirnos
          </p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl text-balance">
            Tu socio en blanqueria
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-lg bg-card p-8 border border-border text-center transition-all hover:shadow-md"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
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
