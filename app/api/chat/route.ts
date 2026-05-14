import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCatalogForAI } from "@/lib/catalog";

interface ChatRequest {
  message: string;
  conversationId?: string;
}

interface OllamaMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

async function callOllama(messages: OllamaMessage[]): Promise<string> {
  const ollamaUrl = process.env.OLLAMA_URL || "http://localhost:11434";

  const response = await fetch(`${ollamaUrl}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "qwen2.5-coder:latest",
      messages: messages,
      stream: false,
    }),
  });

  if (!response.ok) {
    throw new Error(`Ollama error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.message.content;
}

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json();
    const { message, conversationId } = body;

    if (!message || message.trim() === "") {
      return NextResponse.json(
        { error: "El mensaje no puede estar vacío" },
        { status: 400 }
      );
    }

    let conversation;
    if (conversationId) {
      conversation = await prisma.conversation.findUnique({
        where: { id: conversationId },
        include: { messages: { orderBy: { createdAt: "asc" } } },
      });
    }

    if (!conversation) {
      conversation = await prisma.conversation.create({
        data: {},
        include: { messages: { orderBy: { createdAt: "asc" } } },
      });
    }

    await prisma.message.create({
      data: {
        role: "user",
        content: message,
        conversationId: conversation.id,
      },
    });

    const catalogContext = getCatalogForAI();

    const systemMessage: OllamaMessage = {
      role: "system",
      content: catalogContext,
    };

    const conversationMessages: OllamaMessage[] = conversation.messages
      .filter((m) => m.role !== "system")
      .map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      }));

    const allMessages: OllamaMessage[] = [
      systemMessage,
      ...conversationMessages,
      { role: "user", content: message },
    ];

    const aiResponse = await callOllama(allMessages);

    await prisma.message.create({
      data: {
        role: "assistant",
        content: aiResponse,
        conversationId: conversation.id,
      },
    });

    return NextResponse.json({
      conversationId: conversation.id,
      message: aiResponse,
    });
  } catch (error) {
    console.error("Chat error:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: "Error al procesar el mensaje", details: errorMessage },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const conversationId = searchParams.get("conversationId");

    if (!conversationId) {
      return NextResponse.json(
        { error: "Se requiere conversationId" },
        { status: 400 }
      );
    }

    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId },
      include: {
        messages: {
          orderBy: { createdAt: "asc" },
        },
      },
    });

    if (!conversation) {
      return NextResponse.json(
        { error: "Conversación no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(conversation);
  } catch (error) {
    console.error("Get conversation error:", error);
    return NextResponse.json(
      { error: "Error al obtener la conversación" },
      { status: 500 }
    );
  }
}