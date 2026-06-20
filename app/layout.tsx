import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sportify.com"),
  title: "Sportify — Your Ultimate Sports Destination",
  description:
    "Book world-class sports facilities, join coaching programs, compete in tournaments, and become part of an active sports community at Sportify — India's premier multi-sports arena.",
  keywords: [
    "sports arena",
    "cricket ground booking",
    "football turf",
    "badminton court",
    "tennis court",
    "swimming pool",
    "sports coaching",
    "tournament hosting",
    "Sportify",
    "multi sports arena",
  ],
  authors: [{ name: "Sportify" }],
  creator: "Sportify",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sportify.com",
    siteName: "Sportify",
    title: "Sportify — Your Ultimate Sports Destination",
    description:
      "Book world-class sports facilities, join coaching programs, compete in tournaments, and become part of an active sports community.",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Sportify Sports Arena",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sportify — Your Ultimate Sports Destination",
    description:
      "Book world-class sports facilities, join coaching programs, compete in tournaments.",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full`}
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#020617" />
        <Script
          id="suppress-extension-errors"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('error', function(event) {
                if (event.filename && event.filename.includes('chrome-extension://')) {
                  event.stopImmediatePropagation();
                }
              }, true);
              window.addEventListener('unhandledrejection', function(event) {
                if (event.reason && (event.reason.stack || '').includes('chrome-extension://')) {
                  event.stopImmediatePropagation();
                }
              }, true);
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              "@id": "https://sportify.com/#sportsactivitylocation",
              "name": "Sportify Sports Arena",
              "url": "https://sportify.com",
              "logo": "https://sportify.com/favicon.ico",
              "image": "https://sportify.com/images/hero.png",
              "description": "Book world-class sports facilities, join coaching programs, compete in tournaments, and become part of an active sports community at Sportify — India's premier multi-sports arena.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Outer Ring Road, Sector 5",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "postalCode": "560034",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 12.94819777553556,
                "longitude": 77.62534571932314
              },
              "telephone": "+919876543210",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "05:00",
                  "closes": "23:00"
                }
              ]
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#020617] text-[#F8FAFC] antialiased">
        {children}
      </body>
    </html>
  );
}
