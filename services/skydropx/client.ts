import { getSkyDropxToken } from "./auth";

export async function skyDropxFetch(
  endpoint: string,
  options: RequestInit = {}
) {
  const token = await getSkyDropxToken();

  const response = await fetch(
    `${process.env.SKYDROPX_API_URL}${endpoint}`,
    {
      ...options,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(data));
  }

  return data;
}