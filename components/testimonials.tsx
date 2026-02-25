"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Martín",
    location: "Catamarca",
    business: "Revendedor",
    quote:
      "Hola buenas tardes, llegó la mercadería. Muy buena la calidad, gracias por la rapidez del envío.",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Débora",
    location: "San Luis",
    business: "Revendedor",
    quote:
      "Ayer retiré la encomienda por la terminal de San Luis. Llegó todo super rápido y en buen estado. Super confiable todo.",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Fabiana",
    location: "Pablo Nogues, Bs As",
    business: "Primera compra",
    quote:
      "Recibí mi pedido por el proveedor de confianza. Es mi primera compra, me encantaron las cortinas de muy buena calidad. Los recomiendo!",
    image: "/placeholder-user.jpg",
  },
];

export function Testimonials() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({
    threshold: 0.05,
  });

  return (
    <section id="clientes" className="px-6 lg:px-20 py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headingVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-foreground text-4xl md:text-5xl font-black mb-4 text-balance">
            Lo que dicen nuestros revendedores
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conoce las experiencias de emprendedores que ya trabajan con
            nosotros y crecemos juntos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className={`bg-card rounded-2xl p-6 shadow-lg transition-all duration-700 ${
                gridVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: gridVisible ? `${i * 150}ms` : "0ms" }}
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-primary/30 mb-4" />

              {/* Quote text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-secondary">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.business} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Text */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            gridVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="text-muted-foreground mb-4">
            ¿Querés trabajar con nosotros?
          </p>
          <a
            href="#registro"
            className="inline-block bg-primary text-primary-foreground font-bold px-8 py-3 rounded-xl hover:bg-primary/90 transition-all"
          >
            Contactar con un asesor
          </a>
        </div>
      </div>
    </section>
  );
}
