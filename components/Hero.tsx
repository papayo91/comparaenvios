import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500">

      {/* Fondo decorativo */}

      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl"></div>

      <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-20 px-6 py-20 lg:grid-cols-2">

        {/* Texto */}

        <div>

          <span className="inline-flex rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
            💰 Tarifas preferenciales • Más de 5 transportadoras
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-7xl">

            Deja de pagar la

            <span className="mt-2 block text-yellow-300">
              tarifa de mostrador.
            </span>

          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-blue-100">

            Comparamos tarifas preferenciales entre diferentes
            transportadoras para ayudarte a conseguir un mejor
            precio en cada envío.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/cotizar/nacional"
              className="rounded-2xl bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-green-700"
            >
              💰 Buscar mi mejor precio
            </Link>

            <a
              href="https://wa.me/TUNUMERO"
              className="rounded-2xl border border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-blue-700"
            >
              💬 Hablar por WhatsApp
            </a>

          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-white">

            <div>
              <div className="text-3xl font-bold">
                +5
              </div>

              <p className="text-blue-100">
                Transportadoras
              </p>

            </div>

            <div>

              <div className="text-3xl font-bold">
                100%
              </div>

              <p className="text-blue-100">
                Cotización gratuita
              </p>

            </div>

            <div>

              <div className="text-3xl font-bold">
                WhatsApp
              </div>

              <p className="text-blue-100">
                Atención rápida
              </p>

            </div>

          </div>

        </div>
                {/* Tarjeta de ahorro */}

        <div className="relative">

          <div className="rounded-[32px] bg-white p-8 shadow-2xl">

            <div className="text-center">

              <div className="text-6xl">
                📦
              </div>

              <h2 className="mt-5 text-3xl font-bold text-slate-900">
                Descubre cuánto puedes ahorrar
              </h2>

              <p className="mt-3 text-slate-500">
                Ejemplo de una cotización real.
              </p>

            </div>

            <div className="mt-10 rounded-2xl bg-slate-50 p-6">

              <div className="flex items-center justify-between border-b py-4">

                <span className="text-slate-600">
                  Ruta
                </span>

                <strong className="text-slate-900">
                  Bucaramanga → Bogotá
                </strong>

              </div>

              <div className="flex items-center justify-between border-b py-4">

                <span className="text-slate-600">
                  Precio de mostrador
                </span>

                <strong className="text-slate-900">
                  $18.900
                </strong>

              </div>

              <div className="flex items-center justify-between border-b py-4">

                <span className="text-slate-600">
                  Con Compara Envíos
                </span>

                <strong className="text-green-600">
                  Desde $15.400
                </strong>

              </div>

              <div className="flex items-center justify-between py-5">

                <span className="font-semibold text-slate-700">
                  Tu ahorro
                </span>

                <strong className="text-3xl text-green-600">
                  $3.500
                </strong>

              </div>

            </div>

            <div className="mt-8 rounded-2xl bg-green-50 p-5">

              <div className="flex items-center gap-3">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-2xl text-white">
                  ✓
                </div>

                <div>

                  <h3 className="font-bold text-slate-900">
                    Nosotros buscamos el mejor precio por ti
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    Revisamos descuentos y tarifas preferenciales entre nuestras
                    transportadoras aliadas antes de enviarte la cotización por WhatsApp.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}