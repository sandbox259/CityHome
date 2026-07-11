export function FacilitiesList({ facilities }: { facilities: string[] }) {
  return (
    <div>
      <h2 className="font-display text-2xl mb-6">Facilities</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
        {facilities.map((facility) => (
          <li key={facility} className="text-sm text-foreground border-b border-border pb-3">
            {facility}
          </li>
        ))}
      </ul>
    </div>
  );
}
