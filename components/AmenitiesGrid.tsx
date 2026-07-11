import { Check } from "lucide-react";

export function AmenitiesGrid({ amenities }: { amenities: string[] }) {
  return (
    <div>
      <h2 className="font-display text-2xl mb-6">Amenities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
        {amenities.map((amenity) => (
          <div key={amenity} className="flex items-center gap-3">
            <Check className="text-brand-red shrink-0" size={16} aria-hidden="true" />
            <span className="text-sm text-foreground">{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
