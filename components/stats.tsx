"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useCounter } from "@/hooks/use-counter"

const stats = [
  { value: 15, suffix: "+", label: "Anos en el mercado" },
  { value: 2000, suffix: "+", label: "Clientes activos", format: true },
  { value: 300, suffix: "+", label: "Productos disponibles" },
  { value: 24, suffix: "hs", label: "Respuesta garantizada" },
]

function StatItem({ value, suffix, label, format, isVisible, delay }: {
  value: number
  suffix: string
  label: string
  format?: boolean
  isVisible: boolean
  delay: number
}) {
  const count = useCounter(value, isVisible)
  const display = format
    ? count.toLocaleString("es-AR")
    : count.toString()

  return (
    <div
      className={`text-center transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="font-serif text-4xl text-accent md:text-5xl tabular-nums">
        {display}{suffix}
      </p>
      <p className="mt-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </p>
    </div>
  )
}

export function Stats() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })

  return (
    <section className="py-20 md:py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              format={stat.format}
              isVisible={isVisible}
              delay={i * 150}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
