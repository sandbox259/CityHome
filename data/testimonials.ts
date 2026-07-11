export interface Testimonial {
  id: string;
  guestName: string;
  location: string;
  quote: string;
  propertyName: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    guestName: "Ananya R.",
    location: "Bengaluru",
    quote:
      "Every detail felt considered, from check-in instructions to the little welcome note. It didn't feel like a rental — it felt like someone's well-kept home.",
    propertyName: "The Glen Villa, Lonavala",
  },
  {
    id: "t2",
    guestName: "Kabir M.",
    location: "Mumbai",
    quote:
      "We booked Pearl Apartment for a work trip and ended up extending by two nights. Quiet, clean, and five minutes from everything we needed.",
    propertyName: "Pearl Apartment, Mumbai",
  },
  {
    id: "t3",
    guestName: "Simran & Arjun",
    location: "Pune",
    quote:
      "Our anniversary weekend at Pawna could not have gone smoother. The team responded within minutes every time we reached out.",
    propertyName: "Lakeview Villa, Pawna Lake",
  },
];
