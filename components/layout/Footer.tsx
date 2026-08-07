import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">

      <Container>

        <div className="grid gap-12 py-16 md:grid-cols-4">

          <div>

            <h2 className="text-2xl font-bold text-white">
              🚚 Compara Envíos
            </h2>

            <p className="mt-5 leading-7">
              Compara tarifas preferenciales para envíos nacionales,
              internacionales y mensajería local desde una sola plataforma.
            </p>

          </div>

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Servicios
            </h3>

            <div className="space-y-3">

              <Link
                href="/cotizar/local"
                className="block hover:text-white"
              >
                Mensajería Local
              </Link>

              <Link
                href="/cotizar/nacional"
                className="block hover:text-white"
              >
                Envíos Nacionales
              </Link>

              <Link
                href="/cotizar/internacional"
                className="block hover:text-white"
              >
                Envíos Internacionales
              </Link>

            </div>

          </div>

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Empresa
            </h3>

            <div className="space-y-3">

              <Link
                href="/nosotros"
                className="block hover:text-white"
              >
                Nosotros
              </Link>

              <Link
                href="/contacto"
                className="block hover:text-white"
              >
                Contacto
              </Link>

              <Link
                href="/empresas"
                className="block hover:text-white"
              >
                Empresas
              </Link>

            </div>

          </div>

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Contáctanos
            </h3>

            <div className="space-y-3">

              <p>📱 WhatsApp</p>

              <p>📧 contacto@comparaenvios.com</p>

              <p>📍 Bucaramanga, Colombia</p>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-400">

          © {new Date().getFullYear()} Compara Envíos. Todos los derechos reservados.

        </div>

      </Container>

    </footer>
  );
}