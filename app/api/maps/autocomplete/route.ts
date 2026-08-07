import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { input } = await req.json();

    if (!input || input.length < 3) {
      return NextResponse.json([]);
    }

    const response = await fetch(
      "https://places.googleapis.com/v1/places:autocomplete",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key":
         process.env.GOOGLE_MAPS_SERVER_API_KEY!
        },
        body: JSON.stringify({
          input,
          languageCode: "es",
          regionCode: "CO",
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json(
      data.suggestions ?? []
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Error interno." },
      { status: 500 }
    );
  }
}