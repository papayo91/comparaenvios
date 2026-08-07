"use client";

import { useState } from "react";
import AddressAutocomplete from "@/components/maps/AddressAutocomplete";
import { calculateRoute } from "@/lib/google/routes";
import { calculateLocalPrice } from "@/components/local/PriceCalculator";
import QuoteSummary from "@/components/local/QuoteSummary";

interface LocalQuoteFormData {
  nombre: string;
  whatsapp: string;
  tipo_servicio: string;

  direccion_recogida: string;
  pickup_place_id: string;
  pickup_lat: number;
  pickup_lng: number;

  direccion_entrega: string;
  delivery_place_id: string;
  delivery_lat: number;
  delivery_lng: number;

  distancia_km: number;
  duracion_estimada_minutos: number;
  valor_cotizado: number;

  observaciones: string;
}

const initialForm: LocalQuoteFormData = {
  nombre: "",
  whatsapp: "",
  tipo_servicio: "Mensajería",

  direccion_recogida: "",
  pickup_place_id: "",
  pickup_lat: 0,
  pickup_lng: 0,

  direccion_entrega: "",
  delivery_place_id: "",
  delivery_lat: 0,
  delivery_lng: 0,

  distancia_km: 0,
  duracion_estimada_minutos: 0,
  valor_cotizado: 0,

  observaciones: "",
};

export default function LocalQuoteForm() {
  const [form, setForm] =
    useState<LocalQuoteFormData>(initialForm);

  const [cotizando, setCotizando] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cotizado, setCotizado] = useState(false);
  const [errorCotizacion, setErrorCotizacion] = useState("");

  const direccionesValidas =
    Boolean(form.pickup_place_id) &&
    Boolean(form.delivery_place_id) &&
    form.pickup_lat !== 0 &&
    form.pickup_lng !== 0 &&
    form.delivery_lat !== 0 &&
    form.delivery_lng !== 0;

  function limpiarCotizacion() {
    setCotizado(false);
    setErrorCotizacion("");

    setForm((prev) => ({
      ...prev,
      distancia_km: 0,
      duracion_estimada_minutos: 0,
      valor_cotizado: 0,
    }));
  }

  async function handleCotizar() {
    if (!direccionesValidas) {
      setErrorCotizacion(
        "Selecciona una dirección válida de Google."
      );
      return;
    }

    setCotizando(true);
    setCotizado(false);
    setErrorCotizacion("");

    try {
      const route = await calculateRoute(
        {
          lat: form.pickup_lat,
          lng: form.pickup_lng,
        },
        {
          lat: form.delivery_lat,
          lng: form.delivery_lng,
        }
      );

      const km = route.distanceMeters / 1000;
      const minutos = Math.ceil(
        route.durationSeconds / 60
      );

      const tarifa = calculateLocalPrice(km);

      setForm((prev) => ({
        ...prev,
        distancia_km: Number(km.toFixed(2)),
        duracion_estimada_minutos: minutos,
        valor_cotizado: tarifa,
      }));

      setCotizado(true);

    } catch (error) {

      console.error(error);

      setErrorCotizacion(
        "No fue posible calcular la ruta."
      );

    } finally {

      setCotizando(false);

    }
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!cotizado) return;

    setLoading(true);

    try {
      const res = await fetch("/api/local-quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      alert("¡Solicitud recibida! En unos minutos un asesor se comunicará contigo por WhatsApp para confirmar tu servicio.");

      setForm(initialForm);

      setCotizado(false);

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
            Solicita tu mensajero en Bucaramanga
          </h2>

          <p className="mt-2 text-gray-600">
            Calcula el valor de tu servicio en segundos.
  Una vez recibamos tu solicitud, coordinaremos la recogida
  y te confirmaremos por WhatsApp.
          </p>

        </div>

        <div>

          <label className="mb-2 block text-sm font-semibold text-gray-800">
            Nombre
          </label>

          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            value={form.nombre}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                nombre: e.target.value,
              }))
            }
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-semibold text-gray-800">
            WhatsApp
          </label>

          <input
            type="tel"
            placeholder="3001234567"
            className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            value={form.whatsapp}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                whatsapp: e.target.value,
              }))
            }
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-semibold text-gray-800">
            Tipo de servicio
          </label>

          <select
            className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            value={form.tipo_servicio}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                tipo_servicio: e.target.value,
              }))
            }
          >
            <option>Mensajería</option>
            <option>Compras</option>
            <option>Radicación de documentos</option>
            <option>Trámites</option>
            <option>Otro</option>
          </select>

        </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">

          <h3 className="font-semibold text-blue-800">
            ℹ️ Información importante
          </h3>

        <p className="mt-2 text-sm text-blue-700">
  Selecciona las direcciones desde las sugerencias de Google
  para calcular correctamente la distancia y el valor del servicio.
  Si necesitas agregar referencias, escríbelas en el campo de observaciones.
</p>

        </div>

        <div>

          <label className="mb-2 block text-sm font-semibold text-gray-800">
            Dirección de recogida
          </label>

          <AddressAutocomplete
            placeholder="Busca la dirección de recogida"
            value={form.direccion_recogida}
            className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900"
            onPlaceSelect={(place) => {
              limpiarCotizacion();

              setForm((prev) => ({
                ...prev,
                direccion_recogida: place.formattedAddress,
                pickup_place_id: place.placeId,
                pickup_lat: place.lat,
                pickup_lng: place.lng,
              }));
            }}
          />

          {form.pickup_place_id && (
            <p className="mt-2 text-sm text-green-600">
              ✓ Dirección de recogida válida
            </p>
          )}

        </div>

        <div>

          <label className="mb-2 block text-sm font-semibold text-gray-800">
            Dirección de entrega
          </label>

          <AddressAutocomplete
            placeholder="Busca la dirección de entrega"
            value={form.direccion_entrega}
            className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900"
            onPlaceSelect={(place) => {
              limpiarCotizacion();

              setForm((prev) => ({
                ...prev,
                direccion_entrega: place.formattedAddress,
                delivery_place_id: place.placeId,
                delivery_lat: place.lat,
                delivery_lng: place.lng,
              }));
            }}
          />

          {form.delivery_place_id && (
            <p className="mt-2 text-sm text-green-600">
              ✓ Dirección de entrega válida
            </p>
          )}

        </div>

        <div>

          <label className="mb-2 block text-sm font-semibold text-gray-800">
            Observaciones o referencias
          </label>

          <textarea
            rows={4}
            placeholder="Ej. Torre 2 apartamento 304, casa azul, frente al parque..."
            className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            value={form.observaciones}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                observaciones: e.target.value,
              }))
            }
          />

        </div>

        {!cotizado && (

          <button
            type="button"
            onClick={handleCotizar}
            disabled={!direccionesValidas || cotizando}
            className="w-full rounded-xl bg-blue-600 p-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {cotizando
              ? "Calculando ruta..."
              : "Calcular valor del servicio"}
          </button>

        )}

        {errorCotizacion && (

          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
            {errorCotizacion}
          </div>

        )}

        {cotizado && (

          <>
            <QuoteSummary
              distanciaKm={form.distancia_km}
              duracionMinutos={form.duracion_estimada_minutos}
              valorCotizado={form.valor_cotizado}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-green-600 p-4 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? "Enviando solicitud..."
                : "Solicitar mensajero"}
            </button>
          </>

        )}

      </form>

    </div>
  );
}