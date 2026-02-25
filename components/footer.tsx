import Link from "next/link"
import { MapPin, Phone, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <span className="text-xl font-extrabold text-foreground">Wiki</span>
          </Link>
          <p className="text-muted-foreground text-sm">
            Expertos en textiles para el hogar y hoteleria. Calidad premium con precios mayoristas.
          </p>
          <div className="flex gap-3">
            <a
              href="https://instagram.com/casawiki"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Seguinos en Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Categorias */}
        <div>
          <h4 className="text-foreground font-bold mb-6">Categorias</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link href="/catalogo" className="hover:text-primary transition-colors">Sabanas Campomayo</Link></li>
            <li><Link href="/catalogo" className="hover:text-primary transition-colors">Cortinas Blackout</Link></li>
            <li><Link href="/catalogo" className="hover:text-primary transition-colors">Cortinas de Baño</Link></li>
            <li><Link href="/catalogo" className="hover:text-primary transition-colors">Sets de Baño</Link></li>
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <h4 className="text-foreground font-bold mb-6">Empresa</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link href="/#beneficios" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>
            <li><Link href="/#registro" className="hover:text-primary transition-colors">Como Comprar</Link></li>
            <li><Link href="/catalogo" className="hover:text-primary transition-colors">Catalogo</Link></li>
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
              <a href="https://wa.me/5491124097141" className="hover:text-primary transition-colors">11 2409-7141</a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="h-5 w-5 text-primary shrink-0" />
              <a href="https://instagram.com/casawiki" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@casawiki</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>{"Wiki Blanqueria Mayorista. Todos los derechos reservados."}</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Defensa del Consumidor</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacidad</a>
        </div>
      </div>
    </footer>
  )
}
