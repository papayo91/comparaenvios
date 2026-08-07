import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { placeId } = await req.json();

    const response = await fetch(
      "https://places.googleapis.com/v1/places/" +
        placeId +
        "?fields=id,displayName,formattedAddress,location",
      {
        headers: {
          "X-Goog-Api-Key":
       process.env.GOOGLE_MAPS_SERVER_API_KEY!
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "No fue posible consultar Google." },
        { status: 500 }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      placeId: data.id,
      address: data.formattedAddress,
      lat: data.location.latitude,
      lng: data.location.longitude,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Error interno." },
      { status: 500 }
    );
  }
}