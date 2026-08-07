import ServiceCard from "./ServiceCard";
import Container from "@/components/layout/Container";

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-24">
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            SOLUCIONES PARA CADA TIPO DE ENVÍO
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Tú nos dices qué necesitas enviar.
          </h2>

          <p className="mt-6 text-xl leading-9 text-slate-600">
            Nosotros buscamos la mejor alternativa para que ahorres tiempo y
            dinero en cada envío.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          <ServiceCard
            icon="🛵"
            title="Mensajería Local"
            description="Mensajería rápida dentro de Bucaramanga y su área metropolitana."
            features={[
              "Recogemos donde estés",
              "Entrega rápida",
              "Ideal para documentos, paquetes y diligencias",
            ]}
            buttonText="Solicitar mensajero"
            buttonColor="bg-orange-600 hover:bg-orange-700"
            href="/cotizar/local"
          />

          <ServiceCard
            icon="📦"
            title="Envíos Nacionales"
            description="Buscamos una mejor opción entre varias transportadoras para ayudarte a pagar menos."
            features={[
              "Tarifas preferenciales",
              "Comparación entre transportadoras",
              "Atención personalizada",
            ]}
            buttonText="💰 Buscar mi mejor precio"
            buttonColor="bg-green-600 hover:bg-green-700"
            href="/cotizar/nacional"
          />

          <ServiceCard
            icon="🌎"
            title="Envíos Internacionales"
            description="Cotiza documentos y paquetes hacia diferentes países con acompañamiento personalizado."
            features={[
              "Cobertura internacional",
              "Proceso sencillo",
              "Atención por WhatsApp",
            ]}
            buttonText="🌍 Cotizar mi envío"
            buttonColor="bg-blue-600 hover:bg-blue-700"
            href="/cotizar/internacional"
          />

        </div>

      </Container>
    </section>
  );
}