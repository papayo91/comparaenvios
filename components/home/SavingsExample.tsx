import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Link from "next/link";

export default function SavingsExample() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-white py-24">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            EJEMPLO ILUSTRATIVO
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            ¿Cuánto podrías ahorrar?
          </h2>

          <p className="mt-6 text-xl leading-9 text-slate-600">
            Revisamos diferentes alternativas para ayudarte a conseguir una mejor
            opción que la tarifa de mostrador.
          </p>

        </div>

        <div className="mx-auto mt-16 max-w-2xl">

          <Card
            padding="lg"
            className="rounded-[32px] shadow-xl"
          >

            <div className="mb-8 rounded-2xl bg-green-50 p-5 text-center">

              <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
                Ejemplo de cotización
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Bucaramanga → Bogotá
              </h3>

              <p className="mt-1 text-slate-600">
                Paquete de 1 Kg
              </p>

            </div>

            <div className="space-y-5">

              <div className="flex items-center justify-between border-b pb-4">

                <span className="text-slate-600">
                  Tarifa de mostrador
                </span>

                <strong className="text-xl text-slate-900">
                  $18.900
                </strong>

              </div>

              <div className="flex items-center justify-between border-b pb-4">

                <span className="text-slate-600">
                  Mejor opción encontrada
                </span>

                <strong className="text-xl text-green-600">
                  $15.400
                </strong>

              </div>

              <div className="rounded-2xl bg-green-100 p-6 text-center">

                <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
                  Ahorro estimado
                </p>

                <h2 className="mt-2 text-5xl font-extrabold text-green-700">
                  $3.500
                </h2>

              </div>

            </div>

            <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">

              <p className="text-center text-green-800">
                💰 Nuestro objetivo es ayudarte a pagar menos revisando
                descuentos y tarifas preferenciales entre nuestras
                transportadoras aliadas.
              </p>

            </div>

            <Link
              href="/cotizar/nacional"
              className="mt-10 block rounded-2xl bg-green-600 py-5 text-center text-xl font-bold text-white transition hover:bg-green-700"
            >
              💰 Buscar mi mejor precio
            </Link>

            <p className="mt-5 text-center text-sm text-slate-500">
              *Valores ilustrativos. La tarifa final depende del origen,
              destino, peso, dimensiones y condiciones del envío.
            </p>

          </Card>

        </div>

      </Container>
    </section>
  );
}