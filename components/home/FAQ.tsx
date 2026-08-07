import Container from "@/components/layout/Container";

const faqs = [
  {
    question: "¿La cotización tiene algún costo?",
    answer:
      "No. Todas las cotizaciones realizadas en Compara Envíos son completamente gratuitas.",
  },
  {
    question: "¿Cómo obtengo tarifas preferenciales?",
    answer:
      "Gracias a nuestros convenios con diferentes transportadoras podemos ofrecer tarifas especiales en muchos envíos.",
  },
  {
    question: "¿Puedo solicitar recogida en mi dirección?",
    answer:
      "Sí. Dependiendo del servicio seleccionado podrás solicitar la recogida en tu casa, oficina o negocio.",
  },
  {
    question: "¿Realizan envíos internacionales?",
    answer:
      "Sí. También podrás cotizar documentos y paquetes hacia diferentes países.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-24">
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            PREGUNTAS FRECUENTES
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Resolvemos tus dudas
          </h2>

        </div>

        <div className="mx-auto max-w-4xl space-y-5">

          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-8"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {faq.question}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}