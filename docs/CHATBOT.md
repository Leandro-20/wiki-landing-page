# Chatbot - Casa Wiki Blanquería por Mayor

## Descripción General

Widget de chat flotante con IA local para atención al cliente en la wiki de Casa Wiki Blanquería por Mayor.

## Stack Tecnológico

| Componente | Tecnología | Versión |
|------------|------------|---------|
| Framework | Next.js | 16.x |
| Base de datos | SQLite | - |
| ORM | Prisma | 5.x |
| IA Local | Ollama + qwen2.5-coder | latest |

## Arquitectura

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  ChatWidget     │────▶│  /api/chat      │────▶│  Ollama         │
│  (Frontend)     │     │  (Next.js API) │     │  qwen2.5-coder  │
└─────────────────┘     └────────┬────────┘     └─────────────────┘
                                 │
                                 ▼
                        ┌─────────────────┐
                        │  SQLite (Prisma)│
                        │  conversations/ │
                        │  messages       │
                        └─────────────────┘
```

## Estructura de Archivos

```
wiki-landing-page/
├── components/
│   └── chat-widget.tsx       # UI del widget flotante
├── app/
│   └── api/chat/
│       └── route.ts          # API REST (POST/GET)
├── lib/
│   ├── catalog.ts            # Catálogo formateado para IA
│   └── prisma.ts            # Cliente de base de datos
├── prisma/
│   ├── schema.prisma        # Modelos de datos
│   └── dev.db               # Base de datos SQLite
└── docs/
    └── CHATBOT.md           # Este documento
```

## Modelo de Datos (Prisma)

```prisma
model Conversation {
  id        String    @id @default(cuid())
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  messages  Message[]
}

model Message {
  id             String       @id @default(cuid())
  role           String       // "user" | "assistant"
  content        String
  createdAt      DateTime     @default(now())
  conversationId String
  conversation   Conversation @relation(...)
}
```

## API Endpoints

### POST /api/chat

Envía un mensaje y recibe respuesta de la IA.

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "¿Qué sábanas tienen?"}'
```

**Request:**
```json
{
  "message": "string",
  "conversationId": "string (opcional)"
}
```

**Response:**
```json
{
  "conversationId": "string",
  "message": "string"
}
```

### GET /api/chat?conversationId=xxx

Obtiene el historial de una conversación.

```bash
curl "http://localhost:3000/api/chat?conversationId=abc123"
```

**Response:**
```json
{
  "id": "string",
  "createdAt": "datetime",
  "updatedAt": "datetime",
  "messages": [
    { "id": "string", "role": "user", "content": "...", "createdAt": "datetime" },
    { "id": "string", "role": "assistant", "content": "...", "createdAt": "datetime" }
  ]
}
```

## Configuración

Variables de entorno en `.env`:

```env
DATABASE_URL="file:./prisma/dev.db"
OLLAMA_URL="http://localhost:11434"
```

## Instalación y Ejecución

### 1. Instalar dependencias

```bash
npm install prisma@5 @prisma/client@5
```

### 2. Inicializar Prisma

```bash
npx prisma init
# Editar schema.prisma
npx prisma generate
npx prisma db push
```

### 3. Verificar Ollama

```bash
ollama list
# Debe mostrar qwen2.5-coder:latest

# Si no está, descargar:
ollama pull qwen2.5-coder
```

### 4. Iniciar servidor

```bash
npm run dev
```

El chatbot estará disponible en `http://localhost:3000`.

## Consideraciones de Rendimiento

- **Primer mensaje**: ~50 segundos (carga del modelo en memoria)
- **Mensajes subsiguientes**: ~3-5 segundos
- Ollama debe estar ejecutándose: `ollama serve`

## Características

- ✅ Conversaciones anónimas (sin autenticación)
- ✅ Widget flotante en esquina inferior derecha
- ✅ Persistencia de historial
- ✅ Catálogo de productos como contexto para la IA
- ✅ UI responsiva con Tailwind CSS
- ✅ Indicador de carga animado

## Posibles Mejoras Futuras

- Cambiar a modelo más rápido (ej: llama3.2)
- Agregar autenticación
- Exportar conversaciones a PDF
- Métricas de uso
- Soporte para imágenes en el chat
- Historial por sesión del navegador (localStorage)