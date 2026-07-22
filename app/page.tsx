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
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "@/components/ScrollReveal";
import { Filmstrip } from "@/components/Filmstrip";
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

const VISUAL_MOMENTS = [
  { key: "properties/lake-nirvana/lake-8.jpg", alt: "Aashiyaanaa lifestyle moment" },
  { key: "properties/elite-apartment/ELITE_13.jpg", alt: "Aashiyaanaa lifestyle moment" },
  { key: "properties/serenity/serenity-2.jpg", alt: "Aashiyaanaa lifestyle moment" },
  { key: "properties/farm-ville/farm-6.jpeg", alt: "Aashiyaanaa lifestyle moment" },
  { key: "properties/arzen/arzen-6.jpg", alt: "A villa interior from the collection" },
  { key: "properties/suites/suites-4.jpg", alt: "A suite from the collection" },
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
          <ScrollReveal variant="fade-up">
            <SectionHeading
              eyebrow="City Homes by Aashiyaanaa"
              title="More than a place to stay."
              align="center"
              className="mx-auto"
            />
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.1}>
            <p className="mt-8 max-w-2xl mx-auto text-center text-base md:text-lg leading-relaxed text-muted">
              We curate a small, considered collection of villas and city
              apartments across Mumbai, Lonavala and Pawna Lake — each one
              chosen for its design, its setting and the way it makes people
              feel the moment they walk in. No two homes in our collection look
              alike, and none of them feel like a hotel.
            </p>
          </ScrollReveal>
        </section>

        {/* Featured Properties */}
        <section className="container-editorial pb-24 md:pb-32">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <SectionHeading eyebrow="The Collection" title="Featured stays" />
            <Link href="/stays" className="underline-hover text-sm font-semibold inline-flex items-center gap-1">
              View all stays <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <ScrollRevealGroup
            stagger={0.15}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
          >
            {featured.slice(0, 3).map((property) => (
              <ScrollRevealItem key={property.id}>
                <PropertyCard property={property} />
              </ScrollRevealItem>
            ))}
          </ScrollRevealGroup>
        </section>

        {/* Stay by Experience */}
        <section className="relative bg-charcoal border-y border-border py-24 md:py-32">
          <div className="grain absolute inset-0" />
          <div className="container-editorial relative">
            <ScrollReveal variant="fade-up">
              <SectionHeading eyebrow="Find Your Fit" title="Stay by experience" titleClassName="text-white" className="mb-12" />
            </ScrollReveal>
            <ScrollRevealGroup
              stagger={0.1}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {EXPERIENCES.map((exp) => (
                <ScrollRevealItem key={exp.tag} variant="fade">
                  <Link href={`/stays?experience=${exp.tag}`} className="group relative block aspect-[3/4] overflow-hidden">
                    <Image
                      src={r2ImageUrl(exp.imageKey)}
                      alt={exp.title}
                      fill
                      sizes={CARD_SIZES}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                    <span className="absolute bottom-5 left-5 text-white font-display text-xl transition-transform duration-500 ease-out group-hover:-translate-y-1">
                      {exp.title}
                    </span>
                  </Link>
                </ScrollRevealItem>
              ))}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* Why Choose Aashiyaanaa */}
        <section className="container-editorial mt-24 md:mt-32">
          <ScrollReveal variant="fade-up">
            <SectionHeading eyebrow="Why Aashiyaanaa" title="What sets a stay apart" align="center" className="mx-auto mb-16" />
          </ScrollReveal>
          <ScrollRevealGroup
            stagger={0.1}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {VALUE_PROPS.map((prop) => (
              <ScrollRevealItem key={prop.title} className="text-center sm:text-left">
                <prop.icon className="text-brand-red mx-auto sm:mx-0" size={28} aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl">{prop.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{prop.copy}</p>
              </ScrollRevealItem>
            ))}
          </ScrollRevealGroup>
        </section>

        {/* Signature Property Feature */}
        {pearl && (
          <section className="relative bg-charcoal text-white mt-24 md:mt-32">
            <div className="grain absolute inset-0" />
            <div className="container-editorial py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
              <ScrollReveal variant="mask" className="order-2 lg:order-1 aspect-[4/5]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={r2ImageUrl(pearl.heroImage.key)}
                    alt={pearl.heroImage.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal variant="fade-up" className="order-1 lg:order-2">
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
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* Destinations */}
        <section className="container-editorial py-24 md:py-32">
          <ScrollReveal variant="fade-up">
            <SectionHeading eyebrow="Where We Are" title="Destinations" className="mb-12" />
          </ScrollReveal>
          <ScrollRevealGroup
            stagger={0.12}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {destinations.map((destination) => (
              <ScrollRevealItem key={destination.slug}>
                <DestinationCard destination={destination} />
              </ScrollRevealItem>
            ))}
          </ScrollRevealGroup>
        </section>

        {/* Testimonials */}
        <section className="bg-surface border-y border-border py-24 md:py-32">
          <div className="container-editorial">
            <ScrollReveal variant="fade-up">
              <TestimonialSection testimonials={testimonials} />
            </ScrollReveal>
          </div>
        </section>

        {/* Visual Moments — signature scroll-scrubbed filmstrip */}
        <section className="py-24 md:py-32">
          <div className="container-editorial mb-12">
            <ScrollReveal variant="fade-up">
              <SectionHeading eyebrow="Visual Moments" title="A feel for the collection" />
            </ScrollReveal>
          </div>
          <Filmstrip images={VISUAL_MOMENTS} />
        </section>

        {/* Final CTA */}
        <section className="relative bg-charcoal text-white py-24 md:py-32">
          <div className="grain absolute inset-0" />
          <div className="container-editorial text-center relative">
            <ScrollReveal variant="fade-up">
              <h2 className="font-display text-4xl md:text-6xl text-balance">
                Your next stay starts here.
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={0.1}>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href="/stays" className="bg-brand-red text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-brand-red-dark transition-colors">
                  Explore Properties
                </Link>
                <Link href="/contact" className="border border-white/60 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:border-white transition-colors">
                  Make an Enquiry
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
