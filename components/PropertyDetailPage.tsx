import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Property } from "@/types/property";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PropertyGallery } from "./PropertyGallery";
import { PropertyFacts } from "./PropertyFacts";
import { AmenitiesGrid } from "./AmenitiesGrid";
import { FacilitiesList } from "./FacilitiesList";
import { LocationSection } from "./LocationSection";
import { HouseInformationSection } from "./HouseInformationSection";
import { StickyEnquiryCard } from "./StickyEnquiryCard";
import { MobilePropertyActionBar } from "./MobilePropertyActionBar";
import { PropertyGrid } from "./PropertyGrid";
import { getSimilarProperties } from "@/data/properties";
import { r2ImageUrl } from "@/lib/images";

export function PropertyDetailPage({ property }: { property: Property }) {
  const similar = getSimilarProperties(property);
  const listingHref = property.type === "villa" ? "/villas" : "/apartments";
  const listingLabel = property.type === "villa" ? "Villas" : "Apartments";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: property.name,
    description: property.shortDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: property.address,
      addressLocality: property.shortLocation,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: property.latitude,
      longitude: property.longitude,
    },
    image: property.images.map((img) => r2ImageUrl(img.key)),
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: listingLabel, item: listingHref },
      { "@type": "ListItem", position: 3, name: property.name, item: `${listingHref}/${property.slug}` },
    ],
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <main className="pt-24 pb-28 lg:pb-16">
        <div className="container-editorial">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted py-4">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <Link href={listingHref} className="hover:text-foreground">{listingLabel}</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span className="text-foreground">{property.name}</span>
          </nav>

          <PropertyGallery hero={property.heroImage} images={property.images} />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-14">
            <div className="lg:col-span-2 space-y-14">
              <div>
                <p className="eyebrow mb-3">
                  {property.destination} · {property.type === "villa" ? "Villa" : "Apartment"}
                </p>
                <h1 className="font-display text-4xl md:text-5xl leading-tight">{property.name}</h1>
                <p className="mt-2 text-muted">{property.shortLocation}</p>
              </div>

              <PropertyFacts property={property} />

              <div>
                <h2 className="font-display text-2xl mb-4">Overview</h2>
                <p className="text-sm md:text-base leading-relaxed text-foreground">{property.description}</p>
              </div>

              <AmenitiesGrid amenities={property.amenities} />
              <FacilitiesList facilities={property.facilities} />
              <LocationSection property={property} />
              <HouseInformationSection property={property} />
            </div>

            <div className="lg:col-span-1">
              <StickyEnquiryCard property={property} />
            </div>
          </div>

          {similar.length > 0 && (
            <div className="mt-24">
              <h2 className="font-display text-3xl mb-10">Similar Stays</h2>
              <PropertyGrid properties={similar} />
            </div>
          )}
        </div>
      </main>

      <MobilePropertyActionBar property={property} />
      <Footer />
    </>
  );
}
