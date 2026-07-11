import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ApartmentFilters } from "@/components/ApartmentFilters";
import { getApartments } from "@/data/properties";

export const metadata: Metadata = {
  title: "Apartments",
  description:
    "City apartments across Mumbai, chosen for comfort, connectivity and ease of access.",
  alternates: { canonical: "/apartments" },
};

export default function ApartmentsPage() {
  const apartments = getApartments();

  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40">
        <div className="container-editorial mb-14 max-w-2xl">
          <p className="eyebrow mb-4">Apartments</p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight text-balance">
            City stays with the comfort of home.
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
            Fully furnished apartments across Mumbai, built for business
            trips, city breaks and everything in between.
          </p>
        </div>

        <div className="container-editorial pb-24 md:pb-32">
          <ApartmentFilters properties={apartments} />
        </div>
      </main>
      <Footer />
    </>
  );
}
