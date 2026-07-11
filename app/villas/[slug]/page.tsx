import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropertyDetailPage } from "@/components/PropertyDetailPage";
import { getPropertyBySlug, getVillas } from "@/data/properties";

export function generateStaticParams() {
  return getVillas().map((villa) => ({ slug: villa.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property || property.type !== "villa") return {};

  return {
    title: property.seo.title,
    description: property.seo.description,
    alternates: { canonical: `/villas/${property.slug}` },
    openGraph: {
      title: property.seo.title,
      description: property.seo.description,
      images: [property.heroImage.key],
    },
  };
}

export default async function VillaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property || property.type !== "villa") {
    notFound();
  }

  return <PropertyDetailPage property={property} />;
}
