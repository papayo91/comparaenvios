"use client";

import { useState } from "react";

interface NationalQuoteFormData {
  nombre: string;
  whatsapp: string;

  ciudad_origen: string;
  ciudad_destino: string;

  peso: string;

  largo: string;
  ancho: string;
  alto: string;

  valor_asegurado: string;

  contenido: string;
}

const initialForm: NationalQuoteFormData = {
  nombre: "",
  whatsapp: "",

  ciudad_origen: "",
  ciudad_destino: "",

  peso: "",

  largo: "",
  ancho: "",
  alto: "",

  valor_asegurado: "",

  contenido: "",
};

export default function NationalQuoteForm() {
  const [form, setForm] = useState(initialForm);

  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/national-quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error();
      }

      alert("Solicitud enviada correctamente.");

      setForm(initialForm);

    } catch (error) {

      console.error(error);

      alert("No fue posible enviar la solicitud.");

    } finally {

      setLoading(false);

    }
  }

  return (
    <div className="mx-auto max-w-2xl">

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-xl"
      >

        <div>

          <h2 className="text-3xl font-bold text-gray-900">
            Solicita tu cotización
          </h2>

          <p className="mt-2 text-gray-600">
            Completa el formulario y en pocos minutos
            recibirás la mejor tarifa disponible.
          </p>

        </div>

        <div>

          <label className="mb-2 block text-sm font-semibold text-gray-800">
            Nombre
          </label>

          <input
            type="text"
            className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
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

          <label className="mb-2 block text-sm font-semibold text-gray-800">
            WhatsApp
          </label>

          <input
            type="text"
            className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
            value={form.whatsapp}
            onChange={(e) =>
              setForm({
                ...form,
                whatsapp: e.target.value,
              })
            }
          />

        </div>

        <div className="grid gap-4 md:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm font-semibold text-gray-800">
              Ciudad origen
            </label>

            <input
              type="text"
              className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
              value={form.ciudad_origen}
              onChange={(e) =>
                setForm({
                  ...form,
                  ciudad_origen: e.target.value,
                })
              }
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-semibold text-gray-800">
              Ciudad destino
            </label>

            <input
              type="text"
              className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
              value={form.ciudad_destino}
              onChange={(e) =>
                setForm({
                  ...form,
                  ciudad_destino: e.target.value,
                })
              }
            />

          </div>

        </div>

        <div className="grid gap-4 md:grid-cols-4">
                    <div>

            <label className="mb-2 block text-sm font-semibold text-gray-800">
              Peso (kg)
            </label>

            <input
              type="number"
              step="0.1"
              className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
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

            <label className="mb-2 block text-sm font-semibold text-gray-800">
              Largo (cm)
            </label>

            <input
              type="number"
              className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
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

            <label className="mb-2 block text-sm font-semibold text-gray-800">
              Ancho (cm)
            </label>

            <input
              type="number"
              className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
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

            <label className="mb-2 block text-sm font-semibold text-gray-800">
              Alto (cm)
            </label>

            <input
              type="number"
              className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
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

          <label className="mb-2 block text-sm font-semibold text-gray-800">
            Valor asegurado
          </label>

          <input
            type="number"
            placeholder="Ej. 200000"
            className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
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

          <label className="mb-2 block text-sm font-semibold text-gray-800">
            Contenido del paquete
          </label>

          <textarea
            rows={4}
            placeholder="Describe brevemente qué contiene el paquete..."
            className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
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
            Una vez recibamos tu solicitud buscaremos la mejor tarifa disponible
            entre nuestras transportadoras aliadas y te enviaremos la cotización
            por WhatsApp en pocos minutos.
          </p>

        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-green-600 p-4 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? "Enviando solicitud..."
            : "Solicitar cotización"}
        </button>

      </form>

    </div>
  );
}