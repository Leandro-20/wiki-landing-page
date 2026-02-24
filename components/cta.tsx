import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section id="contacto" className="bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-accent">
              Contacto
            </p>
            <h2 className="mt-3 font-serif text-4xl text-primary-foreground md:text-5xl text-balance">
              Empeza a vender calidad
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-primary-foreground/70 md:text-lg">
              Consulta por nuestras listas de precios, pedidos minimos y condiciones especiales para mayoristas. Te respondemos en menos de 24 horas.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15">
                  <Phone className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wide text-primary-foreground/50 uppercase">Telefono</p>
                  <p className="text-sm text-primary-foreground">+54 11 0000-0000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wide text-primary-foreground/50 uppercase">Email</p>
                  <p className="text-sm text-primary-foreground">ventas@wiki.com.ar</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15">
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wide text-primary-foreground/50 uppercase">Direccion</p>
                  <p className="text-sm text-primary-foreground">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-card p-8 md:p-10">
            <h3 className="font-serif text-2xl text-card-foreground">
              Solicita tu lista de precios
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Completa tus datos y te enviamos nuestra lista actualizada.
            </p>
            <form className="mt-6 flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Nombre completo
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Telefono / WhatsApp
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+54 11 ..."
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Mensaje (opcional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Contanos que productos necesitas..."
                  className="w-full resize-none rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="mt-2 w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base py-6 cursor-pointer"
              >
                Enviar consulta
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
