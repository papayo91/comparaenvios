import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

import LocalQuoteForm from "@/components/local/LocalQuoteForm";

import {
  Bike,
  Clock3,
  MapPin,
  ShieldCheck,
  CircleCheck,
  Package,
} from "lucide-react";

const benefits = [
  {
    icon: Bike,
    title: "Recogemos donde estés",
    description:
      "Vamos hasta tu casa, oficina o negocio para recoger el paquete.",
  },
  {
    icon: Clock3,
    title: "Entrega rápida",
    description:
      "Mensajería ágil dentro de Bucaramanga y su área metropolitana.",
  },
  {
    icon: Package,
    title: "Todo tipo de envíos",
    description:
      "Documentos, paquetes, compras, medicamentos y diligencias.",
  },
  {
    icon: ShieldCheck,
    title: "Servicio confiable",
    description:
      "Conoce el valor antes de solicitar el servicio.",
  },
];

export default function LocalPage() {
  return (
    <>
      <Navbar />

      <main>

        {/* HERO */}

        <section className="bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white">

          <Container>

            <div className="grid items-center gap-16 py-24 lg:grid-cols-2">

              <div>

                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
                  🛵 Mensajería Local
                </span>

                <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-6xl">
                  Solicita un mensajero
                  en minutos.
                </h1>

                <p className="mt-8 text-xl leading-8 text-orange-100">
                  Recogemos documentos, paquetes, compras y realizamos
                  diligencias en Bucaramanga y su área metropolitana.
                </p>

              </div>

              <div className="rounded-3xl bg-white p-8 shadow-2xl">

                <LocalQuoteForm />

              </div>

            </div>

          </Container>

        </section>

        {/* BENEFICIOS */}

        <section className="bg-slate-50 py-24">

          <Container>

            <div className="mx-auto mb-16 max-w-3xl text-center">

              <h2 className="text-5xl font-bold text-slate-900">
                ¿Por qué elegir nuestro servicio?
              </h2>

              <p className="mt-6 text-xl text-slate-600">
                Diseñado para personas y empresas que necesitan
                entregas rápidas y seguras.
              </p>

            </div>

            <div className="grid gap-8 md:grid-cols-2">

              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl bg-white p-8 shadow-sm"
                  >
                    <Icon
                      size={42}
                      className="text-orange-600"
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

        {/* COMO FUNCIONA */}

        <section className="bg-white py-24">

          <Container>

            <div className="mx-auto mb-16 max-w-3xl text-center">

              <h2 className="text-5xl font-bold text-slate-900">
                ¿Cómo funciona?
              </h2>

            </div>

            <div className="grid gap-8 lg:grid-cols-4">

              <div className="text-center">

                <CircleCheck
                  className="mx-auto text-orange-600"
                  size={46}
                />

                <h3 className="mt-6 text-xl font-bold">
                  1. Cotiza
                </h3>

                <p className="mt-3 text-slate-600">
                  Ingresa las direcciones.
                </p>

              </div>

              <div className="text-center">

                <MapPin
                  className="mx-auto text-orange-600"
                  size={46}
                />

                <h3 className="mt-6 text-xl font-bold">
                  2. Recogemos
                </h3>

                <p className="mt-3 text-slate-600">
                  Vamos hasta tu ubicación.
                </p>

              </div>

              <div className="text-center">

                <Bike
                  className="mx-auto text-orange-600"
                  size={46}
                />

                <h3 className="mt-6 text-xl font-bold">
                  3. Transportamos
                </h3>

                <p className="mt-3 text-slate-600">
                  Un mensajero realiza el servicio.
                </p>

              </div>

              <div className="text-center">

                <Package
                  className="mx-auto text-orange-600"
                  size={46}
                />

                <h3 className="mt-6 text-xl font-bold">
                  4. Entregamos
                </h3>

                <p className="mt-3 text-slate-600">
                  Confirmamos la entrega.
                </p>

              </div>

            </div>

          </Container>

        </section>

      </main>

      <Footer />
    </>
  );
}