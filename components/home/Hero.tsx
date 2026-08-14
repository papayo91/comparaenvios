import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-green-600 text-white">

      <Container>

        <div className="grid min-h-[700px] items-center gap-16 py-20 lg:grid-cols-2">

          {/* Columna izquierda */}

          <div>

            <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold backdrop-blur">
              💰 Tarifas preferenciales · Local · Nacional · Internacional
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-7xl">
              Deja de pagar la
              <span className="block text-yellow-300">
                tarifa de mostrador.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-blue-100">
              Compara Envíos encuentra tarifas preferenciales entre diferentes
              transportadoras para ayudarte a ahorrar dinero en cada envío.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

            

              <Link href="#servicios">
                <Button
                  variant="secondary"
                  size="lg"
                >
                  Conocer servicios
                </Button>
              </Link>

            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">

              <div>
                <h3 className="text-3xl font-bold">
                  +5
                </h3>

                <p className="mt-2 text-blue-100">
                  Transportadoras
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  3
                </h3>

                <p className="mt-2 text-blue-100">
                  Tipos de servicio
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  100%
                </h3>

                <p className="mt-2 text-blue-100">
                  Cotización gratuita
                </p>
              </div>

            </div>

          </div>

          {/* Columna derecha */}

          <Card
            padding="lg"
            className="rounded-[32px]"
          >

            <div className="text-center">

              <div className="text-6xl">
                📦
              </div>

              <h2 className="mt-5 text-3xl font-bold text-slate-900">
                Descubre cuánto puedes ahorrar
              </h2>

              <p className="mt-3 text-slate-600">
                Ejemplo de una cotización.
              </p>

            </div>

            <div className="mt-10 rounded-2xl bg-slate-50 p-6">

              <div className="flex justify-between border-b py-4">

                <span className="text-slate-600">
                  Precio de referencia
                </span>

                <strong className="text-slate-900">
                  $18.900
                </strong>

              </div>

              <div className="flex justify-between border-b py-4">

                <span className="text-slate-600">
                  Con Compara Envíos
                </span>

                <strong className="text-green-600">
                  Desde $15.400
                </strong>

              </div>

              <div className="flex justify-between py-5">

                <span className="font-semibold text-slate-700">
                  Ahorro estimado
                </span>

                <strong className="text-3xl text-green-600">
                  $3.500
                </strong>

              </div>

            </div>

            <p className="mt-6 text-center text-sm text-slate-500">
              *Ejemplo ilustrativo. El valor final depende del origen,
              destino, peso y dimensiones.
            </p>

          </Card>

        </div>

      </Container>

    </section>
  );
}