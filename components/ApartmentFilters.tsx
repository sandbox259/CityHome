"use client";

import type { Property } from "@/types/property";
import { PropertyFilters, type FilterOption } from "./PropertyFilters";

const FILTERS: FilterOption[] = [
  { label: "All", test: () => true },
  { label: "Mumbai", test: (p) => p.destination === "Mumbai" },
  { label: "Near BKC", test: (p) => p.shortLocation.toLowerCase().includes("bkc") },
  { label: "Couple Friendly", test: (p) => p.coupleFriendly },
  { label: "Group Friendly", test: (p) => p.experienceTags.includes("group-getaway") },
];

export function ApartmentFilters({ properties }: { properties: Property[] }) {
  return <PropertyFilters properties={properties} options={FILTERS} />;
}
