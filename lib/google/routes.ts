export interface RouteResult {
  distanceMeters: number;
  durationSeconds: number;
}

export async function calculateRoute(
  origin: { lat: number; lng: number },
  destination: { lat: number; lng: number }
): Promise<RouteResult> {
  const response = await fetch("/api/google/routes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      origin,
      destination,
    }),
  });

  if (!response.ok) {
    throw new Error("No fue posible calcular la ruta.");
  }

  return response.json();
}