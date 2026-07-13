import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Home as HomeIcon, HeartHandshake, MessageSquareHeart } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { PropertyCard } from "@/components/PropertyCard";
import { DestinationCard } from "@/components/DestinationCard";
import { TestimonialSection } from "@/components/TestimonialSection";
import { getFeaturedProperties, getPropertyBySlug } from "@/data/properties";
import { destinations } from "@/data/destinations";
import { testimonials } from "@/data/testimonials";
import { r2ImageUrl, CARD_SIZES } from "@/lib/images";

const EXPERIENCES = [
  { title: "Weekend Escapes", tag: "weekend-escape" as const, imageKey: "properties/arzen/arzen-6.jpg" },
  { title: "City Stays", tag: "city-stay" as const, imageKey: "properties/elite-apartment/ELITE_13.jpg" },
  { title: "Group Getaways", tag: "group-getaway" as const, imageKey: "properties/grand/grand-12.jpeg" },
  { title: "Couple-Friendly Stays", tag: "couple-friendly" as const, imageKey: "properties/suites/suites-4.jpg" },
];

const VALUE_PROPS = [
  { icon: HomeIcon, title: "Carefully Curated Homes", copy: "Every property is personally vetted for design, comfort and upkeep before it joins the collection." },
  { icon: Compass, title: "Prime Locations", copy: "Homes chosen for genuine proximity to what matters — lakes, hills, business districts and transit." },
  { icon: HeartHandshake, title: "Guest-First Hospitality", copy: "Clear communication and a team that's reachable before, during and after your stay." },
  { icon: MessageSquareHeart, title: "Seamless Enquiry Support", copy: "A straightforward enquiry process, with real answers over WhatsApp or email, fast." },
];

export default function HomePage() {
  const featured = getFeaturedProperties();
  const pearl = getPropertyBySlug("pearl-apartment-kurla-west-mumbai");

  return (
    <>
      <Header transparentOnTop />
      <main>
        <Hero />

        {/* Brand Introduction */}
        <section className="container-editorial py-24 md:py-32">
          <SectionHeading
            eyebrow="City Homes by Aashiyaanaa"
            title="More than a place to stay."
            align="center"
            className="mx-auto"
          />
          <p className="mt-8 max-w-2xl mx-auto text-center text-base md:text-lg leading-relaxed text-muted">
            We curate a small, considered collection of villas and city
            apartments across Mumbai, Lonavala and Pawna Lake — each one
            chosen for its design, its setting and the way it makes people
            feel the moment they walk in. No two homes in our collection look
            alike, and none of them feel like a hotel.
          </p>
        </section>

        {/* Featured Properties */}
        <section className="container-editorial pb-24 md:pb-32">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <SectionHeading eyebrow="The Collection" title="Featured stays" />
            <Link href="/stays" className="underline-hover text-sm font-semibold inline-flex items-center gap-1">
              View all stays <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {featured.slice(0, 3).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        {/* Stay by Experience */}
        <section className="bg-charcoal border-y border-border py-24 md:py-32">
          <div className="container-editorial">
            <SectionHeading eyebrow="Find Your Fit" title="Stay by experience" titleClassName="text-white" className="mb-12" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {EXPERIENCES.map((exp) => (
                <Link key={exp.tag} href={`/stays?experience=${exp.tag}`} className="group relative block aspect-[3/4] overflow-hidden">
                  <Image
                    src={r2ImageUrl(exp.imageKey)}
                    alt={exp.title}
                    fill
                    sizes={CARD_SIZES}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                  <span className="absolute bottom-5 left-5 text-white font-display text-xl">
                    {exp.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Aashiyaanaa */}
        <section className="container-editorial py-24 md:py-32">
          <SectionHeading eyebrow="Why Aashiyaanaa" title="What sets a stay apart" align="center" className="mx-auto mb-16" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {VALUE_PROPS.map((prop) => (
              <div key={prop.title} className="text-center sm:text-left">
                <prop.icon className="text-brand-red mx-auto sm:mx-0" size={28} aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl">{prop.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{prop.copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Signature Property Feature */}
        {/* {pearl && (
          <section className="bg-charcoal text-white">
            <div className="container-editorial py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/5] order-2 lg:order-1">
                <Image
                  src={r2ImageUrl(pearl.heroImage.key)}
                  alt={pearl.heroImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <p className="eyebrow mb-4">Signature Stay</p>
                <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
                  {pearl.name}
                </h2>
                <p className="mt-3 text-white/60 text-sm uppercase tracking-widest">{pearl.tagline}</p>
                <p className="mt-6 text-white/80 leading-relaxed max-w-md">
                  {pearl.shortDescription}
                </p>
                <Link
                  href={`/apartments/${pearl.slug}`}
                  className="mt-8 inline-flex items-center gap-2 border border-white/60 text-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wide hover:border-white transition-colors"
                >
                  Explore Pearl Apartment <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>
        )} */}

        {/* Destinations */}
        <section className="container-editorial py-24 md:py-32">
          <SectionHeading eyebrow="Where We Are" title="Destinations" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {destinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-surface border-y border-border py-24 md:py-32">
          <div className="container-editorial">
            <TestimonialSection testimonials={testimonials} />
          </div>
        </section>

        {/* Visual Moments */}
        {/* <section className="container-editorial py-24 md:py-32">
          <SectionHeading eyebrow="Visual Moments" title="A feel for the collection" className="mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "home/mosaic-01.jpg",
              "home/mosaic-02.jpg",
              "home/mosaic-03.jpg",
              "home/mosaic-04.jpg",
            ].map((key, i) => (
              <div key={key} className={`relative overflow-hidden ${i % 3 === 0 ? "aspect-square md:row-span-2 md:aspect-auto" : "aspect-square"}`}>
                <Image src={r2ImageUrl(key)} alt="Aashiyaanaa lifestyle moment" fill sizes="25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </section> */}

        {/* Final CTA */}
        <section className="bg-charcoal text-white py-24 md:py-32">
          <div className="container-editorial text-center">
            <h2 className="font-display text-4xl md:text-6xl text-balance">
              Your next stay starts here.
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/stays" className="bg-brand-red text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-brand-red-dark transition-colors">
                Explore Properties
              </Link>
              <Link href="/contact" className="border border-white/60 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:border-white transition-colors">
                Make an Enquiry
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
