import type { Metadata } from "next";
import { Marcellus, Manrope } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display-family",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body-family",
  display: "swap",
});

const SITE_URL = "https://www.cityhomesbyaashiyaanaa.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "City Homes by Aashiyaanaa | Premium Villas & City Apartments",
    template: "%s | City Homes by Aashiyaanaa",
  },
  description:
    "Premium villas, apartments and curated stays across Mumbai, Lonavala, Karjat and Pawna Lake, thoughtfully chosen for weekends, celebrations and city trips.",
    icons: {
    icon: [
      {
        url: '/logo_av.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo_av.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo_av.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo_av.png',
  },
    openGraph: {
    type: "website",
    siteName: "City Homes by Aashiyaanaa",
    title: "City Homes by Aashiyaanaa | Premium Villas & City Apartments",
    description:
      "Premium villas, apartments and curated stays across Mumbai, Lonavala, Karjat and Pawna Lake.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "City Homes by Aashiyaanaa",
    description:
      "Premium villas, apartments and curated stays across Mumbai, Lonavala, Karjat and Pawna Lake.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${marcellus.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
