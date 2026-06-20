import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
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
        <script
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
      </head>
      <body className="min-h-full flex flex-col bg-[#020617] text-[#F8FAFC] antialiased">
        {children}
      </body>
    </html>
  );
}
