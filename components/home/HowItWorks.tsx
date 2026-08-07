import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import {
  ClipboardList,
  Search,
  BadgeDollarSign,
  MessageCircle,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Solicita tu cotización",
    description:
      "Completa el formulario con la información de tu envío.",
  },
  {
    icon: Search,
    title: "Buscamos la mejor opción",
    description:
      "Revisamos descuentos, tarifas preferenciales y diferentes transportadoras.",
  },
  {
    icon: BadgeDollarSign,
    title: "Comparamos por ti",
    description:
      "Analizamos precio, tiempo de entrega y la mejor alternativa disponible.",
  },
  {
    icon: MessageCircle,
    title: "Recibe tu cotización",
    description:
      "Te enviamos la mejor opción directamente a tu WhatsApp en pocos minutos.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            ASÍ CONSEGUIMOS MEJORES PRECIOS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Nosotros hacemos el trabajo por ti.
          </h2>

          <p className="mt-6 text-xl leading-9 text-slate-600">
            Nuestro objetivo no es darte una tarifa cualquiera.
            Queremos encontrar la mejor alternativa para tu envío.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Card
                key={step.title}
                hover
                padding="lg"
                className="relative text-center"
              >

                <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-lg font-bold text-white">
                  {index + 1}
                </div>

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <Icon
                    size={38}
                    className="text-green-600"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>

              </Card>
            );
          })}

        </div>

      </Container>
    </section>
  );
}