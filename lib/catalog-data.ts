export interface Product {
  id: string
  name: string
  category: string
  brand: string
  line: string
  price: string
  specs: string[]
  images: string[]
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
    images: [
      "/images/catalog/sabanas-queen-gris.jpg",
      "/images/catalog/sabanas-queen-gris-claro.jpg",
      "/images/catalog/sabanas-queen-blanco.jpg",
      "/images/catalog/sabanas-queen-beige.jpg",
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
    images: [
      "/images/catalog/sabanas-king-gris-oscuro.jpg",
      "/images/catalog/sabanas-king-gris-claro.jpg",
      "/images/catalog/sabanas-king-beige.jpg",
    ],
  },
  {
    id: "cortinas-blackout",
    name: "Cortinas Blackout",
    category: "Cortinas",
    brand: "Campomayo",
    line: "Linea Textil",
    price: "$19.599",
    specs: [
      "2 paños de 140 x 220 cm c/u",
      "Bloquean hasta el 80% de la luz",
      "Conservan la temperatura ambiente",
      "Presillas y barral ocultos y reforzados",
    ],
    images: [
      "/images/catalog/blackout-gris-oscuro.jpg",
      "/images/catalog/blackout-gris-medio.jpg",
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
    images: [
      "/images/catalog/cortina-bano-confetti-plata.jpg",
      "/images/catalog/cortina-bano-hexagonos-plata.jpg",
      "/images/catalog/cortina-bano-enrejado-plata.jpg",
      "/images/catalog/cortina-bano-ramas-plata.jpg",
      "/images/catalog/cortina-bano-confetti-oro.jpg",
      "/images/catalog/cortina-bano-hexagonos-oro.jpg",
      "/images/catalog/cortina-bano-enrejado-oro.jpg",
      "/images/catalog/cortina-bano-ramas-oro.jpg",
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
    images: [
      "/images/catalog/set-bano-gris-oscuro.jpg",
      "/images/catalog/set-bano-negro.jpg",
      "/images/catalog/set-bano-beige.jpg",
      "/images/catalog/set-bano-gris-claro.jpg",
      "/images/catalog/set-bano-azul.jpg",
    ],
  },
  {
    id: "set-toalla-teka",
    name: "Set de Toalla y Tollon Teka",
    category: "Toallas",
    brand: "Teka",
    line: "Ultra Suave",
    price: "$7.900",
    specs: [
      "600g",
      "Tollon 70 x 140 cm",
      "Toalla 46 x 96 cm",
    ],
    images: [
      "/images/catalog/set-toalla-teka.jpg",
      "/images/catalog/set-toalla-teka-rojo.jpg",
      "/images/catalog/set-toalla-teka-verde.jpg",
      "/images/catalog/set-toalla-teka-beige.jpg",
      "/images/catalog/set-toalla-teka-negro.jpg",
      "/images/catalog/set-toalla-teka-lila.jpg",
    ],
  },
]

export const categories = ["Todos", "Sabanas", "Cortinas", "Baño", "Toallas"]
