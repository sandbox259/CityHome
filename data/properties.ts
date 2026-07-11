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
      { key: "properties/pearl-apartment/living-01.jpg", alt: "Living hall with sofa-cum-bed at Pearl Apartment", width: 1600, height: 1067 },
      { key: "properties/pearl-apartment/kitchen-01.jpg", alt: "Fully equipped kitchen at Pearl Apartment", width: 1600, height: 1067 },
      { key: "properties/pearl-apartment/bedroom-01.jpg", alt: "Bedroom at Pearl Apartment", width: 1600, height: 1067 },
      { key: "properties/pearl-apartment/building-01.jpg", alt: "Pearl Hans Residency exterior", width: 1600, height: 1067 },
    ],
    heroImage: { key: "properties/pearl-apartment/hero.jpg", alt: "Pearl Apartment by Aashiyaanaa, Kurla West", width: 1920, height: 1280 },
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
    id: "the-glen-villa",
    slug: "the-glen-villa-lonavala",
    name: "The Glen Villa",
    type: "villa",
    destination: "Lonavala",
    shortLocation: "Tungarli, Lonavala",
    address: "Tungarli Hill Road, Lonavala, Maharashtra 410401",
    tagline: "A private hillside retreat",
    shortDescription:
      "A four-bedroom villa with an infinity-edge pool overlooking the Tungarli valley.",
    description:
      "Set into the hillside above Tungarli Lake, The Glen Villa is built for long weekends with people you actually like spending them with. The pool deck catches the valley view at every hour, the living room opens fully onto it, and each of the four bedrooms is generous enough that nobody has to share unless they want to.",
    maxGuests: 10,
    bedrooms: 4,
    bathrooms: 4,
    amenities: ["Wi-Fi", "Private Pool", "Air Conditioning", "Smart TV", "Bluetooth Speaker", "Self Check-in"],
    facilities: ["Fully Furnished Villa", "Private Garden", "BBQ Area", "Caretaker on Call", "Power Backup", "Indoor Games"],
    houseInformation: {
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      parking: "available",
      coupleFriendly: true,
      petPolicy: "Pets allowed on request",
      smokingPolicy: "Permitted outdoors only",
      eventsAllowed: true,
      shootingAccess: true,
    },
    nearbyPlaces: [
      { name: "Tungarli Lake", distance: "0.8 km", travelTime: "4 min drive" },
      { name: "Lonavala Market", distance: "4.2 km", travelTime: "12 min drive" },
      { name: "Rajmachi Point", distance: "6.5 km", travelTime: "18 min drive" },
    ],
    images: [
      { key: "properties/the-glen-villa/pool-01.jpg", alt: "Infinity pool at The Glen Villa", width: 1600, height: 1067 },
      { key: "properties/the-glen-villa/living-01.jpg", alt: "Living room opening to the valley view", width: 1600, height: 1067 },
      { key: "properties/the-glen-villa/bedroom-01.jpg", alt: "Master bedroom at The Glen Villa", width: 1600, height: 1067 },
      { key: "properties/the-glen-villa/exterior-01.jpg", alt: "Hillside exterior of The Glen Villa", width: 1600, height: 1067 },
    ],
    heroImage: { key: "properties/the-glen-villa/hero.jpg", alt: "The Glen Villa overlooking Tungarli valley", width: 1920, height: 1280 },
    mapEmbedUrl: "https://www.google.com/maps?q=18.7411,73.4076&z=14&output=embed",
    latitude: 18.7411,
    longitude: 73.4076,
    featured: true,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: true,
    experienceTags: ["weekend-escape", "group-getaway"],
    hasPool: true,
    whatsappMessage: "Hi! I'd like to enquire about The Glen Villa in Lonavala.",
    seo: {
      title: "The Glen Villa in Lonavala | City Homes by Aashiyaanaa",
      description:
        "A four-bedroom hillside villa with a private infinity pool overlooking Tungarli valley. Ideal for weekend escapes and group getaways.",
    },
  },
  {
    id: "lakeview-pawna-villa",
    slug: "lakeview-villa-pawna",
    name: "Lakeview Villa",
    type: "villa",
    destination: "Pawna Lake",
    shortLocation: "Pawna Lake, Maval",
    address: "Near Pawna Lake, Kaswand, Maval, Pune 410406",
    tagline: "Wake up to the water",
    shortDescription: "A lakefront villa built for group stays, bonfires and slow mornings.",
    description:
      "Lakeview Villa sits a short walk from the Pawna shoreline, arranged around a wide lawn that's made for a bonfire in the evening and coffee facing the water in the morning. Five bedrooms and open common areas make it comfortable for larger groups without feeling like a hostel.",
    maxGuests: 14,
    bedrooms: 5,
    bathrooms: 5,
    amenities: ["Wi-Fi", "Lake View", "Bonfire Area", "Air Conditioning", "Self Check-in"],
    facilities: ["Fully Furnished Villa", "Large Lawn", "Outdoor Seating", "Caretaker on Call", "Power Backup"],
    houseInformation: {
      checkIn: "1:00 PM",
      checkOut: "11:00 AM",
      parking: "available",
      coupleFriendly: true,
      petPolicy: "Please enquire before booking",
      smokingPolicy: "Permitted outdoors only",
      eventsAllowed: true,
      shootingAccess: false,
    },
    nearbyPlaces: [
      { name: "Pawna Lake Shoreline", distance: "0.4 km", travelTime: "6 min walk" },
      { name: "Lohagad Fort", distance: "9 km", travelTime: "22 min drive" },
    ],
    images: [
      { key: "properties/lakeview-pawna-villa/lawn-01.jpg", alt: "Lawn and bonfire area at Lakeview Villa", width: 1600, height: 1067 },
      { key: "properties/lakeview-pawna-villa/lake-01.jpg", alt: "Pawna Lake view from the villa", width: 1600, height: 1067 },
      { key: "properties/lakeview-pawna-villa/bedroom-01.jpg", alt: "Bedroom at Lakeview Villa", width: 1600, height: 1067 },
    ],
    heroImage: { key: "properties/lakeview-pawna-villa/hero.jpg", alt: "Lakeview Villa at Pawna Lake", width: 1920, height: 1280 },
    mapEmbedUrl: "https://www.google.com/maps?q=18.6873,73.4603&z=14&output=embed",
    latitude: 18.6873,
    longitude: 73.4603,
    featured: true,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: false,
    experienceTags: ["group-getaway", "weekend-escape"],
    hasPool: false,
    whatsappMessage: "Hi! I'd like to enquire about Lakeview Villa at Pawna Lake.",
    seo: {
      title: "Lakeview Villa at Pawna Lake | City Homes by Aashiyaanaa",
      description:
        "A five-bedroom lakefront villa at Pawna Lake with a bonfire lawn, built for group getaways and weekend escapes.",
    },
  },
  {
    id: "bkc-skyline-apartment",
    slug: "bkc-skyline-apartment-mumbai",
    name: "BKC Skyline Apartment",
    type: "apartment",
    destination: "Mumbai",
    shortLocation: "Near BKC, Mumbai",
    address: "Kalanagar, Bandra East, Mumbai 400051",
    tagline: "The city, right outside your window",
    shortDescription: "A 2 BHK apartment minutes from BKC, suited to business stays and couples.",
    description:
      "BKC Skyline Apartment is built for people whose day starts in Bandra Kurla Complex — a two-bedroom home with a proper desk, fast Wi-Fi, and a skyline view that makes the early meetings a little easier to take.",
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["Wi-Fi", "Air Conditioning", "Smart TV", "Work Desk", "Self Check-in"],
    facilities: ["Fully Furnished Apartment", "Full Kitchen", "24/7 Security", "Elevator Access", "Couple Friendly"],
    houseInformation: {
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      parking: "available",
      coupleFriendly: true,
      petPolicy: "Not permitted",
      smokingPolicy: "Not permitted indoors",
      eventsAllowed: false,
      shootingAccess: false,
    },
    nearbyPlaces: [
      { name: "BKC (Bandra Kurla Complex)", distance: "1.5 km", travelTime: "6 min drive" },
      { name: "Bandra Railway Station", distance: "3.1 km", travelTime: "11 min drive" },
    ],
    images: [
      { key: "properties/bkc-skyline-apartment/living-01.jpg", alt: "Living room at BKC Skyline Apartment", width: 1600, height: 1067 },
      { key: "properties/bkc-skyline-apartment/bedroom-01.jpg", alt: "Bedroom with skyline view", width: 1600, height: 1067 },
    ],
    heroImage: { key: "properties/bkc-skyline-apartment/hero.jpg", alt: "BKC Skyline Apartment, Bandra East", width: 1920, height: 1280 },
    mapEmbedUrl: "https://www.google.com/maps?q=19.0508,72.8626&z=15&output=embed",
    latitude: 19.0508,
    longitude: 72.8626,
    featured: false,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: false,
    experienceTags: ["city-stay", "couple-friendly"],
    hasPool: false,
    whatsappMessage: "Hi! I'd like to enquire about BKC Skyline Apartment in Mumbai.",
    seo: {
      title: "BKC Skyline Apartment near BKC, Mumbai | City Homes by Aashiyaanaa",
      description:
        "A 2 BHK apartment minutes from BKC in Bandra East. Ideal for business stays and couples visiting Mumbai.",
    },
  },
  {
    id: "pinegrove-villa",
    slug: "pinegrove-villa-lonavala",
    name: "Pinegrove Villa",
    type: "villa",
    destination: "Lonavala",
    shortLocation: "Old Khandala Road, Lonavala",
    address: "Old Khandala Road, Lonavala, Maharashtra 410401",
    tagline: "Cool air, quiet pines",
    shortDescription: "A pool villa tucked into a pine grove, built for couples and small groups.",
    description:
      "Pinegrove Villa trades the bustle of central Lonavala for a quieter address among the pines, with a compact pool and a covered deck that stays cool even in peak afternoon.",
    maxGuests: 8,
    bedrooms: 3,
    bathrooms: 3,
    amenities: ["Wi-Fi", "Private Pool", "Air Conditioning", "Bluetooth Speaker"],
    facilities: ["Fully Furnished Villa", "Covered Deck", "BBQ Area", "Caretaker on Call"],
    houseInformation: {
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      parking: "available",
      coupleFriendly: true,
      petPolicy: "Pets allowed on request",
      smokingPolicy: "Permitted outdoors only",
      eventsAllowed: false,
      shootingAccess: true,
    },
    nearbyPlaces: [
      { name: "Khandala Point", distance: "3.4 km", travelTime: "10 min drive" },
      { name: "Lonavala Market", distance: "5.1 km", travelTime: "14 min drive" },
    ],
    images: [
      { key: "properties/pinegrove-villa/pool-01.jpg", alt: "Pool deck at Pinegrove Villa", width: 1600, height: 1067 },
      { key: "properties/pinegrove-villa/exterior-01.jpg", alt: "Pinegrove Villa exterior among pine trees", width: 1600, height: 1067 },
    ],
    heroImage: { key: "properties/pinegrove-villa/hero.jpg", alt: "Pinegrove Villa in Lonavala", width: 1920, height: 1280 },
    mapEmbedUrl: "https://www.google.com/maps?q=18.7645,73.3947&z=14&output=embed",
    latitude: 18.7645,
    longitude: 73.3947,
    featured: false,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: true,
    experienceTags: ["couple-friendly", "weekend-escape"],
    hasPool: true,
    whatsappMessage: "Hi! I'd like to enquire about Pinegrove Villa in Lonavala.",
    seo: {
      title: "Pinegrove Villa in Lonavala | City Homes by Aashiyaanaa",
      description:
        "A quiet pool villa among the pines on Old Khandala Road, Lonavala. Suited to couples and small groups.",
    },
  },
  {
    id: "harbour-line-apartment",
    slug: "harbour-line-apartment-mumbai",
    name: "Harbour Line Apartment",
    type: "apartment",
    destination: "Mumbai",
    shortLocation: "Chembur, Mumbai",
    address: "Chembur East, Mumbai 400071",
    tagline: "Easy in, easy out",
    shortDescription: "A well-connected 2 BHK near the Eastern Freeway, suited to groups and families.",
    description:
      "Harbour Line Apartment is built around convenience — quick access to the Eastern Freeway, the airport and central Mumbai, in a home large enough for a family or a small group travelling together.",
    maxGuests: 8,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["Wi-Fi", "Air Conditioning", "Smart TV", "Self Check-in"],
    facilities: ["Fully Furnished Apartment", "Full Kitchen", "24/7 Security", "Elevator Access"],
    houseInformation: {
      checkIn: "1:00 PM",
      checkOut: "11:00 AM",
      parking: "available",
      coupleFriendly: true,
      petPolicy: "Please enquire before booking",
      smokingPolicy: "Not permitted indoors",
      eventsAllowed: false,
      shootingAccess: false,
    },
    nearbyPlaces: [
      { name: "Chembur Railway Station", distance: "2.0 km", travelTime: "7 min drive" },
      { name: "Eastern Freeway Entry", distance: "1.2 km", travelTime: "4 min drive" },
    ],
    images: [
      { key: "properties/harbour-line-apartment/living-01.jpg", alt: "Living room at Harbour Line Apartment", width: 1600, height: 1067 },
      { key: "properties/harbour-line-apartment/bedroom-01.jpg", alt: "Bedroom at Harbour Line Apartment", width: 1600, height: 1067 },
    ],
    heroImage: { key: "properties/harbour-line-apartment/hero.jpg", alt: "Harbour Line Apartment, Chembur", width: 1920, height: 1280 },
    mapEmbedUrl: "https://www.google.com/maps?q=19.0522,72.9005&z=15&output=embed",
    latitude: 19.0522,
    longitude: 72.9005,
    featured: false,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: false,
    experienceTags: ["city-stay", "group-getaway"],
    hasPool: false,
    whatsappMessage: "Hi! I'd like to enquire about Harbour Line Apartment in Chembur, Mumbai.",
    seo: {
      title: "Harbour Line Apartment in Chembur, Mumbai | City Homes by Aashiyaanaa",
      description:
        "A well-connected 2 BHK apartment in Chembur, Mumbai with easy access to the Eastern Freeway. Suited to groups and families.",
    },
  },
  {
    id: "saffron-apartment",
    slug: "saffron-apartment-kurla-east-mumbai",
    name: "Saffron Apartment by Aashiyaanaa",
    type: "apartment",
    destination: "Mumbai",
    shortLocation: "Kurla East, Mumbai",
    address:
      "Dignity Co-op Hsg Society, Building No. 12, Kedarnath Mandir Marg, Nehru Nagar, Kurla East, Mumbai 400024",
    tagline: "Your home away from home",
    shortDescription:
      "A highly furnished 3 BHK executive apartment in Kurla East with a dedicated workspace and full kitchen.",
    description:
      "Saffron Apartment is a bright, thoughtfully decorated executive apartment set in a quiet pocket of Kurla East. The living hall is fitted out with a smart TV, air conditioning and a sofa bed, and a dedicated workspace with an office chair makes it easy to get a few hours of work done. Three bedrooms and three bathrooms give everyone their own space, and the kitchen comes fully equipped for home-cooked meals.",
    maxGuests: 7,
    bedrooms: 3,
    // TODO(product): Source notes describe this as both a "3 bedroom, 3
    // bathroom" apartment and, elsewhere in the same listing copy, a
    // "Fully Furnished one bedroom apartment". Confirm the true bedroom/
    // bathroom count with the property owner before launch.
    bathrooms: 3,
    amenities: [
      "Wi-Fi",
      "Air Conditioning (4 units)",
      "Cable TV",
      "Queen Size Sofa Bed",
      "Self Check-in with Lock Box",
      "Dedicated Workspace",
    ],
    facilities: [
      "Fully Furnished Apartment",
      "Hall with Sofa-cum-Bed",
      "3 Bedrooms & 3 Bathrooms",
      "Full Kitchen",
      "Patio Area",
      "Bright, Sunny, Lots of Windows",
      "All Basic Cooking Utensils Included",
      "Lift Access",
      "Car Parking",
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
      smokingPolicy: "Please enquire before booking",
      eventsAllowed: false,
      shootingAccess: false,
    },
    // TODO(product): Source notes reference "Great peaceful silent
    // location" but no verified landmark distances were supplied — do not
    // populate until confirmed.
    nearbyPlaces: [],
    images: [
      { key: "properties/saffron-apartment/living-01.jpg", alt: "Living hall at Saffron Apartment", width: 1600, height: 1067 },
      { key: "properties/saffron-apartment/bedroom-01.jpg", alt: "Bedroom at Saffron Apartment", width: 1600, height: 1067 },
    ],
    heroImage: { key: "properties/saffron-apartment/hero.jpg", alt: "Saffron Apartment by Aashiyaanaa, Kurla East", width: 1920, height: 1280 },
    // NOTE: approximate Kurla East area coordinates — not an exact property pin.
    mapEmbedUrl: "https://www.google.com/maps?q=19.0728,72.8826&z=15&output=embed",
    latitude: 19.0728,
    longitude: 72.8826,
    featured: false,
    coupleFriendly: true,
    parkingAvailable: true,
    shootingAccess: false,
    experienceTags: ["city-stay", "couple-friendly", "group-getaway"],
    hasPool: false,
    whatsappMessage: "Hi! I'd like to enquire about Saffron Apartment by Aashiyaanaa in Kurla East, Mumbai.",
    seo: {
      title: "Saffron Apartment in Kurla East, Mumbai | City Homes by Aashiyaanaa",
      description:
        "A highly furnished 3 BHK executive apartment in Kurla East, Mumbai with a dedicated workspace, full kitchen and car parking.",
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
      { key: "properties/paradise-apartment/living-01.jpg", alt: "Living room at Paradise Apartment", width: 1600, height: 1067 },
      { key: "properties/paradise-apartment/bedroom-01.jpg", alt: "Bedroom at Paradise Apartment", width: 1600, height: 1067 },
    ],
    heroImage: { key: "properties/paradise-apartment/hero.jpg", alt: "Paradise Apartment, Kurla", width: 1920, height: 1280 },
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
      { key: "properties/orchid-apartment-kurla/living-01.jpg", alt: "Living room at Orchid Apartment", width: 1600, height: 1067 },
      { key: "properties/orchid-apartment-kurla/bedroom-01.jpg", alt: "Bedroom at Orchid Apartment", width: 1600, height: 1067 },
    ],
    heroImage: { key: "properties/orchid-apartment-kurla/hero.jpg", alt: "Orchid Apartment, Kurla East", width: 1920, height: 1280 },
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
      { key: "properties/marita-apartment-bandra-west/living-01.jpg", alt: "Living room at Marita Apartment, Bandra West", width: 1600, height: 1067 },
      { key: "properties/marita-apartment-bandra-west/garden-01.jpg", alt: "Outdoor sitting area at Marita Apartment", width: 1600, height: 1067 },
    ],
    heroImage: { key: "properties/marita-apartment-bandra-west/hero.jpg", alt: "Marita Apartment, Bandra West", width: 1920, height: 1280 },
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
      { key: "properties/marita-apartment-2bhk/living-01.jpg", alt: "Living area at Marita Apartment 2 BHK", width: 1600, height: 1067 },
      { key: "properties/marita-apartment-2bhk/bedroom-01.jpg", alt: "Bedroom at Marita Apartment 2 BHK", width: 1600, height: 1067 },
    ],
    heroImage: { key: "properties/marita-apartment-2bhk/hero.jpg", alt: "Marita Apartment 2 BHK, near Carter Road", width: 1920, height: 1280 },
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
    id: "bonanza-apartment",
    slug: "bonanza-apartment-bandra-west-mumbai",
    name: "Bonanza Apartment",
    type: "apartment",
    destination: "Mumbai",
    shortLocation: "Near Carter Road, Bandra West, Mumbai",
    // TODO(product): Source notes give only "ground floor, one block from
    // the ocean, 100 metres from Carter Road near Rizvi College" — no full
    // street address supplied. Confirm before launch.
    address: "Ground Floor, near Carter Road, Bandra West, Mumbai — exact address to be confirmed",
    tagline: "Compact, bright and close to the coast",
    shortDescription:
      "A cosy one-room-kitchen apartment a block from the ocean, built for two.",
    description:
      "Bonanza Apartment is a compact one-room-kitchen stay on the ground floor, a block from the ocean and a short walk from Carter Road and Rizvi College. The kitchen is fully equipped with electronic appliances and basic cooking utensils, and the room is bright and sunny — a simple, well-located base for two people.",
    maxGuests: 2,
    bedrooms: 1,
    // TODO(product): Source notes describe this as a "1 Room Kitchen"
    // apartment and do not state a bathroom count. Confirm with the
    // property owner before launch.
    bathrooms: null,
    amenities: [
      "High-Speed Wi-Fi",
      "Split AC",
      "Smart TV",
      "Queen Size Bed",
      "Self Check-in with Lock Box",
      "Shooting Access",
    ],
    facilities: [
      "1 Room Kitchen Apartment",
      "Fully Equipped Kitchen",
      "Electronic Kitchen Appliances",
      "Near Carter Road",
      "Bright & Sunny",
      "All Basic Cooking Utensils Included",
      "Secured & Safe Neighborhood",
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
      smokingPolicy: "Permitted",
      eventsAllowed: false,
      shootingAccess: true,
    },
    nearbyPlaces: [
      { name: "Rizvi College", distance: "~100 m", travelTime: "2 min walk" },
    ],
    images: [
      { key: "properties/bonanza-apartment/room-01.jpg", alt: "Room and kitchen at Bonanza Apartment", width: 1600, height: 1067 },
    ],
    heroImage: { key: "properties/bonanza-apartment/hero.jpg", alt: "Bonanza Apartment, near Carter Road", width: 1920, height: 1280 },
    mapEmbedUrl: "https://www.google.com/maps?q=19.0509,72.8261&z=15&output=embed",
    latitude: 19.0509,
    longitude: 72.8261,
    featured: false,
    coupleFriendly: true,
    parkingAvailable: false,
    shootingAccess: true,
    experienceTags: ["city-stay", "couple-friendly"],
    hasPool: false,
    whatsappMessage: "Hi! I'd like to enquire about Bonanza Apartment near Carter Road, Bandra West.",
    seo: {
      title: "Bonanza Apartment near Carter Road, Bandra West | City Homes by Aashiyaanaa",
      description:
        "A cosy one-room-kitchen apartment a block from the ocean near Carter Road, Bandra West. Built for two.",
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
      { key: "properties/crystal-apartments-bkc/living-01.jpg", alt: "Living room at Crystal Apartments, BKC", width: 1600, height: 1067 },
      { key: "properties/crystal-apartments-bkc/bedroom-01.jpg", alt: "Bedroom with attached balcony at Crystal Apartments", width: 1600, height: 1067 },
    ],
    heroImage: { key: "properties/crystal-apartments-bkc/hero.jpg", alt: "Crystal Apartments, near BKC", width: 1920, height: 1280 },
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
      { key: "properties/elite-apartment/living-01.jpg", alt: "Living room at Elite Apartment", width: 1600, height: 1067 },
      { key: "properties/elite-apartment/bedroom-01.jpg", alt: "Bedroom at Elite Apartment", width: 1600, height: 1067 },
    ],
    heroImage: { key: "properties/elite-apartment/hero.jpg", alt: "Elite Apartment, Kurla East", width: 1920, height: 1280 },
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
