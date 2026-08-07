import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import {
  BadgeDollarSign,
  Package,
  Users,
  MapPinned,
  Globe,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: BadgeDollarSign,
    title: "Tarifas preferenciales",
    description:
      "Buscamos descuentos y mejores alternativas para ayudarte a pagar menos que la tarifa de mostrador.",
  },
  {
    icon: Users,
    title: "Asesoría personalizada",
    description:
      "Revisamos cada solicitud antes de enviarte la mejor opción por WhatsApp.",
  },
  {
    icon: Package,
    title: "Todo en un solo lugar",
    description:
      "Mensajería local, envíos nacionales e internacionales desde una sola plataforma.",
  },
  {
    icon: MapPinned,
    title: "Recogemos donde estés",
    description:
      "Solicita la recogida desde tu casa, oficina o negocio sin complicaciones.",
  },
  {
    icon: Globe,
    title: "Cobertura nacional e internacional",
    description:
      "Trabajamos con varias transportadoras para ofrecerte más alternativas.",
  },
  {
    icon: ShieldCheck,
    title: "Compra con confianza",
    description:
      "Conoce la mejor opción antes de enviar tu paquete y decide con tranquilidad.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            ¿POR QUÉ COMPARA ENVÍOS?
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Trabajamos para ayudarte a ahorrar.
          </h2>

          <p className="mt-6 text-xl leading-9 text-slate-600">
            No nos limitamos a mostrar una tarifa. Buscamos la mejor alternativa
            para que pagues menos y envíes con confianza.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <Card
                key={benefit.title}
                hover
                padding="lg"
                className="h-full"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                  <Icon
                    size={34}
                    className="text-green-600"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {benefit.description}
                </p>

              </Card>
            );
          })}

        </div>

      </Container>
    </section>
  );
}