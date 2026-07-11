import { MapPin } from "lucide-react";
import type { NearbyPlace } from "@/types/property";

export function NearbyPlaces({ places }: { places: NearbyPlace[] }) {
  if (places.length === 0) return null;

  return (
    <div>
      <h3 className="font-display text-xl mb-4">Nearby Places</h3>
      <ul className="space-y-4">
        {places.map((place) => (
          <li key={place.name} className="flex items-start gap-3">
            <MapPin className="text-brand-red shrink-0 mt-0.5" size={16} aria-hidden="true" />
            <div>
              <p className="text-sm font-medium text-foreground">{place.name}</p>
              <p className="text-xs text-muted">
                {place.distance}
                {place.travelTime ? ` · ${place.travelTime}` : ""}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
