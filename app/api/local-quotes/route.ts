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

    // Guardar la solicitud en Supabase
    const { error } = await supabase.from("local_quotes").insert([
      {
        nombre: body.nombre,
        whatsapp: body.whatsapp,
        tipo_servicio: body.tipo_servicio,
        direccion_recogida: body.direccion_recogida,
        direccion_entrega: body.direccion_entrega,
        observaciones: body.observaciones,
      },
    ]);

    if (error) {
      console.error("Error guardando en Supabase:", error);

      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    // Formatear el valor cotizado como pesos colombianos
    const valorFormateado = Number(
      body.valor_cotizado || 0
    ).toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    });

    // Enviar correo
    const { error: emailError } = await resend.emails.send({
      from: "Compara Envíos <onboarding@resend.dev>",
      to: "oscarruedas1991@gmail.com",
      subject: "🛵 Nueva solicitud de mensajería local",

      html: `
        <h2>Nueva solicitud de mensajería local</h2>

        <p>
          <strong>Nombre:</strong>
          ${body.nombre}
        </p>

        <p>
          <strong>WhatsApp:</strong>
          ${body.whatsapp}
        </p>

        <p>
          <strong>Tipo de servicio:</strong>
          ${body.tipo_servicio}
        </p>

        <hr>

        <h3>Información de la cotización</h3>

        <p>
          <strong>Distancia:</strong>
          ${body.distancia_km ?? "No disponible"} km
        </p>

        <p>
          <strong>Tiempo estimado:</strong>
          ${body.duracion_estimada_minutos ?? "No disponible"} minutos
        </p>

        <p>
          <strong>Valor del servicio:</strong>
          ${valorFormateado}
        </p>

        <hr>

        <p>
          <strong>Dirección de recogida:</strong>
        </p>

        <p>
          ${body.direccion_recogida}
        </p>

        <p>
          <strong>Dirección de entrega:</strong>
        </p>

        <p>
          ${body.direccion_entrega}
        </p>

        <hr>

        <p>
          <strong>Observaciones:</strong>
        </p>

        <p>
          ${body.observaciones || "Sin observaciones"}
        </p>
      `,
    });

    if (emailError) {
      console.error("Error enviando correo:", emailError);

      return NextResponse.json(
        { error: "La solicitud se guardó, pero no se pudo enviar el correo." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });

  } catch (err) {
    console.error("Error interno:", err);

    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}