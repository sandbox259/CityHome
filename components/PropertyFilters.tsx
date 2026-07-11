"use client";

import { useMemo, useState } from "react";
import type { Property } from "@/types/property";
import { PropertyGrid } from "./PropertyGrid";
import { cn } from "@/lib/utils";

export interface FilterOption {
  label: string;
  /** Predicate applied to a property; "All" should always return true. */
  test: (property: Property) => boolean;
}

export function PropertyFilters({
  properties,
  options,
}: {
  properties: Property[];
  options: FilterOption[];
}) {
  const [activeLabel, setActiveLabel] = useState(options[0]?.label ?? "All");

  const filtered = useMemo(() => {
    const active = options.find((o) => o.label === activeLabel) ?? options[0];
    return properties.filter(active.test);
  }, [properties, options, activeLabel]);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter stays"
        className="flex flex-wrap gap-2 mb-12"
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
      </div>

      <div aria-live="polite">
        <PropertyGrid properties={filtered} />
      </div>
    </div>
  );
}
