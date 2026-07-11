import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropertyDetailPage } from "@/components/PropertyDetailPage";
import { getPropertyBySlug, getApartments } from "@/data/properties";

export function generateStaticParams() {
  return getApartments().map((apartment) => ({ slug: apartment.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property || property.type !== "apartment") return {};

  return {
    title: property.seo.title,
    description: property.seo.description,
    alternates: { canonical: `/apartments/${property.slug}` },
    openGraph: {
      title: property.seo.title,
      description: property.seo.description,
      images: [property.heroImage.key],
    },
  };
}

export default async function ApartmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property || property.type !== "apartment") {
    notFound();
  }

  return <PropertyDetailPage property={property} />;
}
