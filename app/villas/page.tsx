import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VillaFilters } from "@/components/VillaFilters";
import { getVillas } from "@/data/properties";

export const metadata: Metadata = {
  title: "Villas",
  description:
    "Private villas across Lonavala and Pawna Lake, chosen for weekends, celebrations and time together.",
  alternates: { canonical: "/villas" },
};

export default function VillasPage() {
  const villas = getVillas();

  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40">
        <div className="container-editorial mb-14 max-w-2xl">
          <p className="eyebrow mb-4">Villas</p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight text-balance">
            Private escapes, thoughtfully chosen.
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
            Discover villas designed for weekends, celebrations and time
            together.
          </p>
        </div>

        <div className="container-editorial pb-24 md:pb-32">
          <VillaFilters properties={villas} />
        </div>
      </main>
      <Footer />
    </>
  );
}
