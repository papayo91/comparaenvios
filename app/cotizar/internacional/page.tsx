import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

import InternationalQuoteForm from "@/components/quotes/InternationalQuoteForm";

export default function InternacionalPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 py-20">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div className="text-white">
              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
                🌎 Envíos Internacionales
              </span>

              <h1 className="mt-8 text-5xl font-extrabold leading-tight">
                Envía tus paquetes a cualquier parte del mundo.
              </h1>

              <p className="mt-8 text-xl text-blue-100">
                Completa el formulario y te enviaremos la mejor cotización disponible para tu envío internacional.
              </p>
            </div>

            <InternationalQuoteForm />

          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}