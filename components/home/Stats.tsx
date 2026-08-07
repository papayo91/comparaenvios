import Container from "@/components/layout/Container";

const benefits = [
  {
    icon: "💰",
    title: "Ahorra en cada envío",
    description:
      "Buscamos tarifas preferenciales y descuentos disponibles para ayudarte a pagar menos.",
  },
  {
    icon: "🚚",
    title: "Comparamos por ti",
    description:
      "Revisamos varias transportadoras para encontrar la mejor alternativa para tu envío.",
  },
  {
    icon: "🤝",
    title: "Asesoría personalizada",
    description:
      "Analizamos cada solicitud antes de enviarte la mejor opción por WhatsApp.",
  },
  {
    icon: "✅",
    title: "Cotización gratuita",
    description:
      "Solicita tu cotización sin costo y sin compromiso.",
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            ¿POR QUÉ COMPARA ENVÍOS?
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Más que una cotización, buscamos ayudarte a ahorrar.
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Nuestro objetivo es encontrar una mejor alternativa para tu envío,
            comparando diferentes opciones antes de enviarte la cotización.
          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {benefits.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}