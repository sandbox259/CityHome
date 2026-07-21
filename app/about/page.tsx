import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "City Homes by Aashiyaanaa curates premium villas and city apartments across Mumbai, Lonavala and Pawna Lake.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="pt-32 md:pt-40 pb-28">

        {/* Intro */}

        <section className="container-editorial">

          <div className="grid lg:grid-cols-12 gap-y-14 gap-x-14 items-center">

            {/* Text */}

            <div className="lg:col-span-7">

              <p className="eyebrow mb-4">About Us</p>

              <h1 className="font-display text-4xl md:text-5xl leading-tight text-balance">
                A collection built on care,
                <br />
                not scale.
              </h1>

              <p className="mt-10 text-base md:text-lg leading-relaxed text-muted">
                City Homes by Aashiyaanaa began with a simple idea — that a
                stay away from home should feel considered, not generic. We
                work directly with a carefully selected collection of villa
                and apartment owners across Mumbai, Lonavala and Pawna Lake,
                choosing only homes we would genuinely enjoy staying in
                ourselves.
              </p>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-muted">
                Every property is personally inspected, and every enquiry is
                answered by someone who truly knows the home — never a call
                centre script. Whether you&apos;re planning a weekend getaway,
                a work trip, or a celebration with family and friends, our
                goal remains the same: helping you find a place that feels
                right from the moment you arrive.
              </p>

            </div>

            {/* Photo */}

            <div className="lg:col-span-5">

              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/HOME_2.jpeg"
                  alt="A City Homes by Aashiyaanaa property"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

            </div>

          </div>

        </section>

        {/* Statistics */}

        <section className="container-editorial mt-20">

          <div className="border-t border-border pt-14">

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">

              <div>
                <p className="font-display text-5xl text-brand-red">3</p>
                <p className="mt-3 text-sm text-muted">
                  Carefully curated destinations
                </p>
              </div>

              <div>
                <p className="font-display text-5xl text-brand-red">100%</p>
                <p className="mt-3 text-sm text-muted">
                  Personally inspected homes
                </p>
              </div>

              <div>
                <p className="font-display text-5xl text-brand-red">1:1</p>
                <p className="mt-3 text-sm text-muted">
                  Direct guest support
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Founder Section */}

        <section className="container-editorial mt-36">

          <div className="border-t border-border pt-24">

            <div className="grid lg:grid-cols-12 gap-y-16 gap-x-14 items-start">

              {/* Photo */}

              <div className="lg:col-span-5">

                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/FOUNDER.jpg"
                    alt="Atif Munshi, founder of City Homes by Aashiyaanaa"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <h3 className="mt-7 font-display text-2xl">Atif Munshi</h3>

                <p className="mt-1 text-sm text-muted">
                  Founder · City Homes by Aashiyaanaa
                </p>

              </div>

              {/* Bio + facts */}

              <div className="lg:col-span-7">

                <p className="eyebrow mb-5">The Person Behind City Homes</p>

                <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance max-w-xl">
                  Hospitality is never just about beautiful homes.
                </h2>

                <div className="mt-10 max-w-xl space-y-6">

                  <p className="text-base md:text-lg leading-relaxed text-muted">
                    I&apos;m Atif Munshi, and I&apos;m a Superhost. With years
                    of experience in hospitality, I&apos;m committed to giving
                    every guest a comfortable, considered stay — reachable any
                    time by call, text, email or in person.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed text-muted">
                    City Homes wasn&apos;t built to become the biggest
                    collection of holiday homes. It was built around something
                    simpler — offering places I&apos;d confidently recommend
                    to my own family and friends, and standing behind every
                    stay personally.
                  </p>

                </div>

                {/* Quote */}

                <figure className="mt-14 max-w-xl border-l-2 border-brand-red pl-6">

                  <blockquote className="font-display italic text-xl md:text-2xl leading-relaxed text-balance">
                    “The finest hospitality isn&apos;t measured by luxury —
                    it&apos;s measured by how welcomed you feel.”
                  </blockquote>

                </figure>

                {/* Facts */}

                <div className="mt-14 max-w-xl grid grid-cols-2 gap-8 border-t border-border pt-10">

                  <div>
                    <p className="font-display text-3xl text-brand-red">100%</p>
                    <p className="mt-2 text-sm text-muted">Response rate</p>
                  </div>

                  <div>
                    <p className="font-display text-3xl text-brand-red">
                      &lt; 1 hr
                    </p>
                    <p className="mt-2 text-sm text-muted">Response time</p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Closing Editorial Statement */}

        <section className="container-editorial mt-36">

          <div className="border-t border-border pt-24">

            <div className="max-w-3xl">

              <p className="eyebrow mb-5">Our Promise</p>

              <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
                Every memorable stay
                <br />
                begins long before
                <br />
                you arrive.
              </h2>

              <div className="mt-12 space-y-6">

                <p className="text-base md:text-lg leading-relaxed text-muted">
                  Beautiful homes are only one part of a memorable experience.
                  Honest advice, thoughtful recommendations and dependable
                  support are what transform a booking into a stay
                  you&apos;ll genuinely look forward to.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-muted">
                  That&apos;s the standard we hold ourselves to with every
                  guest, every reservation and every home that becomes part
                  of City Homes by Aashiyaanaa.
                </p>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
