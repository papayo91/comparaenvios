"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-blue-700"
        >
          🚚
          <span>Compara Envíos</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 lg:flex">

          <Link href="/" className="font-medium hover:text-blue-600">
            Inicio
          </Link>

          <div className="relative">

            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 font-medium hover:text-blue-600"
            >
              Servicios
              <ChevronDown size={18} />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 mt-4 w-72 rounded-2xl border bg-white p-3 shadow-xl">

                <Link
                  href="/cotizar/local"
                  className="block rounded-xl p-3 hover:bg-slate-100"
                >
                  🛵 Mensajería Local
                </Link>

                <Link
                  href="/cotizar/nacional"
                  className="mt-2 block rounded-xl p-3 hover:bg-slate-100"
                >
                  📦 Envíos Nacionales
                </Link>

                <Link
                  href="/cotizar/internacional"
                  className="mt-2 block rounded-xl p-3 hover:bg-slate-100"
                >
                  🌍 Envíos Internacionales
                </Link>

              </div>
            )}

          </div>

          <Link href="/empresas" className="font-medium hover:text-blue-600">
            Empresas
          </Link>

          <Link href="/nosotros" className="font-medium hover:text-blue-600">
            Nosotros
          </Link>

          <Link href="/contacto" className="font-medium hover:text-blue-600">
            Contacto
          </Link>

        </nav>

        {/* Desktop buttons */}

        <div className="hidden items-center gap-3 lg:flex">

          <Link
            href="/login"
            className="rounded-xl border border-slate-300 px-5 py-3 font-semibold hover:bg-slate-100"
          >
            Ingresar
          </Link>

          <Link
            href="/cotizar/nacional"
            className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            Cotizar
          </Link>

        </div>

        {/* Mobile */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {mobileOpen && (

        <div className="border-t bg-white lg:hidden">

          <Link href="/" className="block p-4">
            Inicio
          </Link>

          <Link href="/cotizar/local" className="block p-4">
            🛵 Mensajería Local
          </Link>

          <Link href="/cotizar/nacional" className="block p-4">
            📦 Envíos Nacionales
          </Link>

          <Link href="/cotizar/internacional" className="block p-4">
            🌍 Envíos Internacionales
          </Link>

          <Link href="/empresas" className="block p-4">
            Empresas
          </Link>

          <Link href="/nosotros" className="block p-4">
            Nosotros
          </Link>

          <Link href="/contacto" className="block p-4">
            Contacto
          </Link>

          <div className="flex gap-3 p-4">

            <Link
              href="/login"
              className="flex-1 rounded-xl border py-3 text-center font-semibold"
            >
              Ingresar
            </Link>

            <Link
              href="/cotizar/nacional"
              className="flex-1 rounded-xl bg-green-600 py-3 text-center font-semibold text-white"
            >
              Cotizar
            </Link>

          </div>

        </div>

      )}
    </header>
  );
}