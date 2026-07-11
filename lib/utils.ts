type ClassValue = string | number | null | undefined | false;

/** Minimal classnames joiner — avoids pulling in clsx/tailwind-merge for one helper. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatGuestCount(count: number): string {
  return `${count} ${count === 1 ? "Guest" : "Guests"}`;
}

export function formatBedroomCount(count: number): string {
  return `${count} ${count === 1 ? "Bedroom" : "Bedrooms"}`;
}
