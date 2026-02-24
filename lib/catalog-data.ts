export interface ColorVariant {
  name: string
  color: string
  image: string
}

export interface Product {
  id: string
  name: string
  description: string
  variants: ColorVariant[]
}

export const products: Product[] = [
  {
    id: "sabanas",
    name: "Sabanas",
    description: "Juego de sabanas de algodon 100%. Disponibles en 1 plaza, 1 1/2 y 2 plazas. Tejido de alta densidad para mayor durabilidad.",
    variants: [
      { name: "Blanco", color: "#F5F5F0", image: "/images/catalog/sabanas-blanco.jpg" },
      { name: "Rojo", color: "#8B2232", image: "/images/catalog/sabanas-rojo.jpg" },
      { name: "Azul", color: "#1B3A5C", image: "/images/catalog/sabanas-azul.jpg" },
    ],
  },
  {
    id: "toallas",
    name: "Toallas",
    description: "Toallas de bano 100% algodon con gran capacidad de absorcion. Toallon, toalla de mano y toalla facial.",
    variants: [
      { name: "Blanco", color: "#F5F5F0", image: "/images/catalog/toallas-blanco.jpg" },
      { name: "Gris", color: "#8C8C8C", image: "/images/catalog/toallas-gris.jpg" },
      { name: "Crema", color: "#D4C5A9", image: "/images/catalog/toallas-crema.jpg" },
    ],
  },
  {
    id: "almohadas",
    name: "Almohadas",
    description: "Almohadas de fibra siliconada con funda de algodon. Firmeza media, ideales para todo tipo de descanso.",
    variants: [
      { name: "Blanco", color: "#F5F5F0", image: "/images/catalog/almohadas-blanco.jpg" },
      { name: "Gris", color: "#8C8C8C", image: "/images/catalog/almohadas-gris.jpg" },
    ],
  },
  {
    id: "acolchados",
    name: "Acolchados",
    description: "Acolchados de microfibra con relleno termico. Liviano y abrigado, perfecto para todas las estaciones.",
    variants: [
      { name: "Blanco", color: "#F5F5F0", image: "/images/catalog/acolchados-blanco.jpg" },
      { name: "Azul", color: "#1B3A5C", image: "/images/catalog/acolchados-azul.jpg" },
      { name: "Rojo", color: "#8B2232", image: "/images/catalog/acolchados-rojo.jpg" },
    ],
  },
  {
    id: "cubrecamas",
    name: "Cubrecamas",
    description: "Cubrecamas con textura labrada de algodon. Terminacion premium con costuras reforzadas.",
    variants: [
      { name: "Crema", color: "#D4C5A9", image: "/images/catalog/cubrecamas-crema.jpg" },
      { name: "Gris", color: "#8C8C8C", image: "/images/catalog/cubrecamas-gris.jpg" },
      { name: "Azul", color: "#1B3A5C", image: "/images/catalog/cubrecamas-azul.jpg" },
    ],
  },
  {
    id: "manteles",
    name: "Manteles",
    description: "Manteles de algodon para mesa rectangular y redonda. Resistentes al lavado frecuente.",
    variants: [
      { name: "Blanco", color: "#F5F5F0", image: "/images/catalog/manteles-blanco.jpg" },
      { name: "Rojo", color: "#8B2232", image: "/images/catalog/manteles-rojo.jpg" },
      { name: "Crema", color: "#D4C5A9", image: "/images/catalog/manteles-crema.jpg" },
    ],
  },
  {
    id: "cortinas",
    name: "Cortinas",
    description: "Cortinas de voile y blackout. Caida suave y elegante, con sistema de presillas o trabillas.",
    variants: [
      { name: "Blanco", color: "#F5F5F0", image: "/images/catalog/cortinas-blanco.jpg" },
      { name: "Gris", color: "#8C8C8C", image: "/images/catalog/cortinas-gris.jpg" },
      { name: "Azul", color: "#1B3A5C", image: "/images/catalog/cortinas-azul.jpg" },
    ],
  },
]
