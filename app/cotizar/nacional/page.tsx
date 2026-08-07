import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

import NationalQuoteForm from "@/components/quotes/NationalQuoteForm";

import {
  BadgeDollarSign,
  Package,
  Truck,
  ShieldCheck,
  Clock3,
  Map,
} from "lucide-react";

const benefits = [
  {
    icon: BadgeDollarSign,
    title: "Tarifas preferenciales",
    description:
      "Accede a descuentos que normalmente no encuentras en un punto de atención.",
  },
  {
    icon: Truck,
    title: "Varias transportadoras",
    description:
      "Comparamos diferentes opciones para ayudarte a elegir la mejor.",
  },
  {
    icon: Clock3,
    title: "Cotización inmediata",
    description:
      "Obtén el valor de tu envío en pocos segundos.",
  },
  {
    icon: Package,
    title: "Compra tu guía",
    description:
      "Cuando elijas la mejor opción podrás generar la guía rápidamente.",
  },
  {
    icon: Map,
    title: "Cobertura nacional",
    description:
      "Realiza envíos a cualquier ciudad de Colombia.",
  },
  {
    icon: ShieldCheck,
    title: "Compra con confianza",
    description:
      "Conoce el precio antes de realizar tu envío.",
  },
];

export default function NacionalPage() {
  return (
    <>
      <Navbar />

      <main>

        {/* HERO */}

        <section className="bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 text-white">

          <Container>

            <div className="grid items-center gap-16 py-24 lg:grid-cols-2">

              <div>

                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
                  📦 Envíos Nacionales
                </span>

                <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-6xl">
                  Compara tarifas y
                  paga menos por tus envíos.
                </h1>

                <p className="mt-8 text-xl leading-8 text-green-100">
                  Cotiza entre diferentes transportadoras y encuentra tarifas
                  preferenciales para enviar a cualquier ciudad del país.
                </p>

              </div>

              <div className="rounded-3xl bg-white p-8 shadow-2xl">

                <NationalQuoteForm />

              </div>

            </div>

          </Container>

        </section>

        {/* BENEFICIOS */}

        <section className="bg-slate-50 py-24">

          <Container>

            <div className="mx-auto mb-16 max-w-3xl text-center">

              <h2 className="text-5xl font-bold text-slate-900">
                ¿Por qué usar Compara Envíos?
              </h2>

              <p className="mt-6 text-xl text-slate-600">
                Mucho más que un cotizador. Una plataforma para ahorrar dinero
                en cada envío.
              </p>

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl bg-white p-8 shadow-sm"
                  >
                    <Icon
                      size={40}
                      className="text-green-600"
                    />

                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {item.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </Container>

        </section>

      </main>

      <Footer />

    </>
  );
}