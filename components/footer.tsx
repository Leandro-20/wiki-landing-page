export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <a href="#inicio" className="font-serif text-2xl text-foreground">
              Wiki
            </a>
            <p className="mt-1 text-sm text-muted-foreground">
              Blanqueria por mayor
            </p>
          </div>

          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              {["Inicio", "Productos", "Nosotros", "Contacto"].map((label) => (
                <li key={label}>
                  <a
                    href={`#${label.toLowerCase()}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            {'Wiki Blanqueria. Todos los derechos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
