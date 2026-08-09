"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, X, Waves, Car, PartyPopper, Camera, Heart } from "lucide-react";
import type { Property } from "@/types/property";
import { PropertyGrid } from "./PropertyGrid";
import { cn } from "@/lib/utils";

export interface FilterOption {
  label: string;
  /** Predicate applied to a property; "All" should always return true. */
  test: (property: Property) => boolean;
}

type SortKey = "featured" | "guests" | "bedrooms" | "name";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "featured", label: "Featured first" },
  //{ key: "guests", label: "Most guests" },
  { key: "bedrooms", label: "Most bedrooms" },
  { key: "name", label: "Name, A–Z" },
];

const GUEST_STEPS = [2, 4, 6, 8, 10];
const BEDROOM_STEPS = [1, 2, 3, 4];

interface AmenityToggle {
  key: "hasPool" | "coupleFriendly" | "parkingAvailable" | "shootingAccess" | "eventsAllowed";
  label: string;
  icon: typeof Waves;
  test: (property: Property) => boolean;
}

const AMENITY_TOGGLES: AmenityToggle[] = [
  { key: "hasPool", label: "Private pool", icon: Waves, test: (p) => p.hasPool },
  { key: "coupleFriendly", label: "Couple friendly", icon: Heart, test: (p) => p.coupleFriendly },
  { key: "parkingAvailable", label: "Parking available", icon: Car, test: (p) => p.parkingAvailable },
  { key: "eventsAllowed", label: "Events allowed", icon: PartyPopper, test: (p) => p.houseInformation.eventsAllowed },
  { key: "shootingAccess", label: "Shoot friendly", icon: Camera, test: (p) => p.shootingAccess },
];

export function PropertyFilters({
  properties,
  options,
}: {
  properties: Property[];
  options: FilterOption[];
}) {
  const [activeLabel, setActiveLabel] = useState(options[0]?.label ?? "All");
  const [minGuests, setMinGuests] = useState(0);
  const [minBedrooms, setMinBedrooms] = useState(0);
  const [activeAmenities, setActiveAmenities] = useState<AmenityToggle["key"][]>([]);
  const [sort, setSort] = useState<SortKey>("featured");
  const [panelOpen, setPanelOpen] = useState(false);

  const advancedCount =
    (minGuests > 0 ? 1 : 0) + (minBedrooms > 0 ? 1 : 0) + activeAmenities.length;

  const toggleAmenity = (key: AmenityToggle["key"]) => {
    setActiveAmenities((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const clearAdvanced = () => {
    setMinGuests(0);
    setMinBedrooms(0);
    setActiveAmenities([]);
  };

  const filtered = useMemo(() => {
    const activeChip = options.find((o) => o.label === activeLabel) ?? options[0];

    let result = properties.filter(activeChip.test);

    if (minGuests > 0) {
      result = result.filter((p) => p.maxGuests >= minGuests);
    }
    if (minBedrooms > 0) {
      result = result.filter((p) => p.bedrooms >= minBedrooms);
    }
    for (const key of activeAmenities) {
      const toggle = AMENITY_TOGGLES.find((t) => t.key === key);
      if (toggle) result = result.filter(toggle.test);
    }

    const sorted = [...result];
    switch (sort) {
      case "guests":
        sorted.sort((a, b) => b.maxGuests - a.maxGuests);
        break;
      case "bedrooms":
        sorted.sort((a, b) => b.bedrooms - a.bedrooms);
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "featured":
      default:
        sorted.sort((a, b) => Number(b.featured) - Number(a.featured));
    }

    return sorted;
  }, [properties, options, activeLabel, minGuests, minBedrooms, activeAmenities, sort]);

  return (
    <div>
      {/* Quick chips */}
      <div
        role="group"
        aria-label="Filter stays"
        className="flex flex-wrap items-center gap-2 mb-4"
      >
        {options.map((option) => {
          const isActive = option.label === activeLabel;
          return (
            <button
              key={option.label}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveLabel(option.label)}
              className={cn(
                "px-5 py-2.5 text-sm font-medium border transition-colors min-h-11",
                isActive
                  ? "bg-charcoal text-white border-charcoal"
                  : "bg-transparent text-foreground border-border hover:border-charcoal"
              )}
            >
              {option.label}
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => setPanelOpen((v) => !v)}
          aria-expanded={panelOpen}
          className={cn(
            "inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border transition-colors min-h-11",
            panelOpen || advancedCount > 0
              ? "border-brand-red text-brand-red"
              : "border-border text-foreground hover:border-charcoal"
          )}
        >
          <SlidersHorizontal size={15} aria-hidden="true" />
          More filters
          {advancedCount > 0 && (
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-red text-white text-[11px] font-semibold">
              {advancedCount}
            </span>
          )}
        </button>
      </div>

      {/* Advanced panel */}
      {panelOpen && (
        <div className="mb-8 border border-border bg-surface p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">
                Guests, at least
              </p>
              <div className="flex flex-wrap gap-2">
                <FilterPill
                  active={minGuests === 0}
                  label="Any"
                  onClick={() => setMinGuests(0)}
                />
                {GUEST_STEPS.map((g) => (
                  <FilterPill
                    key={g}
                    active={minGuests === g}
                    label={`${g}+`}
                    onClick={() => setMinGuests(g)}
                  />
                ))}
              </div>
            </div> */}

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">
                Bedrooms, at least
              </p>
              <div className="flex flex-wrap gap-2">
                <FilterPill
                  active={minBedrooms === 0}
                  label="Any"
                  onClick={() => setMinBedrooms(0)}
                />
                {BEDROOM_STEPS.map((b) => (
                  <FilterPill
                    key={b}
                    active={minBedrooms === b}
                    label={`${b}+`}
                    onClick={() => setMinBedrooms(b)}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">
                Sort by
              </p>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="w-full border border-border bg-background px-4 py-2.5 text-sm min-h-11 focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-red"
              >
                {SORTS.map((s) => (
                  <option key={s.key} value={s.key}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">
              Amenities
            </p>
            <div className="flex flex-wrap gap-2">
              {AMENITY_TOGGLES.map((toggle) => {
                const active = activeAmenities.includes(toggle.key);
                return (
                  <button
                    key={toggle.key}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggleAmenity(toggle.key)}
                    className={cn(
                      "inline-flex items-center gap-2 px-4 py-2.5 text-sm border transition-colors min-h-11",
                      active
                        ? "bg-charcoal text-white border-charcoal"
                        : "bg-transparent text-foreground border-border hover:border-charcoal"
                    )}
                  >
                    <toggle.icon size={15} aria-hidden="true" />
                    {toggle.label}
                  </button>
                );
              })}
            </div>
          </div>

          {advancedCount > 0 && (
            <button
              type="button"
              onClick={clearAdvanced}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-red hover:text-brand-red-dark"
            >
              <X size={14} aria-hidden="true" />
              Clear advanced filters
            </button>
          )}
        </div>
      )}

      <p className="mb-8 text-sm text-muted" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "stay" : "stays"} match
        {advancedCount > 0 || activeLabel !== (options[0]?.label ?? "All") ? " your filters" : ""}
      </p>

      <div aria-live="polite">
        <PropertyGrid properties={filtered} />
      </div>
    </div>
  );
}

function FilterPill({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "px-4 py-2 text-sm border transition-colors min-h-9",
        active
          ? "bg-charcoal text-white border-charcoal"
          : "bg-transparent text-foreground border-border hover:border-charcoal"
      )}
    >
      {label}
    </button>
  );
}
