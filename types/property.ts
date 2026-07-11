export type PropertyType = "villa" | "apartment";

export type Destination = "Mumbai" | "Lonavala" | "Pawna Lake";

export type ExperienceTag =
  | "weekend-escape"
  | "city-stay"
  | "group-getaway"
  | "couple-friendly";

export interface NearbyPlace {
  /** Name of the landmark, station, or attraction. */
  name: string;
  /** Verified distance, e.g. "1.2 km" — never estimate this. */
  distance: string;
  /** Verified travel time, e.g. "6 min drive" — never estimate this. */
  travelTime?: string;
}

export interface HouseInformation {
  checkIn: string;
  checkOut: string;
  parking: "available" | "not-available" | "street-parking";
  coupleFriendly: boolean;
  petPolicy: string;
  smokingPolicy: string;
  eventsAllowed: boolean;
  shootingAccess: boolean;
}

export interface PropertyImage {
  /** Object key inside the R2 bucket, e.g. "properties/pearl-apartment/living-room-01.jpg" */
  key: string;
  alt: string;
  width: number;
  height: number;
}

export interface PropertySeo {
  title: string;
  description: string;
}

export interface Property {
  id: string;
  slug: string;
  name: string;
  type: PropertyType;
  destination: Destination;
  /** Short area name, e.g. "Kurla West, Mumbai" */
  shortLocation: string;
  /** Full postal address, shown in Location section only. */
  address: string;
  tagline: string;
  shortDescription: string;
  description: string;
  maxGuests: number;
  bedrooms: number;
  /**
   * Number of bathrooms.
   * TODO(product): Pearl Apartment source material had an inconsistent
   * bathroom count between listing channels. Confirm the true figure with
   * the property owner before production launch. Left as null intentionally
   * — do NOT default this to a guessed value anywhere in the UI.
   */
  bathrooms: number | null;
  amenities: string[];
  facilities: string[];
  houseInformation: HouseInformation;
  nearbyPlaces: NearbyPlace[];
  images: PropertyImage[];
  heroImage: PropertyImage;
  mapEmbedUrl: string;
  latitude: number;
  longitude: number;
  featured: boolean;
  coupleFriendly: boolean;
  parkingAvailable: boolean;
  shootingAccess: boolean;
  experienceTags: ExperienceTag[];
  hasPool: boolean;
  whatsappMessage: string;
  seo: PropertySeo;
}
