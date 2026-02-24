import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bedding.jpg"
          alt="Blanqueria premium de Wiki"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm font-medium tracking-[0.3em] uppercase text-background/80">
          Venta por mayor
        </p>
        <h1 className="font-serif text-5xl leading-tight text-background md:text-7xl lg:text-8xl text-balance">
          Calidad que se siente en cada detalle
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-background/80 md:text-lg">
          Proveemos la mejor blanqueria para tu negocio. Sabanas, toallas, almohadas y acolchados a precios mayoristas.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="#productos">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-base px-8 py-6 cursor-pointer"
            >
              Ver Productos
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <a href="#contacto">
            <Button
              size="lg"
              variant="outline"
              className="border-background/30 text-background hover:bg-background/10 text-base px-8 py-6 cursor-pointer"
            >
              Contactanos
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
