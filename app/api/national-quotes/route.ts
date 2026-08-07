import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { error } = await supabase
      .from("national_quotes")
      .insert([
        {
          nombre: body.nombre,
          whatsapp: body.whatsapp,
          ciudad_origen: body.ciudad_origen,
          ciudad_destino: body.ciudad_destino,
          peso: body.peso,
          largo: body.largo,
          ancho: body.ancho,
          alto: body.alto,
          valor_asegurado: body.valor_asegurado,
          contenido: body.contenido,
        },
      ]);

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "Compara Envíos <onboarding@resend.dev>",
      to: "oscarruedas1991@gmail.com",
      subject: "📦 Nueva cotización nacional",
      html: `
        <h2>Nueva solicitud de cotización nacional</h2>

        <p><strong>Nombre:</strong> ${body.nombre}</p>
        <p><strong>WhatsApp:</strong> ${body.whatsapp}</p>

        <hr>

        <p><strong>Ciudad origen:</strong> ${body.ciudad_origen}</p>

        <p><strong>Ciudad destino:</strong> ${body.ciudad_destino}</p>

        <hr>

        <p><strong>Peso:</strong> ${body.peso} Kg</p>

        <p><strong>Largo:</strong> ${body.largo} cm</p>

        <p><strong>Ancho:</strong> ${body.ancho} cm</p>

        <p><strong>Alto:</strong> ${body.alto} cm</p>

        <p><strong>Valor asegurado:</strong> $${body.valor_asegurado}</p>

        <hr>

        <p><strong>Contenido:</strong></p>

        <p>${body.contenido}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (err) {

    console.error(err);

    return NextResponse.json(
      {
        error: "Error interno del servidor",
      },
      {
        status: 500,
      }
    );

  }
}