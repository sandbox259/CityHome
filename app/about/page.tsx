import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
// import { SignatureMark } from "@/components/SignatureMark";

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

      <main className="pb-28 md:pb-36">
        {/* =========================================================
            INTRO — PROPERTY + PHILOSOPHY
        ========================================================= */}

        <section className="pt-32 md:pt-40 pb-20 md:pb-28">
          <div className="container-editorial">
            <div className="grid lg:grid-cols-12 gap-y-14 gap-x-14 items-center">
              {/* Property Image */}
              <div className="lg:col-span-5 lg:col-start-1">
                <ScrollReveal variant="fade-up">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src="/HOME_2.jpeg"
                      alt="A City Homes by Aashiyaanaa property"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover"
                    />

                    {/* Subtle image gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                    {/* Caption */}
                    {/* <div className="absolute bottom-0 left-0 p-5 md:p-6">
                      <p className="text-white/85 text-[10px] md:text-xs font-semibold uppercase tracking-[0.22em]">
                        One of our carefully selected homes
                      </p>
                    </div> */}
                  </div>
                </ScrollReveal>
              </div>

              {/* Text */}
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="eyebrow mb-5">About Us</p>

                <h1 className="font-display text-4xl md:text-5xl leading-[1.05] text-balance">
                  A collection built on care,
                  <br />
                  not scale.
                </h1>

                <div className="mt-10 max-w-xl">
                  <p className="text-base md:text-lg leading-relaxed text-muted">
                    City Homes by Aashiyaanaa began with a simple idea — that a
                    stay away from home should feel considered, not generic.
                    We work directly with a carefully selected collection of
                    villa and apartment owners across Mumbai, Lonavala and
                    Pawna Lake, choosing only homes we would genuinely enjoy
                    staying in ourselves.
                  </p>

                  <p className="mt-6 text-base md:text-lg leading-relaxed text-muted">
                    Every property is personally inspected, and every enquiry
                    is answered by someone who truly knows the home — never a
                    call centre script. Whether you&apos;re planning a weekend
                    getaway, a work trip, or a celebration with family and
                    friends, our goal remains the same: helping you find a
                    place that feels right from the moment you arrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            STATISTICS
        ========================================================= */}

        <section className="container-editorial mt-8 md:mt-16">
          <div className="border-t border-border pt-12 md:pt-14">
            <div className="grid grid-cols-1 sm:grid-cols-3">
              {/* Destination */}
              <div className="pb-10 sm:pb-0 sm:pr-10">
                <p className="font-display text-5xl md:text-6xl text-brand-red leading-none">
                  3
                </p>

                <p className="mt-3 text-sm text-muted max-w-[200px]">
                  Carefully curated destinations
                </p>
              </div>

              {/* Inspected */}
              <div className="border-t sm:border-t-0 sm:border-l border-border pt-10 sm:pt-0 sm:px-10">
                <p className="font-display text-5xl md:text-6xl text-brand-red leading-none">
                  100%
                </p>

                <p className="mt-3 text-sm text-muted max-w-[200px]">
                  Personally inspected homes
                </p>
              </div>

              {/* Support */}
              <div className="border-t sm:border-t-0 sm:border-l border-border pt-10 sm:pt-0 sm:pl-10">
                <p className="font-display text-5xl md:text-6xl text-brand-red leading-none">
                  1:1
                </p>

                <p className="mt-3 text-sm text-muted max-w-[200px]">
                  Direct guest support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FOUNDER SECTION
        ========================================================= */}

        <section className="container-editorial mt-32 md:mt-40">
          <div className="border-t border-border pt-16 md:pt-24">
            <div className="grid lg:grid-cols-12 gap-y-14 gap-x-14 items-start">
              {/* Founder Photo */}
              <div className="lg:col-span-5">
                <ScrollReveal variant="fade-up">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src="/FOUNDER.jpg"
                      alt="Atif Munshi, founder of City Homes by Aashiyaanaa"
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover"
                    />
                  </div>
                </ScrollReveal>

                <div className="mt-6">
                  <h3 className="font-display text-2xl">
                    Atif Munshi
                  </h3>

                  <p className="mt-1 text-sm text-muted">
                    Founder · City Homes by Aashiyaanaa
                  </p>
                </div>
              </div>

              {/* Founder Content */}
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="eyebrow mb-5">
                  The Person Behind City Homes
                </p>

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
                <figure className="mt-12 md:mt-14 max-w-xl border-l-2 border-brand-red pl-6">
                  <blockquote className="font-display italic text-xl md:text-2xl leading-relaxed text-balance">
                    “The finest hospitality isn&apos;t measured by luxury —
                    it&apos;s measured by how welcomed you feel.”
                  </blockquote>

                  {/* 
                  <SignatureMark
                    className="stamp-tilt mt-6 h-12 w-auto text-brand-red"
                  />
                  */}
                </figure>

                {/* Founder Facts */}
                <div className="mt-12 md:mt-14 max-w-xl grid grid-cols-2 border-t border-border pt-8 md:pt-10">
                  <div className="pr-6">
                    <p className="font-display text-3xl text-brand-red">
                      100%
                    </p>

                    <p className="mt-2 text-sm text-muted">
                      Response rate
                    </p>
                  </div>

                  <div className="border-l border-border pl-6">
                    <p className="font-display text-3xl text-brand-red">
                      &lt; 1 hr
                    </p>

                    <p className="mt-2 text-sm text-muted">
                      Response time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            OUR PROMISE
        ========================================================= */}

        <section className="mt-32 md:mt-40 bg-[#F5F3EF]">
          <div className="container-editorial py-20 md:py-28">
            <div className="grid lg:grid-cols-12 gap-y-12 gap-x-14">
              {/* Label */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-4">
                  <span className="h-px w-8 bg-brand-red" />

                  <p className="eyebrow">Our Promise</p>
                </div>
              </div>

              {/* Promise Content */}
              <div className="lg:col-span-7 lg:col-start-5">
                <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
                  Every memorable stay
                  <br />
                  begins long before
                  <br />
                  you arrive.
                </h2>

                <div className="mt-10 md:mt-12 max-w-2xl space-y-6">
                  <p className="text-base md:text-lg leading-relaxed">
                    Beautiful homes are only one part of a memorable
                    experience. Honest advice, thoughtful recommendations and
                    dependable support are what transform a booking into a stay
                    you&apos;ll genuinely look forward to.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed text-muted">
                    That&apos;s the standard we hold ourselves to with every
                    guest, every reservation and every home that becomes part
                    of City Homes by Aashiyaanaa.
                  </p>
                </div>

                <div className="mt-12 md:mt-14 flex items-center gap-4">
                  <span className="h-px w-10 bg-brand-red" />

                  <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                    City Homes by Aashiyaanaa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}