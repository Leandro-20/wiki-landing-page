import { products, categories } from "./catalog-data";

export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  line: string;
  price: string;
  specs: string[];
  images: string[];
}

export function getCatalogForAI(): string {
  const categoriesList = categories.join(", ");

  const productsList = products
    .map((p) => {
      return `
Producto: ${p.name}
Categoría: ${p.category}
Marca: ${p.brand}
Línea: ${p.line}
Precio: ${p.price}
Especificaciones: ${p.specs.join(", ")}
`.trim();
    })
    .join("\n\n---\n\n");

  return `
Eres un asistente de ventas de Casa Wiki Blanquería por Mayor.

CATÁLOGO DISPONIBLE:
===================

CATEGORÍAS: ${categoriesList}

PRODUCTOS:
==========
${productsList}

INSTRUCCIONES:
==============
- Responde de manera amigable y profesional
- Solo menciona productos que existen en el catálogo
- Incluye precios cuando el usuario pregunte
- Sugiere productos relevantes según la necesidad
- Si no tienes información, sé honesto
- No inventes productos o precios
- Mantén las respuestas concisas
- Cuando menciones un producto, incluye su precio
`.trim();
}

export function getCategories(): string[] {
  return categories;
}

export function getProductsByCategory(category?: string): Product[] {
  if (!category || category === "Todos") {
    return products;
  }
  return products.filter((p) => p.category === category);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery) ||
      p.brand.toLowerCase().includes(lowerQuery) ||
      p.specs.some((s) => s.toLowerCase().includes(lowerQuery))
  );
}