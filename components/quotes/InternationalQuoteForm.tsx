"use client";

import { useState } from "react";

interface InternationalQuoteFormData {
  nombre: string;
  whatsapp: string;

  ciudad_origen: string;
  pais_destino: string;
  codigo_postal: string;

  peso: string;

  largo: string;
  ancho: string;
  alto: string;

  valor_asegurado: string;

  contenido: string;
}

const initialForm: InternationalQuoteFormData = {
  nombre: "",
  whatsapp: "",

  ciudad_origen: "",

  pais_destino: "",
  codigo_postal: "",

  peso: "",

  largo: "",
  ancho: "",
  alto: "",

  valor_asegurado: "",

  contenido: "",
};

export default function InternationalQuoteForm() {
  const [form, setForm] = useState(initialForm);

  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/international-quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error();
      }

      alert("Cotización Recibida, Estamos buscando descuentos y tarifas especiales con las transportadoras y en unos minutos te enviaremos las promociones por whatsapp.");

      setForm(initialForm);

    } catch (err) {

      console.error(err);

      alert("No fue posible enviar la solicitud.");

    } finally {

      setLoading(false);

    }
  }

  return (
    <div className="mx-auto max-w-2xl">

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-2xl bg-white p-8 shadow-lg"
      >

        <div>

          <h2 className="text-3xl font-bold">
            Solicita tu cotización internacional
          </h2>

          <p className="mt-2 text-gray-500">
            Completa la información y te enviaremos la mejor tarifa disponible.
          </p>

        </div>

        <div>

          <label className="mb-1 block text-sm font-medium">
            Nombre
          </label>

          <input
            className="w-full rounded-xl border p-3"
            value={form.nombre}
            onChange={(e) =>
              setForm({
                ...form,
                nombre: e.target.value,
              })
            }
          />

        </div>

        <div>

          <label className="mb-1 block text-sm font-medium">
            WhatsApp
          </label>

          <input
            className="w-full rounded-xl border p-3"
            value={form.whatsapp}
            onChange={(e) =>
              setForm({
                ...form,
                whatsapp: e.target.value,
              })
            }
          />

        </div>

        <div>

          <label className="mb-1 block text-sm font-medium">
            Ciudad origen
          </label>

          <input
            className="w-full rounded-xl border p-3"
            value={form.ciudad_origen}
            onChange={(e) =>
              setForm({
                ...form,
                ciudad_origen: e.target.value,
              })
            }
          />

        </div>

                <div className="grid gap-4 md:grid-cols-2">

          <div>

            <label className="mb-1 block text-sm font-medium">
              País destino
            </label>

            <input
              className="w-full rounded-xl border p-3"
              value={form.pais_destino}
              onChange={(e) =>
                setForm({
                  ...form,
                  pais_destino: e.target.value,
                })
              }
            />

          </div>

          <div>

            <label className="mb-1 block text-sm font-medium">
              Código postal
            </label>

            <input
              className="w-full rounded-xl border p-3"
              value={form.codigo_postal}
              onChange={(e) =>
                setForm({
                  ...form,
                  codigo_postal: e.target.value,
                })
              }
            />

          </div>

        </div>

        <div className="grid gap-4 md:grid-cols-4">

          <div>

            <label className="mb-1 block text-sm font-medium">
              Peso (Kg)
            </label>

            <input
              type="number"
              step="0.1"
              className="w-full rounded-xl border p-3"
              value={form.peso}
              onChange={(e) =>
                setForm({
                  ...form,
                  peso: e.target.value,
                })
              }
            />

          </div>

          <div>

            <label className="mb-1 block text-sm font-medium">
              Largo (cm)
            </label>

            <input
              type="number"
              className="w-full rounded-xl border p-3"
              value={form.largo}
              onChange={(e) =>
                setForm({
                  ...form,
                  largo: e.target.value,
                })
              }
            />

          </div>

          <div>

            <label className="mb-1 block text-sm font-medium">
              Ancho (cm)
            </label>

            <input
              type="number"
              className="w-full rounded-xl border p-3"
              value={form.ancho}
              onChange={(e) =>
                setForm({
                  ...form,
                  ancho: e.target.value,
                })
              }
            />

          </div>

          <div>

            <label className="mb-1 block text-sm font-medium">
              Alto (cm)
            </label>

            <input
              type="number"
              className="w-full rounded-xl border p-3"
              value={form.alto}
              onChange={(e) =>
                setForm({
                  ...form,
                  alto: e.target.value,
                })
              }
            />

          </div>

        </div>

        <div>

          <label className="mb-1 block text-sm font-medium">
            Valor asegurado
          </label>

          <input
            type="number"
            className="w-full rounded-xl border p-3"
            value={form.valor_asegurado}
            onChange={(e) =>
              setForm({
                ...form,
                valor_asegurado: e.target.value,
              })
            }
          />

        </div>

        <div>

          <label className="mb-1 block text-sm font-medium">
            Contenido del paquete
          </label>

          <textarea
            rows={4}
            className="w-full rounded-xl border p-3"
            value={form.contenido}
            onChange={(e) =>
              setForm({
                ...form,
                contenido: e.target.value,
              })
            }
          />

        </div>

                <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">

          <h3 className="font-semibold text-blue-800">
            ℹ️ Información importante
          </h3>

          <p className="mt-2 text-sm text-blue-700">
            Una vez recibamos tu solicitud buscaremos la mejor opción de envío
            internacional y te enviaremos la cotización por WhatsApp.
          </p>

        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-blue-600 p-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? "Enviando solicitud..."
            : "Solicitar cotización"}
        </button>

      </form>

    </div>
  );
}