"use client";

import type { Property } from "@/types/property";
import { PropertyFilters, type FilterOption } from "./PropertyFilters";

const FILTERS: FilterOption[] = [
  { label: "All", test: () => true },
  { label: "Lonavala", test: (p) => p.destination === "Lonavala" },
  { label: "Pawna", test: (p) => p.destination === "Pawna Lake" },
  { label: "Pool", test: (p) => p.hasPool },
  { label: "Group Stay", test: (p) => p.experienceTags.includes("group-getaway") },
];

export function VillaFilters({ properties }: { properties: Property[] }) {
  return <PropertyFilters properties={properties} options={FILTERS} />;
}
