interface QuoteSummaryProps {
  distanciaKm: number;
  duracionMinutos: number;
  valorCotizado: number;
}

export default function QuoteSummary({
  distanciaKm,
  duracionMinutos,
  valorCotizado,
}: QuoteSummaryProps) {
  if (distanciaKm <= 0) return null;

  return (
    <div className="space-y-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-gray-900">

      <h3 className="text-xl font-bold text-gray-900">
        Resumen de la cotización
      </h3>

      <div className="flex items-center justify-between">
        <span className="text-gray-600">
          📍 Distancia
        </span>

        <span className="font-semibold text-gray-900">
          {distanciaKm.toFixed(2)} km
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-gray-600">
          🕒 Tiempo estimado
        </span>

        <span className="font-semibold text-gray-900">
          {duracionMinutos} min
        </span>
      </div>

      <div className="flex items-center justify-between border-t pt-4">
        <span className="text-lg font-semibold text-gray-900">
          💰 Valor del servicio
        </span>

        <span className="text-2xl font-bold text-green-600">
          {new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0,
          }).format(valorCotizado)}
        </span>
      </div>

      <p className="text-sm text-gray-500">
        El valor puede variar si cambia la dirección de recogida o entrega.
      </p>

    </div>
  );
}