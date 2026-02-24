import Link from "next/link"

const footerLinks = [
  { label: "Inicio", href: "/" },
  { label: "Catalogo", href: "/catalogo" },
  { label: "Productos", href: "/#productos" },
  { label: "Contacto", href: "/#contacto" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <Link href="/" className="font-serif text-2xl text-foreground">
              Wiki
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Blanqueria por mayor
            </p>
          </div>

          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            {"Wiki Blanqueria. Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  )
}
