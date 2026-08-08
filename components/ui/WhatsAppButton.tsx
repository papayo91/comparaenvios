"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573213518287"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-green-600"
    >
      <span className="text-2xl">💬</span>

      <div>
        <p className="text-sm leading-none">
          ¿Necesitas ayuda?
        </p>

        <strong className="text-base">
          Escríbenos por WhatsApp
        </strong>
      </div>
    </a>
  );
}