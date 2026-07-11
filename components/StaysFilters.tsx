"use client";

import type { Property } from "@/types/property";
import { PropertyFilters, type FilterOption } from "./PropertyFilters";

const FILTERS: FilterOption[] = [
  { label: "All", test: () => true },
  { label: "Villas", test: (p) => p.type === "villa" },
  { label: "Apartments", test: (p) => p.type === "apartment" },
  { label: "Mumbai", test: (p) => p.destination === "Mumbai" },
  { label: "Lonavala", test: (p) => p.destination === "Lonavala" },
  { label: "Pawna", test: (p) => p.destination === "Pawna Lake" },
];

export function StaysFilters({ properties }: { properties: Property[] }) {
  return <PropertyFilters properties={properties} options={FILTERS} />;
}
