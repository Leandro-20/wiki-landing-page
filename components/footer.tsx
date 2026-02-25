import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-casa-wiki.png"
              alt="Casa Wiki - Tu Blanquería Online"
              width={160}
              height={64}
              className="h-14 w-auto object-contain"
            />
          </Link>
          <p className="text-muted-foreground text-sm">
            Expertos en textiles para el hogar y hoteleria. Calidad premium con
            precios mayoristas.
          </p>
        </div>

        {/* Categorías */}
        <div>
          <h4 className="text-foreground font-bold mb-6">Categorías</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>
              <Link
                href="/catalogo?categoria=Sabanas"
                className="hover:text-primary transition-colors"
              >
                Sábanas
              </Link>
            </li>
            <li>
              <Link
                href="/catalogo?categoria=Cortinas"
                className="hover:text-primary transition-colors"
              >
                Cortinas
              </Link>
            </li>
            <li>
              <Link
                href="/catalogo?categoria=Baño"
                className="hover:text-primary transition-colors"
              >
                Sets de Baño
              </Link>
            </li>
            <li>
              <Link
                href="/catalogo?categoria=Toallas"
                className="hover:text-primary transition-colors"
              >
                Toallas y Toallones
              </Link>
            </li>
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <h4 className="text-foreground font-bold mb-6">Empresa</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>
              <Link
                href="/#quienes-somos"
                className="hover:text-primary transition-colors"
              >
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/catalogo"
                className="hover:text-primary transition-colors"
              >
                Catálogo
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-foreground font-bold mb-6">Contacto</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Buenos Aires, Argentina</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <a
                href="https://wa.me/5491124097141"
                className="hover:text-primary transition-colors"
              >
                11 2409-7141
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="h-5 w-5 text-primary shrink-0" />
              <a
                href="https://instagram.com/casawiki"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                @casawiki
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>
          {"Casa Wiki Blanquería Mayorista. Todos los derechos reservados."}
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">
            Defensa del Consumidor
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}
