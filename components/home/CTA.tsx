import Link from "next/link";
import Container from "@/components/layout/Container";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-green-600 py-24 text-white">
      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
            COMIENZA HOY
          </span>

          <h2 className="mt-8 text-5xl font-extrabold leading-tight">
            Empieza a ahorrar en tus envíos
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-blue-100">
            Accede a tarifas preferenciales para envíos nacionales,
            internacionales y mensajería local desde una sola plataforma.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/cotizar/nacional"
              className="rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
            >
              Cotizar ahora
            </Link>

            <Link
              href="/contacto"
              className="rounded-xl border border-white px-8 py-4 text-lg font-semibold transition hover:bg-white hover:text-blue-700"
            >
              Hablar con un asesor
            </Link>

          </div>

        </div>

      </Container>
    </section>
  );
}