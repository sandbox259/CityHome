import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "City Homes by Aashiyaanaa curates premium villas and city apartments across Mumbai, Lonavala and Pawna Lake.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="container-editorial max-w-3xl">
          <p className="eyebrow mb-4">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight text-balance">
            A collection built on care, not scale.
          </h1>
          <p className="mt-8 text-base md:text-lg leading-relaxed text-muted">
            City Homes by Aashiyaanaa began with a simple idea — that a stay
            away from home should feel considered, not generic. We work
            directly with a small number of villa and apartment owners
            across Mumbai, Lonavala and Pawna Lake, choosing only homes we
            would genuinely want to stay in ourselves.
          </p>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-muted">
            Every property in our collection is personally inspected, and
            every enquiry is answered by someone who actually knows the
            home — not a call centre script. Whether you&apos;re booking a
            weekend at the lake, a work trip to Mumbai, or a celebration
            with a large group, our goal is the same: a home that feels
            right the moment you walk in.
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-border pt-14">
            <div>
              <p className="font-display text-4xl text-brand-red">3</p>
              <p className="mt-2 text-sm text-muted">Destinations curated</p>
            </div>
            <div>
              <p className="font-display text-4xl text-brand-red">100%</p>
              <p className="mt-2 text-sm text-muted">Personally inspected homes</p>
            </div>
            <div>
              <p className="font-display text-4xl text-brand-red">1:1</p>
              <p className="mt-2 text-sm text-muted">Direct guest support</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
