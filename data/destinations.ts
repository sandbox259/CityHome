export interface DestinationInfo {
  name: string;
  slug: string;
  description: string;
  heroImageKey: string;
}

export const destinations: DestinationInfo[] = [
  {
    name: "Mumbai",
    slug: "mumbai",
    description:
      "City apartments built for business trips, film shoots and long stays in the city that doesn't slow down.",
    heroImageKey: "destinations/mumbai.jpg",
  },
  {
    name: "Lonavala",
    slug: "lonavala",
    description:
      "Hillside villas and pool homes an easy drive from Mumbai and Pune, made for weekends away.",
    heroImageKey: "destinations/lonavala.jpg",
  },
  {
    name: "Pawna Lake",
    slug: "pawna-lake",
    description:
      "Lakefront villas built around bonfires, big groups and slow mornings facing the water.",
    heroImageKey: "destinations/pawna-lake.jpg",
  },
];
