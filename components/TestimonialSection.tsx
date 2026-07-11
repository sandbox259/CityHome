"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialSection({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const go = (dir: 1 | -1) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Guest testimonials"
      className="max-w-3xl mx-auto text-center"
    >
      <Quote className="mx-auto text-brand-red" size={32} aria-hidden="true" />

      <p
        aria-live="polite"
        className="mt-6 font-display text-2xl md:text-3xl leading-relaxed text-foreground text-balance"
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <p className="mt-6 text-sm text-muted">
        <span className="font-semibold text-foreground">{testimonial.guestName}</span>
        {" · "}
        {testimonial.location}
        {" · "}
        {testimonial.propertyName}
      </p>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => go(-1)}
          className="p-2 border border-border rounded-full hover:border-charcoal transition-colors"
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>

        <div className="flex gap-2" role="tablist" aria-label="Select testimonial">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={i === index}
              aria-label={`Testimonial ${i + 1} of ${testimonials.length}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-brand-red" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => go(1)}
          className="p-2 border border-border rounded-full hover:border-charcoal transition-colors"
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
