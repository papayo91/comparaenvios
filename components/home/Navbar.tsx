import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <Container>
        <div className="h-20 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center text-white font-bold">
              📦
            </div>

            <div>
              <h1 className="font-bold text-xl">
                Compara Envíos
              </h1>

              <p className="text-xs text-gray-500">
                Compara. Ahorra. Envía.
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">

            <a href="#beneficios">Beneficios</a>

            <a href="#funciona">Cómo funciona</a>

            <a href="#cotizar">Cotizar</a>

          </nav>

          <Button variant="success">
            WhatsApp
          </Button>

        </div>
      </Container>
    </header>
  );
}