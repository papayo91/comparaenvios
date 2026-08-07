import Image from "next/image";
import Container from "@/components/layout/Container";

const partners = [
  {
    name: "Envía",
    logo: "/logos/envia.png",
  },
  {
    name: "Servientrega",
    logo: "/logos/servientrega.png",
  },
  {
    name: "Coordinadora",
    logo: "/logos/coordinadora.png",
  },
  {
    name: "Inter Rapidísimo",
    logo: "/logos/interrapidisimo.png",
  },
  {
    name: "DHL",
    logo: "/logos/dhl.png",
  },
];

export default function Partners() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            🚚 NUESTRAS TRANSPORTADORAS ALIADAS
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Comparamos entre las principales transportadoras
          </h2>

          <p className="mt-6 text-lg text-slate-600 md:text-xl">
            Buscamos descuentos y tarifas preferenciales para ayudarte a
            conseguir el mejor precio en cada envío.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-44 items-center justify-center rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
             <Image
  src={partner.logo}
  alt={partner.name}
  width={240}
  height={100}
  className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-110"
/>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-green-600 to-emerald-500 p-10 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold">
            💰 Miles de personas siguen pagando la tarifa de mostrador
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-green-100">
            Nuestro trabajo consiste en revisar descuentos, tarifas
            preferenciales y diferentes alternativas para ayudarte a conseguir
            un mejor precio antes de realizar tu envío.
          </p>
        </div>
      </Container>
    </section>
  );
}