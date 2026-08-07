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
                className="block hover:text-white transition"
              >
                Mensajería Local
              </Link>

              <Link
                href="/cotizar/nacional"
                className="block hover:text-white transition"
              >
                Envíos Nacionales
              </Link>

              <Link
                href="/cotizar/internacional"
                className="block hover:text-white transition"
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
                className="block hover:text-white transition"
              >
                Nosotros
              </Link>

              <Link
                href="/contacto"
                className="block hover:text-white transition"
              >
                Contacto
              </Link>

              {/* Como aún no existe la página Empresas,
                  enviamos al formulario de contacto */}
              <Link
                href="/contacto"
                className="block hover:text-white transition"
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

              <a
                href="https://wa.me/573213518287"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-green-400 transition"
              >
                📱 WhatsApp
              </a>

              <a
                href="mailto:contacto@comparaenvios.co"
                className="block hover:text-white transition"
              >
                📧 contacto@comparaenvios.co
              </a>

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