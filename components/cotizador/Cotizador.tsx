"use client";

import { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function Cotizador() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    tipo: "",
    origen: "",
    codigoPostalOrigen: "",
    destino: "",
    codigoPostalDestino: "",
    peso: "",
    largo: "",
    ancho: "",
    alto: "",
    valorDeclarado: "50000",
  });

  const [resultados, setResultados] = useState<any[]>([]);

  function actualizarCampo(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function cotizar() {
    try {
      setLoading(true);

      const response = await fetch("/api/skydropx/token/cotizar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      console.log(data);

      setResultados(data.rates || []);
    } catch (error) {
      console.error(error);
      alert("No fue posible consultar SkyDropX.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-2">
        Cotizar Envío
      </h1>

      <p className="text-gray-500 mb-8">
        Completa la información para consultar las mejores tarifas.
      </p>

      <ProgressBar paso={1} total={6} />

      <div className="space-y-6">

        <div>
          <label className="block font-semibold mb-2">
            ¿Qué deseas enviar?
          </label>

          <select
            name="tipo"
            value={form.tipo}
            onChange={actualizarCampo}
            className="w-full border rounded-lg p-3"
          >
            <option value="">Selecciona una opción</option>
            <option value="documento">Documento</option>
            <option value="sobre">Sobre</option>
            <option value="paquete">Paquete</option>
            <option value="caja">Caja</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Ciudad de origen
          </label>

          <input
            type="text"
            name="origen"
            value={form.origen}
            onChange={actualizarCampo}
            placeholder="Ej: Bucaramanga"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Código postal de origen
          </label>

          <input
            type="text"
            name="codigoPostalOrigen"
            value={form.codigoPostalOrigen}
            onChange={actualizarCampo}
            placeholder="Ej: 680006"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Ciudad de destino
          </label>

          <input
            type="text"
            name="destino"
            value={form.destino}
            onChange={actualizarCampo}
            placeholder="Ej: Bogotá"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Código postal de destino
          </label>

          <input
            type="text"
            name="codigoPostalDestino"
            value={form.codigoPostalDestino}
            onChange={actualizarCampo}
            placeholder="Ej: 111611"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Peso (kg)
          </label>

          <input
            type="number"
            name="peso"
            value={form.peso}
            onChange={actualizarCampo}
            placeholder="1"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Medidas (cm)
          </label>

          <div className="grid grid-cols-3 gap-4">
            <input
              type="number"
              name="largo"
              value={form.largo}
              onChange={actualizarCampo}
              placeholder="15"
              className="border rounded-lg p-3"
            />

            <input
              type="number"
              name="ancho"
              value={form.ancho}
              onChange={actualizarCampo}
              placeholder="10"
              className="border rounded-lg p-3"
            />

            <input
              type="number"
              name="alto"
              value={form.alto}
              onChange={actualizarCampo}
              placeholder="20"
              className="border rounded-lg p-3"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Valor declarado (COP)
          </label>

          <input
            type="number"
            name="valorDeclarado"
            value={form.valorDeclarado}
            onChange={actualizarCampo}
            placeholder="50000"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="pt-6">
          <button
            type="button"
            onClick={cotizar}
            disabled={loading}
            className="bg-blue-700 hover:bg-blue-800 disabled:bg-gray-400 text-white px-8 py-3 rounded-xl font-semibold w-full"
          >
            {loading ? "Consultando tarifas..." : "Buscar tarifas"}
          </button>
        </div>

        {resultados.length > 0 && (
          <div className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-4">
              Tarifas encontradas
            </h2>

            <div className="space-y-4">
              {resultados.map((item: any, index: number) => (
                <div
                  key={index}
                  className="border rounded-xl p-4 flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-bold">
                      {item.carrier || item.provider || "Transportadora"}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {item.service || ""}
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="text-xl font-bold text-blue-700">
                      ${item.amount || item.total || 0}
                    </div>

                    <button className="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                      Seleccionar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}