import type { Property } from "@/types/property";
import { MapEmbed } from "./MapEmbed";
import { NearbyPlaces } from "./NearbyPlaces";

export function LocationSection({ property }: { property: Property }) {
  return (
    <div>
      <h2 className="font-display text-2xl mb-6">Location</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <p className="text-sm leading-relaxed text-foreground mb-8">
            {property.name} is located at {property.shortLocation}. The exact
            address and access instructions are shared after your stay is
            confirmed.
          </p>
          <NearbyPlaces places={property.nearbyPlaces} />
        </div>
        <MapEmbed mapEmbedUrl={property.mapEmbedUrl} propertyName={property.name} />
      </div>
    </div>
  );
}
