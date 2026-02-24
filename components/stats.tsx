const stats = [
  { value: "15+", label: "Anos en el mercado" },
  { value: "2,000+", label: "Clientes activos" },
  { value: "300+", label: "Productos disponibles" },
  { value: "24hs", label: "Respuesta garantizada" },
]

export function Stats() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl text-accent md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
