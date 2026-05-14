import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { ChatWidget } from "@/components/chat-widget";
import "./globals.css";

const _manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Casa Wiki - Venta Mayorista de Blanquería",
  description:
    "Venta mayorista de blanquería. Sabanas, cortinas, acolchados y mas de la mejor calidad a precios mayoristas. Buenos Aires, Argentina.",
  icons: {
    icon: "/icon.svg",
    apple: "/images/logo-casa-wiki.png",
  },
  openGraph: {
    title: "Casa Wiki - Venta Mayorista de Blanquería",
    description:
      "Sabanas, cortinas, acolchados y mas de la mejor calidad a precios mayoristas.",
    images: ["/images/logo-casa-wiki.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f7f8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${_manrope.variable} font-sans antialiased`}>
        {children}
        <FloatingWhatsApp />
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
