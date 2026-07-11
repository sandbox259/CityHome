import type { Property } from "@/types/property";

export function HouseInformationSection({ property }: { property: Property }) {
  const info = property.houseInformation;

  const rows: { label: string; value: string }[] = [
    { label: "Check-in", value: info.checkIn },
    { label: "Check-out", value: info.checkOut },
    {
      label: "Parking",
      value:
        info.parking === "available"
          ? "Available"
          : info.parking === "street-parking"
          ? "Street parking only"
          : "Not available",
    },
    { label: "Couple Friendly", value: info.coupleFriendly ? "Yes" : "No" },
    { label: "Pet Policy", value: info.petPolicy },
    { label: "Smoking Policy", value: info.smokingPolicy },
    { label: "Events", value: info.eventsAllowed ? "Allowed on request" : "Not permitted" },
    { label: "Shooting Access", value: info.shootingAccess ? "Available on request" : "Not available" },
  ];

  return (
    <div>
      <h2 className="font-display text-2xl mb-6">House Information</h2>
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
        {rows.map((row) => (
          <div key={row.label} className="flex justify-between border-b border-border pb-3">
            <dt className="text-sm text-muted">{row.label}</dt>
            <dd className="text-sm font-medium text-foreground text-right">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
