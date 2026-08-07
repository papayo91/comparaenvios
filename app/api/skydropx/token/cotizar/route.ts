import { NextRequest, NextResponse } from "next/server";

let accessToken: string | null = null;
let expiresAt = 0;

async function getToken() {
  if (accessToken && Date.now() < expiresAt) {
    return accessToken;
  }

  const response = await fetch(
    `${process.env.SKYDROPX_API_URL}/api/v1/oauth/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        grant_type: "client_credentials",
        client_id: process.env.SKYDROPX_API_KEY,
        client_secret: process.env.SKYDROPX_API_SECRET,
      }),
    }
  );

  const text = await response.text();

  console.log("========== TOKEN ==========");
  console.log("STATUS:", response.status);
  console.log(text);

  if (!response.ok) {
    throw new Error(text);
  }

  const data = JSON.parse(text);

  accessToken = data.access_token;
  expiresAt = Date.now() + (data.expires_in - 60) * 1000;

  return accessToken;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const token = await getToken();

    const quotation = {
      branch_id: Number(process.env.SKYDROPX_BRANCH_ID),

      origin: {
        postal_code: body.codigoPostalOrigen,
        country_code: "CO",
      },

      destination: {
        postal_code: body.codigoPostalDestino,
        country_code: "CO",
      },

      parcel: {
        weight: Number(body.peso),
        length: Number(body.largo),
        width: Number(body.ancho),
        height: Number(body.alto),
        declared_amount: Number(body.valorDeclarado),
      },
    };

    console.log("========== BODY ==========");
    console.log(body);

    console.log("========== PAYLOAD ==========");
    console.log(JSON.stringify(quotation, null, 2));

    const response = await fetch(
      `${process.env.SKYDROPX_API_URL}/api/v1/quotations`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quotation),
      }
    );

    const text = await response.text();

    console.log("========== SKYDROPX ==========");
    console.log("STATUS:", response.status);
    console.log(text);

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: text,
        },
        {
          status: response.status,
        }
      );
    }

    return NextResponse.json(JSON.parse(text));
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        ok: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}