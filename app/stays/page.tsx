import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StaysFilters } from "@/components/StaysFilters";
import { properties } from "@/data/properties";

export const metadata: Metadata = {
  title: "All Stays",
  description:
    "Browse every villa and apartment in the City Homes by Aashiyaanaa collection across Mumbai, Lonavala and Pawna Lake.",
  alternates: { canonical: "/stays" },
};

export default function StaysPage() {
  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40">
        <div className="container-editorial mb-14 max-w-2xl">
          <p className="eyebrow mb-4">The Full Collection</p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight text-balance">
            Every stay, in one place.
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
            Villas and apartments across Mumbai, Lonavala and Pawna Lake —
            filter by type or destination to find yours.
          </p>
        </div>

        <div className="container-editorial pb-24 md:pb-32">
          <StaysFilters properties={properties} />
        </div>
      </main>
      <Footer />
    </>
  );
}
