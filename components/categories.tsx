import Image from "next/image"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    title: "Sabanas",
    description: "Juegos de sabanas en algodones premium, percal y microfibra.",
    image: "/images/category-sheets.jpg",
    count: "120+ productos",
  },
  {
    title: "Toallas",
    description: "Toallas de bano, mano y rostro en algodon de alta absorbencia.",
    image: "/images/category-towels.jpg",
    count: "80+ productos",
  },
  {
    title: "Almohadas",
    description: "Almohadas de fibra, viscoelastica y pluma en todos los tamanos.",
    image: "/images/category-pillows.jpg",
    count: "45+ productos",
  },
  {
    title: "Acolchados",
    description: "Acolchados y cubrecamas en variedad de telas y rellenos.",
    image: "/images/category-comforters.jpg",
    count: "60+ productos",
  },
]

export function Categories() {
  return (
    <section id="productos" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-accent">
            Nuestros Productos
          </p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl text-balance">
            Todo lo que tu negocio necesita
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Trabajamos con las mejores fabricas del pais para ofrecerte productos de calidad superior a precios competitivos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href="#contacto"
              className="group relative overflow-hidden rounded-lg bg-card border border-border transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl text-card-foreground">{cat.title}</h3>
                  <ArrowRight className="h-4 w-4 text-accent opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                </div>
                <p className="mt-1 text-xs font-medium tracking-wide text-accent uppercase">
                  {cat.count}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cat.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
