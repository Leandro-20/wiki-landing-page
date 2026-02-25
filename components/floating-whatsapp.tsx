"use client";

import Image from "next/image";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5491124097141"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-transform duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <Image
        src="/whatsapp.gif"
        alt="WhatsApp"
        width={65}
        height={65}
        className="rounded-full"
        unoptimized
      />
    </a>
  );
}
