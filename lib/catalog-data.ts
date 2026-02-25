export interface ColorVariant {
  name: string
  color: string
  image: string
}

export interface Product {
  id: string
  name: string
  category: string
  brand: string
  line: string
  price: string
  specs: string[]
  variants: ColorVariant[]
}

export const products: Product[] = [
  {
    id: "sabanas-queen",
    name: "Sabanas Queen",
    category: "Sabanas",
    brand: "Campomayo",
    line: "Linea Boutique",
    price: "$21.499",
    specs: [
      "Plana: 220 x 240 cm",
      "Ajustable: 160 x 200 x 30 cm",
      "Fundas: 50 x 75 cm",
      "100% Cotton Touch",
      "1200H",
      "Suaves y frescas",
    ],
    variants: [
      { name: "Blanco", color: "#F0EDE8", image: "/images/catalog/sabanas-queen-blanco.jpg" },
      { name: "Beige", color: "#D4C5A0", image: "/images/catalog/sabanas-queen-beige.jpg" },
      { name: "Gris Claro", color: "#B0ADA8", image: "/images/catalog/sabanas-queen-gris-claro.jpg" },
      { name: "Gris", color: "#5C5C5C", image: "/images/catalog/sabanas-queen-gris.jpg" },
    ],
  },
  {
    id: "sabanas-king",
    name: "Sabanas King",
    category: "Sabanas",
    brand: "Campomayo",
    line: "Linea Boutique",
    price: "$23.499",
    specs: [
      "Plana: 280 x 260 cm",
      "Ajustable: 200 x 200 x 35 cm",
      "Fundas: 50 x 100 cm",
      "100% Cotton Touch",
      "1200H",
      "Suaves y frescas",
    ],
    variants: [
      { name: "Gris Oscuro", color: "#5C5C5C", image: "/images/catalog/sabanas-king-gris-oscuro.jpg" },
      { name: "Gris Claro", color: "#B0ADA8", image: "/images/catalog/sabanas-king-gris-claro.jpg" },
      { name: "Beige", color: "#D4C5A0", image: "/images/catalog/sabanas-king-beige.jpg" },
    ],
  },
  {
    id: "cortinas-blackout",
    name: "Cortinas Blackout",
    category: "Cortinas",
    brand: "Campomayo",
    line: "",
    price: "$19.599",
    specs: [
      "2 paños de 140 x 220 cm c/u",
      "Bloquean hasta el 80% de la luz",
      "Conservan la temperatura ambiente",
      "Presillas y barral ocultos y reforzados",
    ],
    variants: [
      { name: "Gris", color: "#8C8C8C", image: "/images/catalog/blackout-gris.jpg" },
      { name: "Negro", color: "#2A2A2A", image: "/images/catalog/blackout-negro.jpg" },
      { name: "Crema", color: "#D4C5A9", image: "/images/catalog/blackout-crema.jpg" },
    ],
  },
  {
    id: "cortina-bano",
    name: "Cortina de Baño",
    category: "Baño",
    brand: "Campomayo",
    line: "Cortina Programada",
    price: "$9.900",
    specs: [
      "Programada (lista para usar)",
      "No necesita protector",
      "Antihongos / Antiadherente",
      "Ganchos argolla reforzados",
      "180 x 180 cm",
      "Dorado o Plateado",
    ],
    variants: [
      { name: "Confetti Plateado", color: "#C0C0C0", image: "/images/catalog/cortina-bano-confetti-plata.jpg" },
      { name: "Confetti Dorado", color: "#D4AF37", image: "/images/catalog/cortina-bano-confetti-oro.jpg" },
      { name: "Hexágonos Plateado", color: "#A8A8A8", image: "/images/catalog/cortina-bano-hexagonos-plata.jpg" },
      { name: "Hexágonos Dorado", color: "#C5A03F", image: "/images/catalog/cortina-bano-hexagonos-oro.jpg" },
      { name: "Enrejado Plateado", color: "#B0B0B0", image: "/images/catalog/cortina-bano-enrejado-plata.jpg" },
      { name: "Enrejado Dorado", color: "#BFA24A", image: "/images/catalog/cortina-bano-enrejado-oro.jpg" },
      { name: "Ramas Plateado", color: "#9E9E9E", image: "/images/catalog/cortina-bano-ramas-plata.jpg" },
      { name: "Ramas Dorado", color: "#B8963E", image: "/images/catalog/cortina-bano-ramas-oro.jpg" },
    ],
  },
  {
    id: "set-bano",
    name: "Set de Baño",
    category: "Baño",
    brand: "Campomayo",
    line: "Linea Lessia",
    price: "$9.999",
    specs: [
      "Cortina de baño 178 x 173 cm",
      "12 ganchos incluidos",
      "Alfombra shaggy (pelo extra large)",
      "Alfombra 40 x 60 cm",
    ],
    variants: [
      { name: "Beige", color: "#C4A882", image: "/images/catalog/set-bano-beige.jpg" },
      { name: "Azul", color: "#1B2D5A", image: "/images/catalog/set-bano-azul.jpg" },
      { name: "Gris Claro", color: "#A8A8A8", image: "/images/catalog/set-bano-gris-claro.jpg" },
      { name: "Gris", color: "#6B6B6B", image: "/images/catalog/set-bano-gris.jpg" },
      { name: "Negro", color: "#1A1A1A", image: "/images/catalog/set-bano-negro.jpg" },
    ],
  },
  {
    id: "set-toalla-teka",
    name: "Set de Toalla y Toallón Teka",
    category: "Toallas",
    brand: "Teka",
    line: "Ultra Suave",
    price: "$7.900",
    specs: [
      "600g",
      "Toallón 70 x 140 cm",
      "Toalla 46 x 96 cm",
    ],
    variants: [
      { name: "Gris", color: "#8C8C8C", image: "/images/catalog/set-toalla-teka.jpg" },
      { name: "Bordo", color: "#6B1C2A", image: "/images/catalog/set-toalla-teka-rojo.jpg" },
      { name: "Verde", color: "#1B6B5A", image: "/images/catalog/set-toalla-teka-verde.jpg" },
      { name: "Beige", color: "#C4A46C", image: "/images/catalog/set-toalla-teka-beige.jpg" },
      { name: "Negro", color: "#2A2A2A", image: "/images/catalog/set-toalla-teka-negro.jpg" },
      { name: "Lila", color: "#9B7CB8", image: "/images/catalog/set-toalla-teka-lila.jpg" },
    ],
  },
]

export const categories = ["Todos", "Sabanas", "Cortinas", "Baño", "Toallas"]
