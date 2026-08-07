import { NextRequest, NextResponse } from "next/server";

const GOOGLE_ROUTES_URL =
  "https://routes.googleapis.com/directions/v2:computeRoutes";

export async function POST(req: NextRequest) {
  try {
    const { origin, destination } = await req.json();

    if (!origin || !destination) {
      return NextResponse.json(
        { error: "Origin y Destination son obligatorios." },
        { status: 400 }
      );
    }

    const response = await fetch(GOOGLE_ROUTES_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": process.env.GOOGLE_MAPS_SERVER_API_KEY!,
        "X-Goog-FieldMask":
          "routes.distanceMeters,routes.duration,routes.polyline.encodedPolyline",
      },
      body: JSON.stringify({
        origin: {
          location: {
            latLng: {
              latitude: origin.lat,
              longitude: origin.lng,
            },
          },
        },
        destination: {
          location: {
            latLng: {
              latitude: destination.lat,
              longitude: destination.lng,
            },
          },
        },
        travelMode: "DRIVE",
      }),
    });

    if (!response.ok) {
      const error = await response.text();

      return NextResponse.json(
        {
          error: "Google Routes API",
          details: error,
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    const route = data.routes?.[0];

    if (!route) {
      return NextResponse.json(
        { error: "No se encontró una ruta." },
        { status: 404 }
      );
    }

    const duration =
      typeof route.duration === "string"
        ? Number(route.duration.replace("s", ""))
        : 0;

    return NextResponse.json({
      distanceMeters: route.distanceMeters,
      durationSeconds: duration,
      polyline: route.polyline?.encodedPolyline ?? "",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}