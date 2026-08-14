export function calculateLocalPrice(km: number): number {
  if (km <= 3) {
    return 5000;
  }

  if (km <= 4) {
    return 6000;
  }

  if (km <= 12) {
    return Math.round(km * 1300);
  }

  return Math.round(18000 + (km - 12) * 1100);
}

export function formatCOP(value: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}