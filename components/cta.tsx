"use client"

import { CheckCircle2 } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const perks = [
  "Compra minima inicial super accesible",
  "Material fotografico para tus redes",
  "Stock garantizado todo el año",
]

export function CTA() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation()
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation()

  return (
    <section
      id="registro"
      className="px-6 lg:px-20 py-20 mb-20"
    >
      <div className="relative bg-foreground text-card rounded-[2rem] overflow-hidden px-6 md:px-16 py-16 lg:py-20 max-w-7xl mx-auto">
        {/* Grid pattern background */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          {/* Left text */}
          <div
            ref={leftRef}
            className={`flex-1 text-center lg:text-left transition-all duration-700 ${
              leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-balance">
              Sumate a nuestra red de revendedores
            </h2>
            <p className="text-card/60 text-xl mb-8">
              Registrate para acceder a la lista de precios mayorista y promociones exclusivas.
            </p>
            <div className="space-y-4">
              {perks.map((perk, i) => (
                <div
                  key={perk}
                  className={`flex items-center gap-3 justify-center lg:justify-start transition-all duration-500 ${
                    leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                  }`}
                  style={{ transitionDelay: leftVisible ? `${300 + i * 120}ms` : "0ms" }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div
            ref={rightRef}
            className={`flex-1 w-full max-w-md transition-all duration-700 delay-200 ${
              rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <form className="bg-card p-8 rounded-2xl text-card-foreground shadow-2xl space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">Nombre y Apellido</label>
                <input
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                  placeholder="Tu nombre"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">{"Razon Social / Local"}</label>
                <input
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                  placeholder="Nombre de tu negocio"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">WhatsApp</label>
                <input
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                  placeholder="Ej: +54 9 11 2409 7141"
                  type="tel"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Provincia</label>
                <select
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                >
                  <option>Seleccionar provincia</option>
                  <option>Buenos Aires</option>
                  <option>CABA</option>
                  <option>Cordoba</option>
                  <option>Santa Fe</option>
                  <option>Mendoza</option>
                  <option>Otras</option>
                </select>
              </div>
              <button
                className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all mt-4 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                type="submit"
              >
                Solicitar Alta Mayorista
              </button>
              <p className="text-[10px] text-center text-muted-foreground mt-4 italic">
                Al registrarte, un asesor te contactara via WhatsApp para validar los datos de tu comercio.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
