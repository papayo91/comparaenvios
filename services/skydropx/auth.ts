let accessToken: string | null = null;
let expiresAt = 0;

export async function getSkyDropxToken(): Promise<string> {
  const now = Date.now();

  // Si el token sigue siendo válido, reutilizarlo
  if (accessToken && now < expiresAt) {
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

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.message || "No fue posible autenticarse con SkyDropx"
    );
  }

 accessToken = data.access_token;

// Renovar 1 minuto antes del vencimiento
expiresAt = now + (data.expires_in - 60) * 1000;

return data.access_token;
}