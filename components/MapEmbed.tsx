export function MapEmbed({ mapEmbedUrl, propertyName }: { mapEmbedUrl: string; propertyName: string }) {
  return (
    <div className="relative aspect-[4/3] bg-border overflow-hidden">
      <iframe
        src={mapEmbedUrl}
        title={`Map showing the location of ${propertyName}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 w-full h-full border-0"
      />
    </div>
  );
}
