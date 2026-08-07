"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function NewNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-lg">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-600 text-xl text-white shadow-lg">
            📦
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-slate-900">
              Compara Envíos
            </h2>

            <p className="-mt-1 text-xs text-slate-500">
              Tarifas preferenciales
            </p>
          </div>
        </Link>

        {/* Desktop */}

        <nav className="hidden items-center gap-8 lg:flex">

          <Link href="/" className="font-medium text-slate-700 hover:text-green-600">
            Inicio
          </Link>

          <Link href="#servicios" className="font-medium text-slate-700 hover:text-green-600">
            Servicios
          </Link>

          <Link href="#como-funciona" className="font-medium text-slate-700 hover:text-green-600">
            ¿Cómo funciona?
          </Link>

          <a
  href="https://wa.me/573213518287?text=Hola,%20quiero%20cotizar%20un%20envío%20con%20Compara%20Envíos."
  target="_blank"
  rel="noopener noreferrer"
  className="font-medium text-slate-700 hover:text-green-600"
>
  💬 WhatsApp
</a>

        </nav>

        {/* Desktop botón */}

        <div className="hidden lg:block">

          <Link
            href="/cotizar/nacional"
            className="rounded-2xl bg-green-600 px-7 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
          >
            💰 Buscar mi mejor precio
          </Link>

        </div>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl p-2 lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Menú móvil */}

      {open && (

        <div className="border-t bg-white lg:hidden">

          <div className="space-y-1 p-6">

            <Link
              href="/"
              className="block rounded-xl p-3 hover:bg-slate-100"
            >
              Inicio
            </Link>

            <Link
              href="#servicios"
              className="block rounded-xl p-3 hover:bg-slate-100"
            >
              Servicios
            </Link>

            <Link
              href="#como-funciona"
              className="block rounded-xl p-3 hover:bg-slate-100"
            >
              ¿Cómo funciona?
            </Link>

    <a
  href="https://wa.me/573213518287?text=Hola,%20quiero%20cotizar%20un%20envío%20con%20Compara%20Envíos."
  target="_blank"
  rel="noopener noreferrer"
  className="block rounded-xl p-3 hover:bg-slate-100"
>
  💬 WhatsApp
</a>

            <Link
              href="/cotizar/nacional"
              className="mt-4 block rounded-2xl bg-green-600 py-4 text-center font-bold text-white"
            >
              💰 Buscar mi mejor precio
            </Link>

          </div>

        </div>

      )}

    </header>
  );
}