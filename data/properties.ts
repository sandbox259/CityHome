import type { Property } from "@/types/property";

/**
 * Seed property data.
 *
 * This is the single source of truth for every listing and detail page.
 * On Cloudflare Workers this module is bundled at build time — there is no
 * filesystem read at request time, which keeps it edge-runtime safe.
 */
export const properties: Property[] = [
  {
    id: "pearl-apartment",
    slug: "pearl-apartment-kurla-west-mumbai",
    name: "Pearl Apartment by Aashiyaanaa",
    type: "apartment",
    destination: "Mumbai",
    shortLocation: "Kurla West, Mumbai",
    address:
      "2nd Floor, Flat 203, A Wing, Pearl Hans Residency, LBS Marg, Navpada, Opposite Phoenix Mall, next to Naaz Hotel, Kurla West, Mumbai 400070",
    tagline: "Your home away from home",
    shortDescription:
      "A fully furnished 1 BHK city apartment near Phoenix Mall with easy access to BKC.",
    description:
      "Pearl Apartment sits quietly above the energy of Kurla West, moments from Phoenix Mall and a short drive from BKC. The one-bedroom home is fully furnished for a comfortable, low-fuss stay — a proper kitchen for home-cooked meals, a sofa-cum-bed living hall for extra guests, and self check-in for whenever you arrive. It suits business travellers who want proximity to BKC without the price of a business-district address, and small groups who prefer an apartment's privacy over a hotel room.",
    maxGuests: 6,
    bedrooms: 1,
    // TODO(product): Source material listed inconsistent bathroom counts
    // across channels. Confirm with the property owner before launch —
    // do not guess or default this value.
    bathrooms: null,
    amenities: [
      "Wi-Fi",
      "Air Conditioning",
      "Cable TV",
      "Queen Size Sofa Bed",
      "Self Check-in with Lock Box",
    ],
    facilities: [
      "Fully Furnished Apartment",
      "Living Hall with Sofa-cum-Bed",
      "Full Kitchen",
      "24/7 Security",
      "Newly Constructed Building",
      "Basic Cooking Utensils",
      "Couple Friendly",
      "Shooting Access",
      "No Parking",
    ],
    houseInformation: {
      checkIn: "1:00 PM",
      checkOut: "11:00 AM",
      parking: "not-available",
      coupleFriendly: true,
      petPolicy: "Please enquire before booking",
      smokingPolicy: "Not permitted indoors",
      eventsAllowed: false,
      shootingAccess: true,
    },
    nearbyPlaces: [
      { name: "Phoenix Marketcity", distance: "0.2 km", travelTime: "3 min walk" },
      { name: "Kurla Railway Station", distance: "1.8 km", travelTime: "7 min drive" },
      { name: "BKC (Bandra Kurla Complex)", distance: "5.5 km", travelTime: "18 min drive" },
    ],
    images: [
      { key: "properties/pearl-apartment/PEARL_1.jpg", alt: "Living hall with sofa-cum-bed at Pearl Apartment", width: 1600, height: 1067 },
      { key: "properties/pearl-apartment/PEARL_2.jpg", alt: "Fully equipped kitchen at Pearl Apartment", width: 1600, height: 1067 },
      { key: "properties/pearl-apartment/PEARL-3.jpg", alt: "Bedroom at Pearl Apartment", width: 1600, height: 1067 },
      { key: "properties/pearl-apartment/PEARL-5.jpg", alt: "Pearl Hans Residency exterior", width: 1600, height: 1067 },
      { key: "properties/pearl-apartment/PEARL-6.jpg", alt: "Pearl Hans Residency exterior", width: 1600, height: 1067 },
      { key: "properties/pearl-apartment/PEARL-7.jpg", alt: "Pearl Hans Residency exterior", width: 1600, height: 1067 },
      { key: "properties/pearl-apartment/PEARL-8.jpg", alt: "Pearl Hans Residency exterior", width: 1600, height: 1067 },
    ],
    heroImage: { key: "properties/pearl-apartment/PEARL_4.jpg", alt: "Pearl Apartment by Aashiyaanaa, Kurla West", width: 1920, height: 1280 },
    mapEmbedUrl: "https://www.google.com/maps?q=19.0713,72.8794&z=15&output=embed",
    latitude: 19.0713,
    longitude: 72.8794,
    featured: true,
    coupleFriendly: true,
    parkingAvailable: false,
    shootingAccess: true,
    experienceTags: ["city-stay", "couple-friendly"],
    hasPool: false,
    whatsappMessage: "Hi! I'd like to enquire about Pearl Apartment by Aashiyaanaa in Kurla West, Mumbai.",
    seo: {
      title: "Pearl Apartment in Kurla West, Mumbai | City Homes by Aashiyaanaa",
      description:
        "A fully furnished 1 BHK apartment near Phoenix Mall with easy access to BKC. Self check-in, full kitchen, couple friendly.",
    },
  },
  {
    id: "paradise-apartment",
    slug: "paradise-apartment-kurla-mumbai",
    name: "Paradise Apartment",
    type: "apartment",
    destination: "Mumbai",
    shortLocation: "Kurla, Mumbai",
    // TODO(product): Exact street address not supplied in source notes —
    // only "Kurla" and "heart of Mumbai city" were given. Confirm before launch.
    address: "Kurla, Mumbai — exact address to be confirmed",
    tagline: "Your home away from home",
    shortDescription:
      "A fully furnished apartment in Kurla with a garden view, chef-prepared meals available, and a bright, sunny living room.",
    description:
      "Paradise Apartment sits in the heart of Kurla and is set up as a proper executive and service apartment — fully furnished, decorated, and bright with plenty of natural light. The living room has a smart TV, air conditioning and a sofa bed, and a kitchen with all the basics for home cooking. Chef-prepared meals are also available for guests who'd rather not cook.",
    maxGuests: 7,
    bedrooms: 1,
    // TODO(product): Source notes state "1 bedrooms, 1 bathrooms" in the
    // description but "Fully Furnished two bedroom apartment" in the
    // facilities list. Confirm the true bedroom count with the property
    // owner before launch.
    bathrooms: 1,
    amenities: [
      "Wi-Fi",
      "Air Conditioning (2 units)",
      "Smart TV",
      "Queen Size Sofa Bed",
      "Self Check-in with Lock Box",
      "Car Parking",
      "Shooting Access",
    ],
    facilities: [
      "Fully Furnished Apartment",
      "Hall with Sofa Bed and Single Bed",
      "Fully Equipped Kitchen",
      "Garden View",
      "Bright, Sunny, Lots of Windows",
      "All Basic Cooking Utensils Included",
      "Quiet, Secured & Safe Neighborhood",
      "Couple Friendly",
    ],
    houseInformation: {
      // TODO(product): Standard company check-in/out times applied —
      // not specified in the source listing for this property.
      checkIn: "1:00 PM",
      checkOut: "11:00 AM",
      parking: "available",
      coupleFriendly: true,
      petPolicy: "Please enquire before booking",
      smokingPolicy: "Permitted",
      eventsAllowed: false,
      shootingAccess: true,
    },
    // TODO(product): No verified landmark distances were supplied for
    // this property — do not populate until confirmed.
    nearbyPlaces: [],
    images: [
      { key: "properties/paradise-apartment/PARADISE_1.jpg", alt: "Living room at Paradise Apartment", width: 1600, height: 1067 },
      { key: "properties/paradise-apartment/PARADISE_2.jpg", alt: "Bedroom at Paradise Apartment", width: 1600, height: 1067 },
      { key: "properties/paradise-apartment/PARADISE_3.jpg", alt: "Kitchen at Paradise Apartment", width: 1600, height: 1067 },
      { key: "properties/paradise-apartment/PARADISE_4.jpg", alt: "Bedroom at Paradise Apartment", width: 1600, height: 1067 },
      { key: "properties/paradise-apartment/PARADISE_6.jpg", alt: "Living room at Paradise Apartment", width: 1600, height: 1067 },
    ],
    heroImage: { key: "properties/paradise-apartment/PARADISE_5.jpg", alt: "Paradise Apartment, Kurla", width: 1920, height: 1280 },
    // NOTE: approximate Kurla area coordinates — not an exact property pin.
    mapEmbedUrl: "https://www.google.com/maps?q=19.0726,72.8791&z=14&output=embed",
    latitude: 19.0726,
    longitude: 72.8791,
    featured: false,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: true,
    experienceTags: ["city-stay", "couple-friendly"],
    hasPool: false,
    whatsappMessage: "Hi! I'd like to enquire about Paradise Apartment in Kurla, Mumbai.",
    seo: {
      title: "Paradise Apartment in Kurla, Mumbai | City Homes by Aashiyaanaa",
      description:
        "A fully furnished apartment in Kurla, Mumbai with a garden view, chef-prepared meals available and shooting access.",
    },
  },
  {
    id: "orchid-apartment-kurla",
    slug: "orchid-apartment-kurla-mumbai",
    name: "Orchid Apartment (Kurla)",
    type: "apartment",
    destination: "Mumbai",
    shortLocation: "Kurla East, Mumbai",
    address: "B-Wing, Flat No. 702, Sayba Group NX 32, Nehru Road, Opp. SBI Bank, Kurla East, Mumbai 400024",
    tagline: "Your home away from home",
    shortDescription:
      "A fully furnished 2 BHK apartment in Kurla East with a garden view and chef-prepared meals available.",
    description:
      "Orchid Apartment brings the same considered, homely feel as our other Kurla stays — fully furnished, modern decor, and a living room set up for family time with a smart TV, air conditioning and a sofa bed. Two bedrooms and two bathrooms make it comfortable for small groups, and the kitchen is stocked with the basics for cooking your own meals.",
    maxGuests: 10,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
      "Wi-Fi",
      "Air Conditioning (3 units)",
      "Smart TV",
      "Queen Size Sofa Bed",
      "Self Check-in with Lock Box",
      "Car Parking",
      "Shooting Access",
    ],
    facilities: [
      "Fully Furnished Two Bedroom Apartment",
      "Hall with Sofa Bed and Single Bed",
      "Fully Equipped Kitchen",
      "Garden View",
      "Bright, Sunny, Lots of Windows",
      "All Basic Cooking Utensils Included",
      "Quiet, Secured & Safe Neighborhood",
      "Couple Friendly",
    ],
    houseInformation: {
      // TODO(product): Standard company check-in/out times applied —
      // not specified in the source listing for this property.
      checkIn: "1:00 PM",
      checkOut: "11:00 AM",
      parking: "available",
      coupleFriendly: true,
      petPolicy: "Please enquire before booking",
      smokingPolicy: "Permitted",
      eventsAllowed: false,
      shootingAccess: true,
    },
    // TODO(product): No verified landmark distances were supplied for
    // this property — do not populate until confirmed.
    nearbyPlaces: [],
    images: [
      { key: "properties/orchid-apartment/ORCHID_1.jpg", alt: "Living room at Orchid Apartment", width: 1600, height: 1067 },
      { key: "properties/orchid-apartment/ORCHID_2.jpg", alt: "Bedroom at Orchid Apartment", width: 1600, height: 1067 },
      { key: "properties/orchid-apartment/ORCHID_3.jpg", alt: "Kitchen at Orchid Apartment", width: 1600, height: 1067 },
      { key: "properties/orchid-apartment/ORCHID_4.jpg", alt: "Bathroom at Orchid Apartment", width: 1600, height: 1067 },
      { key: "properties/orchid-apartment/ORCHID_5.jpg", alt: "Balcony at Orchid Apartment", width: 1600, height: 1067 },
      { key: "properties/orchid-apartment/ORCHID_6.jpg", alt: "Bedroom at Orchid Apartment", width: 1600, height: 1067 },
      { key: "properties/orchid-apartment/ORCHID_7.jpg", alt: "Living room at Orchid Apartment", width: 1600, height: 1067 },
      { key: "properties/orchid-apartment/ORCHID_8.jpg", alt: "Living room at Orchid Apartment", width: 1600, height: 1067 },
      { key: "properties/orchid-apartment/ORCHID_9.jpg", alt: "Living room at Orchid Apartment", width: 1600, height: 1067 },
      { key: "properties/orchid-apartment/ORCHID_10.jpg", alt: "Living room at Orchid Apartment", width: 1600, height: 1067 },
    ],
    heroImage: { key: "properties/orchid-apartment/ORCHID_3.jpg", alt: "Orchid Apartment, Kurla East", width: 1920, height: 1280 },
    mapEmbedUrl: "https://www.google.com/maps?q=19.0745,72.8873&z=15&output=embed",
    latitude: 19.0745,
    longitude: 72.8873,
    featured: false,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: true,
    experienceTags: ["city-stay", "group-getaway", "couple-friendly"],
    hasPool: false,
    whatsappMessage: "Hi! I'd like to enquire about Orchid Apartment in Kurla East, Mumbai.",
    seo: {
      title: "Orchid Apartment in Kurla East, Mumbai | City Homes by Aashiyaanaa",
      description:
        "A fully furnished 2 BHK apartment in Kurla East, Mumbai with a garden view, car parking and shooting access.",
    },
  },
  {
    id: "marita-apartment-bandra-west",
    slug: "marita-apartment-bandra-west-mumbai",
    name: "Marita Apartment (Bandra West)",
    type: "apartment",
    destination: "Mumbai",
    shortLocation: "Bandra West, Mumbai",
    address: "G1, Ground Floor, Marita Apartment, Sherly Rajan Road, Opp. Volleyball Ground, Off Carter Road, Bandra West, Mumbai",
    tagline: "Your home away from home",
    shortDescription:
      "A ground-floor corner apartment near Carter Road, one block from the ocean, with an outdoor sitting area and rustic decor.",
    description:
      "Marita Apartment sits on a quiet, leafy stretch off Carter Road, a block from the ocean and a short walk from Rizvi College. The ground-floor corner unit has rustic, air-conditioned interiors, an outdoor sitting area for evenings in, and a fully equipped kitchen with dining space. Chef-prepared meals and 24/7 staff support are available for guests who want a more hands-off stay.",
    maxGuests: 7,
    bedrooms: 1,
    bathrooms: 1,
    amenities: [
      "Wi-Fi",
      "Air Conditioning (2 units)",
      "Cable TV",
      "Queen Size Sofa Bed",
      "Self Check-in with Lock Box",
      "Car Parking",
      "Shooting Access",
      "Live Barbeque",
    ],
    facilities: [
      "Fully Furnished One Bedroom Apartment",
      "Garden",
      "Full Kitchen with Dining",
      "Ground Floor Corner Unit",
      "One Block from the Ocean",
      "100m from Carter Road, near Rizvi College & ICICI Bank",
      "Bright, Sunny, Lots of Windows",
      "All Basic Cooking Utensils Included",
      "Quiet, Secured & Safe Neighborhood",
      "Couple Friendly",
    ],
    houseInformation: {
      // TODO(product): Standard company check-in/out times applied —
      // not specified in the source listing for this property.
      checkIn: "1:00 PM",
      checkOut: "11:00 AM",
      parking: "available",
      coupleFriendly: true,
      petPolicy: "Please enquire before booking",
      smokingPolicy: "Permitted",
      eventsAllowed: false,
      shootingAccess: true,
    },
    nearbyPlaces: [
      { name: "Rizvi College", distance: "~100 m", travelTime: "2 min walk" },
      { name: "ICICI Bank, Carter Road", distance: "~100 m", travelTime: "2 min walk" },
    ],
    images: [
      { key: "properties/marita-apartment/MARITA_1.jpg", alt: "Living room at Marita Apartment, Bandra West", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_2.jpg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_3.jpg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_4.jpg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_5.jpg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_6.jpg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_7.jpg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_8.jpg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_9.jpg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_10.jpg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_11.jpg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_12.jpg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_13.jpg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_14.jpg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_15.jpg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_16.jpeg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_17.jpeg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_18.jpeg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_19.jpeg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_20.jpeg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_21.jpeg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_22.jpeg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_23.jpeg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_24.jpg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_26.jpg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
      { key: "properties/marita-apartment/MARITA_27.jpg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
    ],
    heroImage: { key: "properties/marita-apartment/MARITA_25.jpeg", alt: "Marita Apartment, Bandra West", width: 1920, height: 1280 },
    mapEmbedUrl: "https://www.google.com/maps?q=19.0509,72.8261&z=15&output=embed",
    latitude: 19.0509,
    longitude: 72.8261,
    featured: false,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: true,
    experienceTags: ["city-stay", "couple-friendly"],
    hasPool: false,
    whatsappMessage: "Hi! I'd like to enquire about Marita Apartment (Bandra West) in Mumbai.",
    seo: {
      title: "Marita Apartment in Bandra West, Mumbai | City Homes by Aashiyaanaa",
      description:
        "A ground-floor corner apartment near Carter Road, Bandra West, one block from the ocean with an outdoor sitting area.",
    },
  },
  {
    id: "marita-apartment-2bhk",
    slug: "marita-apartment-2bhk-bandra-west-mumbai",
    name: "Marita Apartment (2 BHK)",
    type: "apartment",
    destination: "Mumbai",
    shortLocation: "Near Carter Road, Bandra West, Mumbai",
    // TODO(product): Source notes give "2nd floor near Carter Road" but no
    // full street address — confirm exact address before launch. This is a
    // different unit within the Marita Apartment building from the
    // ground-floor Bandra West listing above.
    address: "2nd Floor, Marita Apartment, near Carter Road, Bandra West, Mumbai — exact address to be confirmed",
    tagline: "A convenient city stay near Carter Road",
    shortDescription:
      "A fully furnished 2 BHK on the 2nd floor near Carter Road, a short walk from the beach, cafés and shopping.",
    description:
      "This 2 BHK unit at Marita Apartment sits on the 2nd floor in a safe, quiet pocket close to Rizvi College — a short walk from Carter Road, the beach, cafés and shopping. The living area has a sofa-cum-bed and smart TV, and the kitchen is fully equipped for cooking. A comfortable base for both work trips and leisure stays.",
    maxGuests: 7,
    bedrooms: 2,
    bathrooms: 1,
    amenities: [
      "Wi-Fi",
      "Air Conditioning (3 units)",
      "Cable TV",
      "Queen Size Sofa Bed",
      "Self Check-in with Lock Box",
      "Car Parking",
      "Shooting Access",
    ],
    facilities: [
      "Fully Furnished Two Bedroom Apartment",
      "Garden",
      "Full Kitchen with Dining",
      "Second Floor Unit",
      "Hall with Sofa-cum-Bed",
      "One Block from the Ocean",
      "100m from Carter Road, near Rizvi College & ICICI Bank",
      "Bright, Sunny, Lots of Windows",
      "All Basic Cooking Utensils Included",
      "Quiet, Secured & Safe Neighborhood",
      "Couple Friendly",
    ],
    houseInformation: {
      // TODO(product): Standard company check-in/out times applied —
      // not specified in the source listing for this property.
      checkIn: "1:00 PM",
      checkOut: "11:00 AM",
      parking: "available",
      coupleFriendly: true,
      petPolicy: "Please enquire before booking",
      smokingPolicy: "Permitted",
      eventsAllowed: false,
      shootingAccess: true,
    },
    nearbyPlaces: [
      { name: "Rizvi College", distance: "~100 m", travelTime: "2 min walk" },
      { name: "ICICI Bank, Carter Road", distance: "~100 m", travelTime: "2 min walk" },
    ],
    images: [
      { key: "properties/marita-apartment-2bhk/MARITA_2_1.jpg", alt: "Living area at Marita Apartment 2 BHK", width: 1600, height: 1067 },
      { key: "properties/marita-apartment-2bhk/MARITA_2_2.jpg", alt: "Bedroom at Marita Apartment 2 BHK", width: 1600, height: 1067 },
      { key: "properties/marita-apartment-2bhk/MARITA_2_3.jpg", alt: "Bedroom at Marita Apartment 2 BHK", width: 1600, height: 1067 },
      { key: "properties/marita-apartment-2bhk/MARITA_2_4.jpg", alt: "Bedroom at Marita Apartment 2 BHK", width: 1600, height: 1067 },
      { key: "properties/marita-apartment-2bhk/MARITA_2_5.jpg", alt: "Bedroom at Marita Apartment 2 BHK", width: 1600, height: 1067 },
      { key: "properties/marita-apartment-2bhk/MARITA_2_6.jpg", alt: "Bedroom at Marita Apartment 2 BHK", width: 1600, height: 1067 },
      { key: "properties/marita-apartment-2bhk/MARITA_2_7.jpg", alt: "Bedroom at Marita Apartment 2 BHK", width: 1600, height: 1067 },
      { key: "properties/marita-apartment-2bhk/MARITA_2_8.jpg", alt: "Bedroom at Marita Apartment 2 BHK", width: 1600, height: 1067 },
    ],
    heroImage: { key: "properties/marita-apartment-2bhk/MARITA_2_1.jpg", alt: "Marita Apartment 2 BHK, near Carter Road", width: 1920, height: 1280 },
    mapEmbedUrl: "https://www.google.com/maps?q=19.0509,72.8261&z=15&output=embed",
    latitude: 19.0509,
    longitude: 72.8261,
    featured: false,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: true,
    experienceTags: ["city-stay", "group-getaway", "couple-friendly"],
    hasPool: false,
    whatsappMessage: "Hi! I'd like to enquire about the Marita Apartment (2 BHK) near Carter Road, Bandra West.",
    seo: {
      title: "Marita Apartment (2 BHK) near Carter Road, Bandra West | City Homes by Aashiyaanaa",
      description:
        "A fully furnished 2 BHK on the 2nd floor near Carter Road, Bandra West — a short walk from the beach, cafés and shopping.",
    },
  },
  {
    id: "crystal-apartments-bkc",
    slug: "crystal-apartments-bkc-mumbai",
    name: "Crystal Apartments (BKC)",
    type: "apartment",
    destination: "Mumbai",
    shortLocation: "Near BKC, Mumbai",
    // TODO(product): Exact street address not supplied in source notes —
    // only "near BKC" was given. Confirm before launch.
    address: "Near BKC, Mumbai — exact address to be confirmed",
    tagline: "Comfort and elegance near BKC",
    shortDescription:
      "A stylish 2 BHK near BKC with an L-shaped sofa-cum-bed, attached washrooms and balconies to both bedrooms.",
    description:
      "Crystal Apartments (BKC) is built for guests who want a homely stay without giving up polish — a stylish living room with an L-shaped sofa-cum-bed, smart TV and air conditioning, a fully equipped kitchen with a separate dining area, and two spacious bedrooms each with an attached washroom and balcony. Well suited to families and business travellers visiting BKC.",
    maxGuests: 7,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
      "Wi-Fi",
      "Air Conditioning (4 units)",
      "Smart TV",
      "Queen Size Sofa Bed",
      "Self Check-in with Lock Box",
    ],
    facilities: [
      "Fully Furnished Two Bedroom Apartment",
      "L-Shaped Sofa-cum-Bed Living Room",
      "Attached Washrooms and Balconies",
      "Fully Equipped Kitchen",
      "Dining Area",
      "Patio Area",
      "Posh Location",
      "All Basic Cooking Utensils Included",
      "Couple Friendly",
    ],
    houseInformation: {
      // TODO(product): Standard company check-in/out times applied —
      // not specified in the source listing for this property.
      checkIn: "1:00 PM",
      checkOut: "11:00 AM",
      // TODO(product): Parking was not mentioned in the source listing —
      // defaulted to not-available pending confirmation.
      parking: "not-available",
      coupleFriendly: true,
      petPolicy: "Please enquire before booking",
      smokingPolicy: "Please enquire before booking",
      eventsAllowed: false,
      shootingAccess: false,
    },
    // TODO(product): No verified landmark distances were supplied for
    // this property — do not populate until confirmed.
    nearbyPlaces: [],
    images: [
      { key: "properties/crystal-apartment/CRYSTAL_1.jpg", alt: "Living room at Crystal Apartments, BKC", width: 1600, height: 1067 },
      { key: "properties/crystal-apartment/CRYSTAL_2.jpg", alt: "Bedroom with attached balcony at Crystal Apartments", width: 1600, height: 1067 },
      { key: "properties/crystal-apartment/CRYSTAL_5.jpg", alt: "Bedroom with attached balcony at Crystal Apartments", width: 1600, height: 1067 },
      { key: "properties/crystal-apartment/CRYSTAL_6.jpg", alt: "Bedroom with attached balcony at Crystal Apartments", width: 1600, height: 1067 },
      { key: "properties/crystal-apartment/CRYSTAL_7.jpg", alt: "Bedroom with attached balcony at Crystal Apartments", width: 1600, height: 1067 },
      { key: "properties/crystal-apartment/CRYSTAL_8.jpg", alt: "Bedroom with attached balcony at Crystal Apartments", width: 1600, height: 1067 },
      { key: "properties/crystal-apartment/CRYSTAL_9.jpg", alt: "Bedroom with attached balcony at Crystal Apartments", width: 1600, height: 1067 },
      { key: "properties/crystal-apartment/CRYSTAL_10.jpg", alt: "Bedroom with attached balcony at Crystal Apartments", width: 1600, height: 1067 },
      { key: "properties/crystal-apartment/CRYSTAL_11.jpg", alt: "Bedroom with attached balcony at Crystal Apartments", width: 1600, height: 1067 },
      { key: "properties/crystal-apartment/CRYSTAL_12.jpg", alt: "Bedroom with attached balcony at Crystal Apartments", width: 1600, height: 1067 },
      { key: "properties/crystal-apartment/CRYSTAL_13.jpg", alt: "Bedroom with attached balcony at Crystal Apartments", width: 1600, height: 1067 },
      { key: "properties/crystal-apartment/CRYSTAL_14.jpg", alt: "Bedroom with attached balcony at Crystal Apartments", width: 1600, height: 1067 },
      { key: "properties/crystal-apartment/CRYSTAL_15.jpg", alt: "Bedroom with attached balcony at Crystal Apartments", width: 1600, height: 1067 },
      { key: "properties/crystal-apartment/CRYSTAL_16.jpg", alt: "Bedroom with attached balcony at Crystal Apartments", width: 1600, height: 1067 },
      { key: "properties/crystal-apartment/CRYSTAL_17.jpg", alt: "Bedroom with attached balcony at Crystal Apartments", width: 1600, height: 1067 },
    ],
    heroImage: { key: "properties/crystal-apartment/CRYSTAL_17.jpg", alt: "Crystal Apartments, near BKC", width: 1920, height: 1280 },
    // NOTE: approximate BKC area coordinates — not an exact property pin.
    mapEmbedUrl: "https://www.google.com/maps?q=19.0663,72.8686&z=15&output=embed",
    latitude: 19.0663,
    longitude: 72.8686,
    featured: false,
    coupleFriendly: true,
    parkingAvailable: false,
    shootingAccess: false,
    experienceTags: ["city-stay", "couple-friendly", "group-getaway"],
    hasPool: false,
    whatsappMessage: "Hi! I'd like to enquire about Crystal Apartments (BKC) in Mumbai.",
    seo: {
      title: "Crystal Apartments near BKC, Mumbai | City Homes by Aashiyaanaa",
      description:
        "A stylish 2 BHK near BKC with an L-shaped sofa-cum-bed living room and attached washrooms and balconies.",
    },
  },
  {
    id: "elite-apartment",
    slug: "elite-apartment-kurla-east-mumbai",
    name: "Elite Apartment",
    type: "apartment",
    destination: "Mumbai",
    shortLocation: "Kurla East, Mumbai",
    // TODO(product): Exact street address not supplied in source notes —
    // only "Kurla East, a stone's throw from BKC" was given. Confirm
    // before launch.
    address: "Kurla East, Mumbai — exact address to be confirmed",
    tagline: "Style and comfort near BKC",
    shortDescription:
      "A stylish 1 bedroom apartment in Kurla East, close to BKC, in a newly constructed building with 24-hour security.",
    description:
      "Elite Apartment is a well-connected one-bedroom stay in Kurla East, a short distance from BKC. The interiors are elegantly furnished, with a smart TV and air conditioning for comfort, and the newly constructed building has 24-hour security at both the main gate and each wing. A practical, well-appointed base for business or leisure.",
    maxGuests: 4,
    bedrooms: 1,
    // TODO(product): Facilities list states "2 washrooms" though this
    // isn't otherwise called out elsewhere in the source notes — confirm
    // with the property owner before launch.
    bathrooms: 2,
    amenities: [
      "Wi-Fi",
      "Air Conditioning",
      "Smart TV",
      "Queen Size Sofa Bed",
      "Self Check-in with Lock Box",
      "Street Parking",
      "Shooting Access",
    ],
    facilities: [
      "Fully Furnished One Bedroom Apartment",
      "Hall with Sofa Bed and Single Bed",
      "Fully Equipped Kitchen",
      "Garden View",
      "2 Washrooms",
      "All Basic Cooking Utensils Included",
      "24-Hour Security",
      "Couple Friendly",
    ],
    houseInformation: {
      // TODO(product): Standard company check-in/out times applied —
      // not specified in the source listing for this property.
      checkIn: "1:00 PM",
      checkOut: "11:00 AM",
      // TODO(product): Amenities list "Street Parking" but the facilities
      // list separately states "No Parking" — these conflict. Confirm the
      // true parking situation with the property owner before launch.
      parking: "street-parking",
      coupleFriendly: true,
      petPolicy: "Please enquire before booking",
      smokingPolicy: "Permitted",
      eventsAllowed: false,
      shootingAccess: true,
    },
    // TODO(product): No verified landmark distances were supplied for
    // this property — do not populate until confirmed.
    nearbyPlaces: [],
    images: [
      { key: "properties/elite-apartment/ELITE_1.jpg", alt: "Living room at Elite Apartment", width: 1600, height: 1067 },
      { key: "properties/elite-apartment/ELITE_2.jpg", alt: "Bedroom at Elite Apartment", width: 1600, height: 1067 },
      { key: "properties/elite-apartment/ELITE_3.jpg", alt: "Bedroom at Elite Apartment", width: 1600, height: 1067 },
      { key: "properties/elite-apartment/ELITE_4.jpg", alt: "Bedroom at Elite Apartment", width: 1600, height: 1067 },
      { key: "properties/elite-apartment/ELITE_5.jpg", alt: "Bedroom at Elite Apartment", width: 1600, height: 1067 },
      { key: "properties/elite-apartment/ELITE_6.jpg", alt: "Bedroom at Elite Apartment", width: 1600, height: 1067 },
      { key: "properties/elite-apartment/ELITE_7.jpg", alt: "Bedroom at Elite Apartment", width: 1600, height: 1067 },
      { key: "properties/elite-apartment/ELITE_8.jpg", alt: "Bedroom at Elite Apartment", width: 1600, height: 1067 },
      { key: "properties/elite-apartment/ELITE_9.jpg", alt: "Bedroom at Elite Apartment", width: 1600, height: 1067 },
      { key: "properties/elite-apartment/ELITE_10.jpg", alt: "Bedroom at Elite Apartment", width: 1600, height: 1067 },
      { key: "properties/elite-apartment/ELITE_11.jpg", alt: "Bedroom at Elite Apartment", width: 1600, height: 1067 },
      { key: "properties/elite-apartment/ELITE_12.jpg", alt: "Bedroom at Elite Apartment", width: 1600, height: 1067 },
      { key: "properties/elite-apartment/ELITE_13.jpg", alt: "Bedroom at Elite Apartment", width: 1600, height: 1067 },
    ],
    heroImage: { key: "properties/elite-apartment/ELITE_3.jpg", alt: "Elite Apartment, Kurla East", width: 1920, height: 1280 },
    // NOTE: approximate Kurla East area coordinates — not an exact property pin.
    mapEmbedUrl: "https://www.google.com/maps?q=19.0728,72.8826&z=15&output=embed",
    latitude: 19.0728,
    longitude: 72.8826,
    featured: false,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: true,
    experienceTags: ["city-stay", "couple-friendly"],
    hasPool: false,
    whatsappMessage: "Hi! I'd like to enquire about Elite Apartment in Kurla East, Mumbai.",
    seo: {
      title: "Elite Apartment in Kurla East, Mumbai | City Homes by Aashiyaanaa",
      description:
        "A stylish 1 bedroom apartment in Kurla East, close to BKC, in a newly constructed building with 24-hour security.",
    },
  },
  {
    id: "arzen-villa",
    slug: "arzen-by-aashiyaanaa-pawna-lake-lonavala",
    name: "Arzen by Aashiyaanaa",
    type: "villa",
    destination: "Pawna Lake",
    shortLocation: "Pawna Lake, Lonavala",
    address: "Pawna Lake, Lonavala, Maharashtra 410406",
    tagline: "A soft-life sanctuary by the lake",
    shortDescription:
      "A 4-bedroom pool villa near Pawna Lake with airy balconies, lush gardens and a sunset-lit pool.",
    description:
      "Arzen by Aashiyaanaa sits in the hills near Pawna Lake, with sunlight pouring into open, airy spaces and balconies made for slow mornings. Warm, modern interiors surround a private pool that turns gold at sunset, and the garden doubles as a natural spot for an evening picnic. Four bedrooms give the whole group room to spread out, whether that's family, friends, or a couple after a quiet reset.",
    // TODO(product): Source notes give bedroom/bathroom/parking counts but
    // no explicit guest capacity. Estimated from bedroom count — confirm
    // the true maximum occupancy with the property owner before launch.
    maxGuests: 10,
    bedrooms: 4,
    bathrooms: 5,
    amenities: ["Wi-Fi", "Private Pool", "Air Conditioning", "Attached Balconies", "Meal Packages", "Power Back Up"],
    facilities: [
      "Attached Balconies",
      "Lawn",
      "Meal Packages Available",
      "Power Back Up",
      "Private Swimming Pool",
      "Service on Call",
      "Viewing Deck",
      "1 Living Room",
      "3 Parking Spaces",
    ],
    houseInformation: {
      // TODO(product): Standard company check-in/out times applied —
      // not specified in the source listing for this property.
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      parking: "available",
      coupleFriendly: true,
      petPolicy: "Please enquire before booking",
      smokingPolicy: "Permitted",
      eventsAllowed: true,
      shootingAccess: false,
    },
    // TODO(product): No verified landmark distances were supplied for
    // this property — do not populate until confirmed.
    nearbyPlaces: [],
    images: [
      { key: "properties/arzen/arzen-2.jpg", alt: "Private pool at Arzen by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/arzen/arzen-3.jpg", alt: "Living space at Arzen by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/arzen/arzen-4.jpg", alt: "Bedroom at Arzen by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/arzen/arzen-5.jpg", alt: "Bedroom at Arzen by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/arzen/arzen-6.jpg", alt: "Bedroom at Arzen by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/arzen/arzen-7.jpg", alt: "Bedroom at Arzen by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/arzen/arzen-8.jpg", alt: "Bedroom at Arzen by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/arzen/arzen-9.jpg", alt: "Bedroom at Arzen by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/arzen/arzen-10.jpg", alt: "Bedroom at Arzen by Aashiyaanaa", width: 1600, height: 1067 },
    ],
    heroImage: { key: "properties/arzen/arzen-1.jpg", alt: "Arzen by Aashiyaanaa, Pawna Lake", width: 1920, height: 1280 },
    // NOTE: approximate Pawna Lake area coordinates — not an exact property pin.
    mapEmbedUrl: "https://www.google.com/maps?q=18.6873,73.4603&z=14&output=embed",
    latitude: 18.6873,
    longitude: 73.4603,
    featured: false,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: false,
    experienceTags: ["weekend-escape", "group-getaway"],
    hasPool: true,
    whatsappMessage: "Hi! I'd like to enquire about Arzen by Aashiyaanaa at Pawna Lake, Lonavala.",
    seo: {
      title: "Arzen by Aashiyaanaa, Pawna Lake, Lonavala | City Homes by Aashiyaanaa",
      description:
        "A 4-bedroom pool villa near Pawna Lake, Lonavala with airy balconies, lush gardens and a sunset-lit private pool.",
    },
  },
  {
    id: "farm-ville-villa",
    slug: "farm-ville-6bhk-kamshet-lonavala",
    name: "Farm Ville by Aashiyaanaa",
    type: "villa",
    destination: "Lonavala",
    shortLocation: "Kamshet, Lonavala",
    address: "Kamshet, Lonavala, Maharashtra 410401",
    tagline: "The ultimate 6BHK for big group energy",
    shortDescription:
      "A 6-bedroom pool villa in Kamshet with a games room and private disco, built for large group celebrations.",
    description:
      "Farm Ville by Aashiyaanaa is a large-format villa in the hills of Kamshet, designed for groups who want the run of a proper private estate — six bedrooms, a private pool, a games room and its own disco space. It sits away from the noise but close to the action, a short drive from Kamshet's paragliding spots and Vadivali Lake. Well suited to reunions, milestone birthdays and squad getaways that want room to spread out and stay loud.",
    // TODO(product): No explicit guest capacity given in source notes —
    // estimated from bedroom count. Confirm the true maximum occupancy
    // with the property owner before launch.
    maxGuests: 14,
    bedrooms: 6,
    bathrooms: 6,
    amenities: ["Wi-Fi", "Private Pool", "Air Conditioning", "Attached Balconies", "Meal Packages", "Power Back Up"],
    facilities: [
      "Attached Balconies",
      "Lawn",
      "Meal Packages Available",
      "Power Back Up",
      "Private Swimming Pool",
      "Service on Call",
      "Viewing Deck",
      "Games Room",
      "Private Discotheque",
      "1 Living Room",
      "4 Parking Spaces",
    ],
    houseInformation: {
      // TODO(product): Standard company check-in/out times applied —
      // not specified in the source listing for this property.
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      parking: "available",
      coupleFriendly: true,
      petPolicy: "Please enquire before booking",
      smokingPolicy: "Permitted",
      eventsAllowed: true,
      shootingAccess: false,
    },
    // TODO(product): Source notes mention Kamshet Paragliding Spots, Vadivali
    // Lake and Kondeshwar Temple as nearby, but no verified distances were
    // supplied — do not populate until confirmed.
    nearbyPlaces: [],
    images: [
      { key: "properties/farm-ville/farm-2.jpg", alt: "Private pool at Farm Ville by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/farm-ville/farm-3.jpg", alt: "Games room at Farm Ville by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/farm-ville/farm-4.jpg", alt: "Bedroom at Farm Ville by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/farm-ville/farm-5.jpg", alt: "Bedroom at Farm Ville by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/farm-ville/farm-6.jpg", alt: "Bedroom at Farm Ville by Aashiyaanaa", width: 1600, height: 1067 },

    ],
    heroImage: { key: "properties/farm-ville/farm-1.jpg", alt: "Farm Ville by Aashiyaanaa, Kamshet, Lonavala", width: 1920, height: 1280 },
    // NOTE: approximate Kamshet area coordinates — not an exact property pin.
    mapEmbedUrl: "https://www.google.com/maps?q=18.7522,73.4519&z=14&output=embed",
    latitude: 18.7522,
    longitude: 73.4519,
    featured: true,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: false,
    experienceTags: ["weekend-escape", "group-getaway"],
    hasPool: true,
    whatsappMessage: "Hi! I'd like to enquire about Farm Ville by Aashiyaanaa in Kamshet, Lonavala.",
    seo: {
      title: "Farm Ville by Aashiyaanaa, Kamshet, Lonavala | City Homes by Aashiyaanaa",
      description:
        "A 6-bedroom pool villa in Kamshet, Lonavala with a games room and private disco, built for large group celebrations.",
    },
  },
  {
    id: "grand-villa",
    slug: "grand-by-aashiyaanaa-tungarli-lonavala",
    name: "Grand by Aashiyaanaa",
    type: "villa",
    destination: "Lonavala",
    shortLocation: "Tungarli, Lonavala",
    address: "Tungarli, Lonavala, Maharashtra 410401",
    tagline: "A 5BHK built for large group hosting",
    shortDescription:
      "A 5-bedroom pool villa in Tungarli designed for high-capacity group stays, from corporate off-sites to big family reunions.",
    description:
      "Grand by Aashiyaanaa is built specifically for hosting at scale — a five-bedroom villa with a private pool, set in the peaceful Tungarli area close to Tungarli Lake, Shree Narayani Dham Temple and Lonavala Market. The layout comfortably accommodates 15 or more guests without feeling crowded, making it a practical choice for corporate off-sites and multi-generational family reunions alike.",
    // TODO(product): Source notes describe capacity as "comfortably host
    // 15+ guests" without a precise maximum — using 15 as the stated
    // floor. Confirm the true maximum occupancy with the property owner
    // before launch.
    maxGuests: 15,
    bedrooms: 5,
    bathrooms: 4,
    amenities: ["Wi-Fi", "Private Pool", "Air Conditioning", "Smart TV", "Meal Packages", "Refrigerator"],
    facilities: [
      "Lawn",
      "Meal Packages Available",
      "Private Swimming Pool",
      "Refrigerator",
      "Service on Call",
      "TV Cable",
      "Viewing Deck",
      "1 Living Room",
      "3 Parking Spaces",
    ],
    houseInformation: {
      // TODO(product): Standard company check-in/out times applied —
      // not specified in the source listing for this property.
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      parking: "available",
      coupleFriendly: true,
      petPolicy: "Please enquire before booking",
      smokingPolicy: "Permitted",
      eventsAllowed: true,
      shootingAccess: false,
    },
    // TODO(product): Source notes mention Tungarli Lake & Dam, Shree
    // Narayani Dham Temple and Lonavala Market as nearby, but no verified
    // distances were supplied — do not populate until confirmed.
    nearbyPlaces: [],
    images: [
      { key: "properties/grand/grand-2.jpg", alt: "Private pool at Grand by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/grand/grand-3.jpg", alt: "Living space at Grand by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/grand/grand-4.jpg", alt: "Bedroom at Grand by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/grand/grand-5.jpg", alt: "Bedroom at Grand by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/grand/grand-6.jpg", alt: "Bedroom at Grand by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/grand/grand-7.jpg", alt: "Bedroom at Grand by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/grand/grand-8.jpg", alt: "Bedroom at Grand by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/grand/grand-9.jpg", alt: "Bedroom at Grand by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/grand/grand-10.jpg", alt: "Bedroom at Grand by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/grand/grand-11.jpg", alt: "Bedroom at Grand by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/grand/grand-12.jpg", alt: "Bedroom at Grand by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/grand/grand-13.jpg", alt: "Bedroom at Grand by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/grand/grand-14.jpg", alt: "Bedroom at Grand by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/grand/grand-15.jpg", alt: "Bedroom at Grand by Aashiyaanaa", width: 1600, height: 1067 },

    ],
    heroImage: { key: "properties/grand/grand-1.jpg", alt: "Grand by Aashiyaanaa, Tungarli, Lonavala", width: 1920, height: 1280 },
    // NOTE: approximate Tungarli area coordinates — not an exact property pin.
    mapEmbedUrl: "https://www.google.com/maps?q=18.7411,73.4076&z=14&output=embed",
    latitude: 18.7411,
    longitude: 73.4076,
    featured: false,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: false,
    experienceTags: ["weekend-escape", "group-getaway"],
    hasPool: true,
    whatsappMessage: "Hi! I'd like to enquire about Grand by Aashiyaanaa in Tungarli, Lonavala.",
    seo: {
      title: "Grand by Aashiyaanaa, Tungarli, Lonavala | City Homes by Aashiyaanaa",
      description:
        "A 5-bedroom pool villa in Tungarli, Lonavala built for large group stays — corporate off-sites, reunions and celebrations.",
    },
  },
  {
    id: "imperial-villa",
    slug: "imperial-by-aashiyaanaa-tungarli-lonavala",
    name: "Imperial by Aashiyaanaa",
    type: "villa",
    destination: "Lonavala",
    shortLocation: "Tungarli, Lonavala",
    address: "Tungarli, Lonavala, Maharashtra 410401",
    tagline: "A spacious 4BHK with its own mini-waterfall",
    shortDescription:
      "A 4-bedroom pool villa in Tungarli built to host up to 20 guests, with a private mini-waterfall feature.",
    description:
      "Imperial by Aashiyaanaa is a four-bedroom villa in the quiet Tungarli area, built to comfortably host up to 20 guests — a rare find among Lonavala villas at this scale. A private pool with its own mini-waterfall sets it apart, and the location keeps you close to Tungarli Lake, Lonavala Market and Narayani Dham Temple. A strong fit for large family reunions, corporate off-sites and big group celebrations.",
    maxGuests: 20,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["Wi-Fi", "Private Pool", "Air Conditioning", "Smart TV", "Meal Packages", "Refrigerator"],
    facilities: [
      "Lawn",
      "Meal Packages Available",
      "Private Swimming Pool with Mini-Waterfall",
      "Refrigerator",
      "Service on Call",
      "TV Cable",
      "Viewing Deck",
      "1 Living Room",
      "2 Parking Spaces",
    ],
    houseInformation: {
      // TODO(product): Standard company check-in/out times applied —
      // not specified in the source listing for this property.
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      parking: "available",
      coupleFriendly: true,
      petPolicy: "Please enquire before booking",
      smokingPolicy: "Permitted",
      eventsAllowed: true,
      shootingAccess: false,
    },
    // TODO(product): Source notes mention Tungarli Lake & Dam, Lonavala
    // Market and Narayani Dham Temple as nearby, but no verified distances
    // were supplied — do not populate until confirmed.
    nearbyPlaces: [],
    images: [
      { key: "properties/imperial/imperial-2.jpg", alt: "Private pool with mini-waterfall at Imperial by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/imperial/imperial-3.jpg", alt: "Living space at Imperial by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/imperial/imperial-4.jpg", alt: "Bedroom at Imperial by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/imperial/imperial-5.jpg", alt: "Bedroom at Imperial by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/imperial/imperial-6.jpg", alt: "Bedroom at Imperial by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/imperial/imperial-7.jpg", alt: "Bedroom at Imperial by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/imperial/imperial-8.jpg", alt: "Bedroom at Imperial by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/imperial/imperial-9.jpg", alt: "Bedroom at Imperial by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/imperial/imperial-10.jpg", alt: "Bedroom at Imperial by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/imperial/imperial-11.jpg", alt: "Bedroom at Imperial by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/imperial/imperial-12.jpg", alt: "Bedroom at Imperial by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/imperial/imperial-13.jpg", alt: "Bedroom at Imperial by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/imperial/imperial-14.jpg", alt: "Bedroom at Imperial by Aashiyaanaa", width: 1600, height: 1067 },

    ],
    heroImage: { key: "properties/imperial/imperial-1.jpg", alt: "Imperial by Aashiyaanaa, Tungarli, Lonavala", width: 1920, height: 1280 },
    // NOTE: approximate Tungarli area coordinates — not an exact property pin.
    mapEmbedUrl: "https://www.google.com/maps?q=18.7411,73.4076&z=14&output=embed",
    latitude: 18.7411,
    longitude: 73.4076,
    featured: false,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: false,
    experienceTags: ["weekend-escape", "group-getaway"],
    hasPool: true,
    whatsappMessage: "Hi! I'd like to enquire about Imperial by Aashiyaanaa in Tungarli, Lonavala.",
    seo: {
      title: "Imperial by Aashiyaanaa, Tungarli, Lonavala | City Homes by Aashiyaanaa",
      description:
        "A 4-bedroom pool villa in Tungarli, Lonavala built to host up to 20 guests, with a private mini-waterfall.",
    },
  },
  {
    id: "lake-nirvana-villa",
    slug: "lake-nirvana-by-aashiyaanaa-pawna-lake-lonavala",
    name: "Lake Nirvana by Aashiyaanaa",
    type: "villa",
    destination: "Pawna Lake",
    shortLocation: "Pawna Lake, Lonavala",
    address: "Pawna Lake, Lonavala, Maharashtra 410406",
    tagline: "A 6BHK party palace on the water's edge",
    shortDescription:
      "A 6-bedroom pool villa on the edge of Pawna Lake with a games room and private dance floor, built for big celebrations.",
    description:
      "Lake Nirvana by Aashiyaanaa sits right on the edge of Pawna Lake, with mountain views and its own private dance floor for a proper group celebration. Six bedrooms and a private pool give the villa real scale, and a games room and disco space keep the energy going after dark. Close to Pawna Lake & Dam, Tikona Fort and Lohagad Fort, it's built for party crews, big family reunions and corporate team-building trips.",
    // TODO(product): No explicit guest capacity given in source notes —
    // estimated from bedroom count. Confirm the true maximum occupancy
    // with the property owner before launch.
    maxGuests: 14,
    bedrooms: 6,
    bathrooms: 6,
    amenities: ["Wi-Fi", "Private Pool", "Air Conditioning", "Attached Balconies", "Meal Packages", "Power Back Up"],
    facilities: [
      "Attached Balconies",
      "Lawn",
      "Meal Packages Available",
      "Power Back Up",
      "Private Swimming Pool",
      "Service on Call",
      "TV Cable",
      "Viewing Deck",
      "Games Room",
      "Private Discotheque",
      "1 Living Room",
      "4 Parking Spaces",
    ],
    houseInformation: {
      // TODO(product): Standard company check-in/out times applied —
      // not specified in the source listing for this property.
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      parking: "available",
      coupleFriendly: true,
      petPolicy: "Please enquire before booking",
      smokingPolicy: "Permitted",
      eventsAllowed: true,
      shootingAccess: false,
    },
    // TODO(product): Source notes mention Pawna Lake & Dam, Tikona Fort and
    // Lohagad Fort as nearby, but no verified distances were supplied — do
    // not populate until confirmed.
    nearbyPlaces: [],
    images: [
      { key: "properties/lake-nirvana/lake-2.jpeg", alt: "Private pool at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-3.jpg", alt: "Lake view from Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-4.jpg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-5.jpg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake--6.jpg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-7.jpg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-8.jpg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-9.jpg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-10.jpg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-11.jpg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-12.jpg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-13.jpg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-14.jpg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-15.jpg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-16.jpg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-17.jpeg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-18.jpeg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-19.jpg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-20.jpeg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-21.jpg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-22.jpeg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-23.jpg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-24.jpeg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-25.jpg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-26.jpg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/lake-nirvana/lake-27.jpg", alt: "Bedroom at Lake Nirvana by Aashiyaanaa", width: 1600, height: 1067 },

    ],
    heroImage: { key: "properties/lake-nirvana/lake-1.jpg", alt: "Lake Nirvana by Aashiyaanaa, Pawna Lake, Lonavala", width: 1920, height: 1280 },
    // NOTE: approximate Pawna Lake area coordinates — not an exact property pin.
    mapEmbedUrl: "https://www.google.com/maps?q=18.6873,73.4603&z=14&output=embed",
    latitude: 18.6873,
    longitude: 73.4603,
    featured: false,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: false,
    experienceTags: ["weekend-escape", "group-getaway"],
    hasPool: true,
    whatsappMessage: "Hi! I'd like to enquire about Lake Nirvana by Aashiyaanaa at Pawna Lake, Lonavala.",
    seo: {
      title: "Lake Nirvana by Aashiyaanaa, Pawna Lake, Lonavala | City Homes by Aashiyaanaa",
      description:
        "A 6-bedroom pool villa on the edge of Pawna Lake, Lonavala with a games room and private dance floor.",
    },
  },
  {
    id: "meadows-villa",
    slug: "meadows-by-aashiyaanaa-pawna-lake-lonavala",
    name: "Meadows by Aashiyaanaa",
    type: "villa",
    destination: "Pawna Lake",
    shortLocation: "Pawna Lake, Lonavala",
    address: "Pawna Lake, Lonavala, Maharashtra 410406",
    tagline: "A quiet, green pocket villa",
    shortDescription:
      "A 3-bedroom pool villa in a quiet, green setting near Pawna Lake with uninterrupted mountain views.",
    description:
      "Meadows by Aashiyaanaa is tucked into a quiet, green pocket near Pawna Lake, with uninterrupted mountain views from every room and a private garden that sets a calmer tone than the area's larger party villas. Three bedrooms and a private pool suit intimate family getaways, quiet reunions with close friends, and couples looking for genuine privacy and a homestay warmth, close to Lonavala's nature trails and historical forts.",
    // TODO(product): No explicit guest capacity given in source notes —
    // estimated from bedroom count. Confirm the true maximum occupancy
    // with the property owner before launch.
    maxGuests: 8,
    bedrooms: 3,
    bathrooms: 3,
    amenities: ["Wi-Fi", "Private Pool", "Air Conditioning", "Attached Balconies", "Meal Packages", "Power Back Up"],
    facilities: [
      "Attached Balconies",
      "Lawn",
      "Meal Packages Available",
      "Power Back Up",
      "Private Swimming Pool",
      "Private Garden",
      "Service on Call",
      "Viewing Deck",
      "1 Living Room",
      "2 Parking Spaces",
    ],
    houseInformation: {
      // TODO(product): Standard company check-in/out times applied —
      // not specified in the source listing for this property.
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      parking: "available",
      coupleFriendly: true,
      petPolicy: "Please enquire before booking",
      smokingPolicy: "Permitted",
      eventsAllowed: false,
      shootingAccess: false,
    },
    // TODO(product): Source notes mention nature trails and historical
    // forts as nearby, but no verified distances were supplied — do not
    // populate until confirmed.
    nearbyPlaces: [],
    images: [
      { key: "properties/meadows/meadows-2.jpg", alt: "Private pool at Meadows by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/meadows/meadows-3.jpg", alt: "Garden view at Meadows by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/meadows/meadows-4.jpg", alt: "Bedroom at Meadows by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/meadows/meadows-5.jpg", alt: "Bedroom at Meadows by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/meadows/meadows-6.jpg", alt: "Bedroom at Meadows by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/meadows/meadows-7.jpg", alt: "Bedroom at Meadows by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/meadows/meadows-8.jpg", alt: "Bedroom at Meadows by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/meadows/meadows-9.jpg", alt: "Bedroom at Meadows by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/meadows/meadows-10.jpg", alt: "Bedroom at Meadows by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/meadows/meadows-11.jpg", alt: "Bedroom at Meadows by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/meadows/meadows-12.jpg", alt: "Bedroom at Meadows by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/meadows/meadows-13.jpg", alt: "Bedroom at Meadows by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/meadows/meadows-14.jpg", alt: "Bedroom at Meadows by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/meadows/meadows-15.jpg", alt: "Bedroom at Meadows by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/meadows/meadows-16.jpg", alt: "Bedroom at Meadows by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/meadows/meadows-17.jpg", alt: "Bedroom at Meadows by Aashiyaanaa", width: 1600, height: 1067 },

    ],
    heroImage: { key: "properties/meadows/meadows-1.jpg", alt: "Meadows by Aashiyaanaa, Pawna Lake, Lonavala", width: 1920, height: 1280 },
    // NOTE: approximate Pawna Lake area coordinates — not an exact property pin.
    mapEmbedUrl: "https://www.google.com/maps?q=18.6873,73.4603&z=14&output=embed",
    latitude: 18.6873,
    longitude: 73.4603,
    featured: false,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: false,
    experienceTags: ["weekend-escape", "couple-friendly"],
    hasPool: true,
    whatsappMessage: "Hi! I'd like to enquire about Meadows by Aashiyaanaa at Pawna Lake, Lonavala.",
    seo: {
      title: "Meadows by Aashiyaanaa, Pawna Lake, Lonavala | City Homes by Aashiyaanaa",
      description:
        "A quiet 3-bedroom pool villa near Pawna Lake, Lonavala with uninterrupted mountain views and a private garden.",
    },
  },
  {
    id: "palace-villa",
    slug: "palace-by-aashiyaanaa-madh-island-mumbai",
    name: "Palace by Aashiyaanaa",
    type: "villa",
    destination: "Mumbai",
    shortLocation: "Madh Island, Mumbai",
    address: "Madh Island, Mumbai, Maharashtra 400061",
    tagline: "A private beachside escape without leaving the city",
    shortDescription:
      "A 3-bedroom pool villa on Madh Island blending coastal charm with designer interiors, minutes from Daana Paani Beach.",
    description:
      "Palace by Aashiyaanaa is a designer villa tucked into the quiet coastal pocket of Madh Island, close enough to central Mumbai for an easy day trip but calm enough to feel like a real escape. Three bedrooms and a private pool sit alongside a lawn built for sunset gatherings, with Daana Paani Beach a short walk away and Madh Fort and Erangal Village nearby. Well suited to beachside pool parties, family staycations and intimate friend reunions.",
    // TODO(product): No explicit guest capacity given in source notes —
    // estimated from bedroom count. Confirm the true maximum occupancy
    // with the property owner before launch.
    maxGuests: 8,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Private Pool", "Air Conditioning", "Smart TV", "Refrigerator"],
    facilities: [
      "Lawn",
      "Private Swimming Pool",
      "Refrigerator",
      "Service on Call",
      "TV Cable",
      "Viewing Deck",
      "1 Living Room",
      "2 Parking Spaces",
    ],
    houseInformation: {
      // TODO(product): Standard company check-in/out times applied —
      // not specified in the source listing for this property.
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      parking: "available",
      coupleFriendly: true,
      petPolicy: "Please enquire before booking",
      smokingPolicy: "Permitted",
      eventsAllowed: true,
      shootingAccess: false,
    },
    // TODO(product): Source notes mention Daana Paani Beach, Madh Fort and
    // Erangal Village as nearby, but no verified distances were supplied —
    // do not populate until confirmed.
    nearbyPlaces: [],
    images: [
      { key: "properties/palace/palace-2.jpg", alt: "Private pool at Palace by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/palace/palace-3.jpg", alt: "Living space at Palace by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/palace/palace-4.jpg", alt: "Bedroom at Palace by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/palace/palace-5.jpg", alt: "Bedroom at Palace by Aashiyaanaa", width: 1600, height: 1067 },

    ],
    heroImage: { key: "properties/palace/palace-1.jpg", alt: "Palace by Aashiyaanaa, Madh Island, Mumbai", width: 1920, height: 1280 },
    // NOTE: approximate Madh Island coordinates — not an exact property pin.
    mapEmbedUrl: "https://www.google.com/maps?q=19.1759,72.7883&z=14&output=embed",
    latitude: 19.1759,
    longitude: 72.7883,
    featured: true,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: false,
    experienceTags: ["weekend-escape", "group-getaway", "couple-friendly"],
    hasPool: true,
    whatsappMessage: "Hi! I'd like to enquire about Palace by Aashiyaanaa on Madh Island, Mumbai.",
    seo: {
      title: "Palace by Aashiyaanaa, Madh Island, Mumbai | City Homes by Aashiyaanaa",
      description:
        "A 3-bedroom pool villa on Madh Island, Mumbai blending coastal charm with designer interiors, minutes from the beach.",
    },
  },
  {
    id: "riviera-villa",
    slug: "riviera-by-aashiyaanaa-pawna-lake-lonavala",
    name: "Riviera by Aashiyaanaa",
    type: "villa",
    destination: "Pawna Lake",
    shortLocation: "Pawna Lake, Lonavala",
    address: "Pawna Lake, Lonavala, Maharashtra 410406",
    tagline: "A grand hillside escape where luxury slows down",
    shortDescription:
      "A 4-bedroom hillside pool villa near Pawna Lake with garden views, wraparound balconies and a sunset-lit pool.",
    description:
      "Riviera by Aashiyaanaa sits in the hills near Pawna Lake, pairing elegant interiors with soothing garden views and wraparound balcony moments. The private pool glows at sunset, and the pace here is unhurried — chai on the balcony in the morning, an afternoon with a book, easy conversation once the lights come on. Four bedrooms make it comfortable for a group of friends or family without losing that slower, hillside feel.",
    // TODO(product): No explicit guest capacity given in source notes —
    // estimated from bedroom count. Confirm the true maximum occupancy
    // with the property owner before launch.
    maxGuests: 10,
    bedrooms: 4,
    bathrooms: 5,
    amenities: ["Wi-Fi", "Private Pool", "Air Conditioning", "Attached Balconies", "Meal Packages", "Power Back Up"],
    facilities: [
      "Attached Balconies",
      "Lawn",
      "Meal Packages Available",
      "Power Back Up",
      "Private Swimming Pool",
      "Service on Call",
      "Viewing Deck",
      "1 Living Room",
      "3 Parking Spaces",
    ],
    houseInformation: {
      // TODO(product): Standard company check-in/out times applied —
      // not specified in the source listing for this property.
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      parking: "available",
      coupleFriendly: true,
      petPolicy: "Please enquire before booking",
      smokingPolicy: "Permitted",
      eventsAllowed: true,
      shootingAccess: false,
    },
    // TODO(product): No verified landmark distances were supplied for
    // this property — do not populate until confirmed.
    nearbyPlaces: [],
    images: [
      { key: "properties/riviera/riviera-2.jpg", alt: "Private pool at Riviera by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/riviera/riviera-3.jpg", alt: "Balcony view at Riviera by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/riviera/riviera-4.jpg", alt: "Bedroom at Riviera by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/riviera/riviera-5.jpg", alt: "Bedroom at Riviera by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/riviera/riviera-6.jpg", alt: "Bedroom at Riviera by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/riviera/riviera-7.jpg", alt: "Bedroom at Riviera by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/riviera/riviera-8.jpg", alt: "Bedroom at Riviera by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/riviera/riviera-9.jpg", alt: "Bedroom at Riviera by Aashiyaanaa", width: 1600, height: 1067 },

    ],
    heroImage: { key: "properties/riviera/riviera-1.jpg", alt: "Riviera by Aashiyaanaa, Pawna Lake, Lonavala", width: 1920, height: 1280 },
    // NOTE: approximate Pawna Lake area coordinates — not an exact property pin.
    mapEmbedUrl: "https://www.google.com/maps?q=18.6873,73.4603&z=14&output=embed",
    latitude: 18.6873,
    longitude: 73.4603,
    featured: false,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: false,
    experienceTags: ["weekend-escape", "group-getaway", "couple-friendly"],
    hasPool: true,
    whatsappMessage: "Hi! I'd like to enquire about Riviera by Aashiyaanaa at Pawna Lake, Lonavala.",
    seo: {
      title: "Riviera by Aashiyaanaa, Pawna Lake, Lonavala | City Homes by Aashiyaanaa",
      description:
        "A 4-bedroom hillside pool villa near Pawna Lake, Lonavala with garden views and wraparound balconies.",
    },
  },
  {
    id: "royale-villa",
    slug: "royale-by-aashiyaanaa-tungarli-lonavala",
    name: "Royale by Aashiyaanaa",
    type: "villa",
    destination: "Lonavala",
    shortLocation: "Gold Valley, Tungarli, Lonavala",
    address: "Gold Valley, Tungarli, Lonavala, Maharashtra 410401",
    tagline: "A private-palace feel in Gold Valley",
    shortDescription:
      "A 4-bedroom pool villa in Lonavala's Gold Valley with a gazebo, built for groups who want to relax in style.",
    description:
      "Royale by Aashiyaanaa sits in the well-known Gold Valley pocket of Tungarli, built around a generous private pool and a gazebo for lounging outdoors. Four bedrooms give a group real room to spread out, and the central location keeps Gold Valley's viewpoints, Tungarli Lake and Lonavala Market all close by. A strong fit for family reunions, friends' getaways and birthday parties that want a private-palace feel without the price tag.",
    // TODO(product): No explicit guest capacity given in source notes —
    // estimated from bedroom count. Confirm the true maximum occupancy
    // with the property owner before launch.
    maxGuests: 10,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["Wi-Fi", "Private Pool", "Air Conditioning", "Smart TV", "Meal Packages", "Refrigerator"],
    facilities: [
      "Lawn",
      "Meal Packages Available",
      "Private Swimming Pool",
      "Gazebo",
      "Refrigerator",
      "Service on Call",
      "TV Cable",
      "Viewing Deck",
      "1 Living Room",
      "2 Parking Spaces",
    ],
    houseInformation: {
      // TODO(product): Standard company check-in/out times applied —
      // not specified in the source listing for this property.
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      parking: "available",
      coupleFriendly: true,
      petPolicy: "Please enquire before booking",
      smokingPolicy: "Permitted",
      eventsAllowed: true,
      shootingAccess: false,
    },
    // TODO(product): Source notes mention Gold Valley Viewpoints, Tungarli
    // Lake & Dam and Lonavala Market as nearby, but no verified distances
    // were supplied — do not populate until confirmed.
    nearbyPlaces: [],
    images: [
      { key: "properties/royale/royale-2.jpg", alt: "Private pool at Royale by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/royale/royale-3.jpg", alt: "Gazebo at Royale by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/royale/royale-4.jpg", alt: "Bedroom at Royale by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/royale/royale-5.jpg", alt: "Bedroom at Royale by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/royale/royale-6.jpg", alt: "Bedroom at Royale by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/royale/royale-7.jpg", alt: "Bedroom at Royale by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/royale/royale-8.jpg", alt: "Bedroom at Royale by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/royale/royale-9.jpg", alt: "Bedroom at Royale by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/royale/royale-10.jpg", alt: "Bedroom at Royale by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/royale/royale-11.jpg", alt: "Bedroom at Royale by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/royale/royale-12.jpg", alt: "Bedroom at Royale by Aashiyaanaa", width: 1600, height: 1067 },

    ],
    heroImage: { key: "properties/royale/royale-1.jpg", alt: "Royale by Aashiyaanaa, Gold Valley, Tungarli, Lonavala", width: 1920, height: 1280 },
    // NOTE: approximate Tungarli area coordinates — not an exact property pin.
    mapEmbedUrl: "https://www.google.com/maps?q=18.7411,73.4076&z=14&output=embed",
    latitude: 18.7411,
    longitude: 73.4076,
    featured: false,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: false,
    experienceTags: ["weekend-escape", "group-getaway"],
    hasPool: true,
    whatsappMessage: "Hi! I'd like to enquire about Royale by Aashiyaanaa in Gold Valley, Tungarli, Lonavala.",
    seo: {
      title: "Royale by Aashiyaanaa, Gold Valley, Lonavala | City Homes by Aashiyaanaa",
      description:
        "A 4-bedroom pool villa in Lonavala's Gold Valley with a gazebo, built for group weekend getaways.",
    },
  },
  {
    id: "serenity-villa",
    slug: "serenity-by-aashiyaanaa-pawna-lake-lonavala",
    name: "Serenity by Aashiyaanaa",
    type: "villa",
    destination: "Pawna Lake",
    shortLocation: "Pawna Lake, Lonavala",
    address: "Pawna Lake, Lonavala, Maharashtra 410406",
    tagline: "Floor-to-ceiling glass and golden-hour views",
    shortDescription:
      "A 4-bedroom pool villa near Pawna Lake with floor-to-ceiling glass, earthy industrial design and mountain backdrops.",
    description:
      "Serenity by Aashiyaanaa is one of the more design-forward villas in our Pawna Lake collection — floor-to-ceiling glass, earthy industrial finishes, and a private pool set against incredible mountain backdrops that hold the light well into the evening. Four bedrooms suit a family reset or a stylish group getaway, and the location keeps you close to Pawna Lake, nature trails and the region's historical forts.",
    // TODO(product): No explicit guest capacity given in source notes —
    // estimated from bedroom count. Confirm the true maximum occupancy
    // with the property owner before launch.
    maxGuests: 10,
    bedrooms: 4,
    bathrooms: 5,
    amenities: ["Wi-Fi", "Private Pool", "Air Conditioning", "Attached Balconies", "Meal Packages", "Power Back Up"],
    facilities: [
      "Attached Balconies",
      "Lawn",
      "Meal Packages Available",
      "Power Back Up",
      "Private Swimming Pool",
      "Service on Call",
      "TV Cable",
      "Viewing Deck",
      "1 Living Room",
      "3 Parking Spaces",
    ],
    houseInformation: {
      // TODO(product): Standard company check-in/out times applied —
      // not specified in the source listing for this property.
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      parking: "available",
      coupleFriendly: true,
      petPolicy: "Please enquire before booking",
      smokingPolicy: "Permitted",
      eventsAllowed: true,
      shootingAccess: false,
    },
    // TODO(product): Source notes mention Pawna Lake, nature trails and
    // historical forts as nearby, but no verified distances were supplied —
    // do not populate until confirmed.
    nearbyPlaces: [],
    images: [
      { key: "properties/serenity/serenity-2.jpg", alt: "Private pool at Serenity by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/serenity/serenity-3.jpg", alt: "Floor-to-ceiling glass living space at Serenity by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/serenity/serenity-4.jpg", alt: "Bedroom at Serenity by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/serenity/serenity-5.jpg", alt: "Bedroom at Serenity by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/serenity/serenity-6.jpg", alt: "Bedroom at Serenity by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/serenity/serenity-7.jpg", alt: "Bedroom at Serenity by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/serenity/serenity-8.jpg", alt: "Bedroom at Serenity by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/serenity/serenity-9.jpg", alt: "Bedroom at Serenity by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/serenity/serenity-10.jpg", alt: "Bedroom at Serenity by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/serenity/serenity-11.jpg", alt: "Bedroom at Serenity by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/serenity/serenity-12.jpg", alt: "Bedroom at Serenity by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/serenity/serenity-13.jpg", alt: "Bedroom at Serenity by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/serenity/serenity-4.jpg", alt: "Bedroom at Serenity by Aashiyaanaa", width: 1600, height: 1067 },

    ],
    heroImage: { key: "properties/serenity/serenity-1.jpg", alt: "Serenity by Aashiyaanaa, Pawna Lake, Lonavala", width: 1920, height: 1280 },
    // NOTE: approximate Pawna Lake area coordinates — not an exact property pin.
    mapEmbedUrl: "https://www.google.com/maps?q=18.6873,73.4603&z=14&output=embed",
    latitude: 18.6873,
    longitude: 73.4603,
    featured: false,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: false,
    experienceTags: ["weekend-escape", "group-getaway", "couple-friendly"],
    hasPool: true,
    whatsappMessage: "Hi! I'd like to enquire about Serenity by Aashiyaanaa at Pawna Lake, Lonavala.",
    seo: {
      title: "Serenity by Aashiyaanaa, Pawna Lake, Lonavala | City Homes by Aashiyaanaa",
      description:
        "A 4-bedroom pool villa near Pawna Lake, Lonavala with floor-to-ceiling glass, earthy design and mountain views.",
    },
  },
  {
    id: "sky-waters-villa",
    slug: "sky-waters-by-aashiyaanaa-pawna-lake-lonavala",
    name: "Sky Waters by Aashiyaanaa",
    type: "villa",
    destination: "Pawna Lake",
    shortLocation: "Pawna Lake, Lonavala",
    address: "Pawna Lake, Lonavala, Maharashtra 410406",
    tagline: "A 5BHK built for large group takeovers",
    shortDescription:
      "A 5-bedroom pool villa near Pawna Lake with a games room, designed for large group trips and celebrations.",
    description:
      "Sky Waters by Aashiyaanaa is a five-bedroom villa in the Pawna Lake area, built for group trips that want real scale — a private pool, a games room, and a location that mixes adventure with quiet, close to Pawna Lake, historical forts and Lonavala Market. The marketing pitch is a 20-person squad trip; the confirmed room count is five bedrooms, so we'd recommend confirming exact sleeping capacity with the team before booking a large group.",
    // TODO(product): Source notes pitch this villa for a "20-person squad
    // trip" but only list 5 bedrooms — the true sleeping capacity is
    // unclear. Using a bedroom-based estimate here; confirm the real
    // maximum occupancy with the property owner before launch.
    maxGuests: 12,
    bedrooms: 5,
    bathrooms: 5,
    amenities: ["Wi-Fi", "Private Pool", "Air Conditioning", "Attached Balconies", "Meal Packages", "Power Back Up"],
    facilities: [
      "Attached Balconies",
      "Lawn",
      "Meal Packages Available",
      "Power Back Up",
      "Private Swimming Pool",
      "Service on Call",
      "Viewing Deck",
      "Games Room",
      "1 Living Room",
      "3 Parking Spaces",
    ],
    houseInformation: {
      // TODO(product): Standard company check-in/out times applied —
      // not specified in the source listing for this property.
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      parking: "available",
      coupleFriendly: true,
      petPolicy: "Please enquire before booking",
      smokingPolicy: "Permitted",
      eventsAllowed: true,
      shootingAccess: false,
    },
    // TODO(product): Source notes mention Pawna Lake, historical forts and
    // Lonavala Market as nearby, but no verified distances were supplied —
    // do not populate until confirmed.
    nearbyPlaces: [],
    images: [
      { key: "properties/sky-waters/sky-2.jpg", alt: "Private pool at Sky Waters by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sky-waters/sky-3.jpg", alt: "Games room at Sky Waters by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sky-waters/sky-4.jpg", alt: "Bedroom at Sky Waters by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sky-waters/sky-5.jpg", alt: "Bedroom at Sky Waters by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sky-waters/sky-6.jpg", alt: "Bedroom at Sky Waters by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sky-waters/sky-7.jpg", alt: "Bedroom at Sky Waters by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sky-waters/sky-8.jpg", alt: "Bedroom at Sky Waters by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sky-waters/sky-9.jpg", alt: "Bedroom at Sky Waters by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sky-waters/sky-10.jpg", alt: "Bedroom at Sky Waters by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sky-waters/sky-11.jpg", alt: "Bedroom at Sky Waters by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sky-waters/sky-12.jpg", alt: "Bedroom at Sky Waters by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sky-waters/sky-13.jpg", alt: "Bedroom at Sky Waters by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sky-waters/sky-14.jpg", alt: "Bedroom at Sky Waters by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sky-waters/sky-15.jpg", alt: "Bedroom at Sky Waters by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sky-waters/sky-16.jpg", alt: "Bedroom at Sky Waters by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sky-waters/sky-17.jpg", alt: "Bedroom at Sky Waters by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sky-waters/sky-18.jpg", alt: "Bedroom at Sky Waters by Aashiyaanaa", width: 1600, height: 1067 },
      
    ],
    heroImage: { key: "properties/sky-waters/sky-1.jpg", alt: "Sky Waters by Aashiyaanaa, Pawna Lake, Lonavala", width: 1920, height: 1280 },
    // NOTE: approximate Pawna Lake area coordinates — not an exact property pin.
    mapEmbedUrl: "https://www.google.com/maps?q=18.6873,73.4603&z=14&output=embed",
    latitude: 18.6873,
    longitude: 73.4603,
    featured: false,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: false,
    experienceTags: ["weekend-escape", "group-getaway"],
    hasPool: true,
    whatsappMessage: "Hi! I'd like to enquire about Sky Waters by Aashiyaanaa at Pawna Lake, Lonavala.",
    seo: {
      title: "Sky Waters by Aashiyaanaa, Pawna Lake, Lonavala | City Homes by Aashiyaanaa",
      description:
        "A 5-bedroom pool villa near Pawna Lake, Lonavala with a games room, built for large group trips.",
    },
  },
  {
    id: "suites-villa",
    slug: "suites-by-aashiyaanaa-pawna-lake-lonavala",
    name: "Suites by Aashiyaanaa",
    type: "villa",
    destination: "Pawna Lake",
    shortLocation: "Pawna Lake, Lonavala",
    address: "Pawna Lake, Lonavala, Maharashtra 410406",
    tagline: "A private 1BHK suite with its own pool",
    shortDescription:
      "A chic 1-bedroom suite near Pawna Lake with a private pool, built for total privacy and a quiet reset.",
    description:
      "Suites by Aashiyaanaa is a compact, design-led alternative to our larger group villas — a single-bedroom suite with its own private pool, set in a quiet, lush pocket near Pawna Lake. It's built around minimalism and total privacy rather than scale, making it a strong fit for a romantic reset, a solo recharge, or a quiet trip with one or two close friends, within easy reach of nature trails, mountain views and Lonavala Market.",
    // TODO(product): No explicit guest capacity given in source notes —
    // estimated conservatively given the single-bedroom, privacy-focused
    // positioning. Confirm the true maximum occupancy with the property
    // owner before launch.
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["Wi-Fi", "Private Pool", "Air Conditioning", "Attached Balconies", "Meal Packages", "Power Back Up"],
    facilities: [
      "Attached Balconies",
      "Meal Packages Available",
      "Power Back Up",
      "Private Swimming Pool",
      "Refrigerator",
      "Service on Call",
      "TV Cable",
      "1 Parking Space",
    ],
    houseInformation: {
      // TODO(product): Standard company check-in/out times applied —
      // not specified in the source listing for this property.
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      parking: "available",
      coupleFriendly: true,
      petPolicy: "Please enquire before booking",
      smokingPolicy: "Permitted",
      eventsAllowed: false,
      shootingAccess: false,
    },
    // TODO(product): Source notes mention nature trails, mountain views
    // and Lonavala Market as nearby, but no verified distances were
    // supplied — do not populate until confirmed.
    nearbyPlaces: [],
    images: [
      { key: "properties/suites/suites-2.jpg", alt: "Private pool at Suites by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/suites/suites-3.jpg", alt: "Living space at Suites by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/suites/suites-4.jpg", alt: "Bedroom at Suites by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/suites/suites-5.jpg", alt: "Bedroom at Suites by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/suites/suites-6.jpg", alt: "Bedroom at Suites by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/suites/suites-7.jpg", alt: "Bedroom at Suites by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/suites/suites-8.jpg", alt: "Bedroom at Suites by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/suites/suites-9.jpg", alt: "Bedroom at Suites by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/suites/suites-10.jpg", alt: "Bedroom at Suites by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/suites/suites-11.jpg", alt: "Bedroom at Suites by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/suites/suites-12.jpg", alt: "Bedroom at Suites by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/suites/suites-13.jpg", alt: "Bedroom at Suites by Aashiyaanaa", width: 1600, height: 1067 },

    ],
    heroImage: { key: "properties/suites/suites-1.jpg", alt: "Suites by Aashiyaanaa, Pawna Lake, Lonavala", width: 1920, height: 1280 },
    // NOTE: approximate Pawna Lake area coordinates — not an exact property pin.
    mapEmbedUrl: "https://www.google.com/maps?q=18.6873,73.4603&z=14&output=embed",
    latitude: 18.6873,
    longitude: 73.4603,
    featured: false,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: false,
    experienceTags: ["weekend-escape", "couple-friendly"],
    hasPool: true,
    whatsappMessage: "Hi! I'd like to enquire about Suites by Aashiyaanaa at Pawna Lake, Lonavala.",
    seo: {
      title: "Suites by Aashiyaanaa, Pawna Lake, Lonavala | City Homes by Aashiyaanaa",
      description:
        "A private 1-bedroom suite near Pawna Lake, Lonavala with its own pool, built for a quiet, romantic or solo escape.",
    },
  },
  {
    id: "sunset-villa",
    slug: "sunset-by-aashiyaanaa-pawna-lake-lonavala",
    name: "Sunset by Aashiyaanaa",
    type: "villa",
    destination: "Pawna Lake",
    shortLocation: "Pawna Lake, Lonavala",
    address: "Pawna Lake, Lonavala, Maharashtra 410406",
    tagline: "A 6BHK private party spot with its own discotheque",
    shortDescription:
      "A 6-bedroom pool villa near Pawna Lake with a private discotheque, built for large celebrations and group parties.",
    description:
      "Sunset by Aashiyaanaa is a six-bedroom villa near Pawna Lake with its own private discotheque — less a house and more a private party spot for groups who want to host a proper celebration. A private pool, games room and disco keep the energy going, and the location near Pawna Lake and Lonavala town works well for family reunions, birthday parties and company trips looking for a high-energy weekend.",
    // TODO(product): Source notes pitch this villa for a "20-person party"
    // but only list 6 bedrooms — the true sleeping capacity is unclear.
    // Using a bedroom-based estimate here; confirm the real maximum
    // occupancy with the property owner before launch.
    maxGuests: 14,
    bedrooms: 6,
    bathrooms: 6,
    amenities: ["Wi-Fi", "Private Pool", "Air Conditioning", "Attached Balconies", "Meal Packages", "Power Back Up"],
    facilities: [
      "Attached Balconies",
      "Lawn",
      "Meal Packages Available",
      "Power Back Up",
      "Private Swimming Pool",
      "Service on Call",
      "Viewing Deck",
      "Games Room",
      "Private Discotheque",
      "1 Living Room",
      "4 Parking Spaces",
    ],
    houseInformation: {
      // TODO(product): Standard company check-in/out times applied —
      // not specified in the source listing for this property.
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      parking: "available",
      coupleFriendly: true,
      petPolicy: "Please enquire before booking",
      smokingPolicy: "Permitted",
      eventsAllowed: true,
      shootingAccess: false,
    },
    // TODO(product): Source notes mention Pawna Lake, mountain views and
    // Lonavala Town as nearby, but no verified distances were supplied —
    // do not populate until confirmed.
    nearbyPlaces: [],
    images: [
      { key: "properties/sunset/sunset-2.jpg", alt: "Private pool at Sunset by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sunset/sunset-3.jpg", alt: "Private discotheque at Sunset by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sunset/sunset-4.jpg", alt: "Bedroom at Sunset by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sunset/sunset-5.jpg", alt: "Bedroom at Sunset by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sunset/sunset-6.jpg", alt: "Bedroom at Sunset by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sunset/sunset-7.jpg", alt: "Bedroom at Sunset by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sunset/sunset-8.jpg", alt: "Bedroom at Sunset by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sunset/sunset-9.jpg", alt: "Bedroom at Sunset by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sunset/sunset-10.jpg", alt: "Bedroom at Sunset by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sunset/sunset-11.jpg", alt: "Bedroom at Sunset by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sunset/sunset-12.jpg", alt: "Bedroom at Sunset by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sunset/sunset-13.jpg", alt: "Bedroom at Sunset by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sunset/sunset-14.jpg", alt: "Bedroom at Sunset by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sunset/sunset-15.jpg", alt: "Bedroom at Sunset by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sunset/sunset-16.jpg", alt: "Bedroom at Sunset by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sunset/sunset-17.jpg", alt: "Bedroom at Sunset by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/sunset/sunset-18.jpg", alt: "Bedroom at Sunset by Aashiyaanaa", width: 1600, height: 1067 },

    ],
    heroImage: { key: "properties/sunset/sunset-1.jpg", alt: "Sunset by Aashiyaanaa, Pawna Lake, Lonavala", width: 1920, height: 1280 },
    // NOTE: approximate Pawna Lake area coordinates — not an exact property pin.
    mapEmbedUrl: "https://www.google.com/maps?q=18.6873,73.4603&z=14&output=embed",
    latitude: 18.6873,
    longitude: 73.4603,
    featured: false,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: false,
    experienceTags: ["weekend-escape", "group-getaway"],
    hasPool: true,
    whatsappMessage: "Hi! I'd like to enquire about Sunset by Aashiyaanaa at Pawna Lake, Lonavala.",
    seo: {
      title: "Sunset by Aashiyaanaa, Pawna Lake, Lonavala | City Homes by Aashiyaanaa",
      description:
        "A 6-bedroom pool villa near Pawna Lake, Lonavala with a private discotheque, built for large group parties.",
    },
  },
  {
    id: "big-buddha-villa",
    slug: "the-big-buddha-khandala-lonavala",
    name: "The Big Buddha by Aashiyaanaa",
    type: "villa",
    destination: "Lonavala",
    shortLocation: "Khandala, Lonavala",
    address: "Khandala, Lonavala, Maharashtra 410401",
    tagline: "A private club feel in the heart of Khandala",
    shortDescription:
      "A 5-bedroom pool villa in Khandala with a private disco, gym and massive lawn, built for large friend groups.",
    description:
      "The Big Buddha by Aashiyaanaa is a large-format villa in the upscale Khandala area, built for groups who want to play as hard as they relax — a private pool, a private discotheque, a gym and a massive lawn for a proper barbecue night. Five bedrooms across seven bathrooms mean everyone gets their own space, and Khandala Sunset Point, Kune Falls and Lonavala Market are all close by. Suited to large friend parties who want an exclusive, private-club feel.",
    // TODO(product): No explicit guest capacity given in source notes —
    // estimated from bedroom count. Confirm the true maximum occupancy
    // with the property owner before launch.
    maxGuests: 12,
    bedrooms: 5,
    bathrooms: 7,
    amenities: ["Wi-Fi", "Private Pool", "Air Conditioning", "Attached Balconies", "Meal Packages", "Power Back Up"],
    facilities: [
      "Attached Balconies",
      "Barbeque Area",
      "Dining Area",
      "Gym",
      "Lawn",
      "Meal Packages Available",
      "Power Back Up",
      "Private Discotheque",
      "Private Swimming Pool",
      "Refrigerator",
      "Service on Call",
      "Viewing Deck",
      "Games Room",
      "1 Living Room",
      "4 Parking Spaces",
    ],
    houseInformation: {
      // TODO(product): Standard company check-in/out times applied —
      // not specified in the source listing for this property.
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      parking: "available",
      coupleFriendly: true,
      petPolicy: "Please enquire before booking",
      smokingPolicy: "Permitted",
      eventsAllowed: true,
      shootingAccess: false,
    },
    // TODO(product): Source notes mention Khandala Sunset Point, Kune
    // Falls and Lonavala Market as nearby, but no verified distances were
    // supplied — do not populate until confirmed.
    nearbyPlaces: [],
    images: [
      { key: "properties/big-buddha/buddha-2.jpg", alt: "Private pool at The Big Buddha by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/big-buddha/buddha-3.jpg", alt: "Private discotheque at The Big Buddha by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/big-buddha/buddha-4.jpg", alt: "Lawn and barbeque area at The Big Buddha by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/big-buddha/buddha-5.jpg", alt: "Dining area at The Big Buddha by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/big-buddha/buddha-6.jpg", alt: "Gym at The Big Buddha by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/big-buddha/buddha-7.jpg", alt: "Bedroom at The Big Buddha by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/big-buddha/buddha-8.jpg", alt: "Bedroom at The Big Buddha by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/big-buddha/buddha-9.jpg", alt: "Bedroom at The Big Buddha by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/big-buddha/buddha-10.jpg", alt: "Bedroom at The Big Buddha by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/big-buddha/buddha-11.jpg", alt: "Bedroom at The Big Buddha by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/big-buddha/buddha-12.jpg", alt: "Bedroom at The Big Buddha by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/big-buddha/buddha-13.jpg", alt: "Bedroom at The Big Buddha by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/big-buddha/buddha-14.jpg", alt: "Bedroom at The Big Buddha by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/big-buddha/buddha-15.jpg", alt: "Bedroom at The Big Buddha by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/big-buddha/buddha-16.jpg", alt: "Bedroom at The Big Buddha by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/big-buddha/buddha-17.jpg", alt: "Bedroom at The Big Buddha by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/big-buddha/buddha-18.jpg", alt: "Bedroom at The Big Buddha by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/big-buddha/buddha-19.jpg", alt: "Bedroom at The Big Buddha by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/big-buddha/buddha-20.jpg", alt: "Bedroom at The Big Buddha by Aashiyaanaa", width: 1600, height: 1067 },
      { key: "properties/big-buddha/buddha-21.jpg", alt: "Bedroom at The Big Buddha by Aashiyaanaa", width: 1600, height: 1067 },
      //{ key: "properties/big-buddha/buddha-7.jpg", alt: "Bedroom at The Big Buddha by Aashiyaanaa", width: 1600, height: 1067 },
      
    ],
    heroImage: { key: "properties/big-buddha/buddha-1.jpg", alt: "The Big Buddha by Aashiyaanaa, Khandala, Lonavala", width: 1920, height: 1280 },
    // NOTE: approximate Khandala area coordinates — not an exact property pin.
    mapEmbedUrl: "https://www.google.com/maps?q=18.7645,73.3855&z=14&output=embed",
    latitude: 18.7645,
    longitude: 73.3855,
    featured: false,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: false,
    experienceTags: ["weekend-escape", "group-getaway"],
    hasPool: true,
    whatsappMessage: "Hi! I'd like to enquire about The Big Buddha by Aashiyaanaa in Khandala, Lonavala.",
    seo: {
      title: "The Big Buddha by Aashiyaanaa, Khandala, Lonavala | City Homes by Aashiyaanaa",
      description:
        "A 5-bedroom pool villa in Khandala, Lonavala with a private disco, gym and massive lawn for large friend groups.",
    },
  },
];

type PropertyTypeSlug = "villas" | "apartments";

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured);
}

export function getVillas(): Property[] {
  return properties.filter((p) => p.type === "villa");
}

export function getApartments(): Property[] {
  return properties.filter((p) => p.type === "apartment");
}

export function getSimilarProperties(current: Property, count = 3): Property[] {
  return properties
    .filter((p) => p.id !== current.id && p.type === current.type)
    .sort((a, b) =>
      a.destination === current.destination ? -1 : b.destination === current.destination ? 1 : 0
    )
    .slice(0, count);
}

export function getAllSlugs(): { type: PropertyTypeSlug; slug: string }[] {
  return properties.map((p) => ({
    type: p.type === "villa" ? "villas" : "apartments",
    slug: p.slug,
  }));
}
