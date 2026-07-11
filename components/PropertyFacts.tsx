import { Users, BedDouble, Bath, UtensilsCrossed, KeyRound, ShieldCheck, HelpCircle } from "lucide-react";
import type { Property } from "@/types/property";

export function PropertyFacts({ property }: { property: Property }) {
  const facts = [
    { icon: Users, label: `${property.maxGuests} Guests` },
    { icon: BedDouble, label: `${property.bedrooms} ${property.bedrooms === 1 ? "Bedroom" : "Bedrooms"}` },
    property.bathrooms !== null
      ? { icon: Bath, label: `${property.bathrooms} ${property.bathrooms === 1 ? "Bathroom" : "Bathrooms"}` }
      : { icon: HelpCircle, label: "Bathrooms: to be confirmed" },
    { icon: UtensilsCrossed, label: "Kitchen" },
    { icon: KeyRound, label: "Self Check-in" },
    { icon: ShieldCheck, label: "24/7 Security" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-8 border-y border-border">
      {facts.map((fact) => (
        <div key={fact.label} className="flex items-center gap-3">
          <fact.icon className="text-brand-red shrink-0" size={20} aria-hidden="true" />
          <span className="text-sm text-foreground">{fact.label}</span>
        </div>
      ))}
    </div>
  );
}
