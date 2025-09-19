import "./globals.css"
import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import ScrollToTop from "@/components/ScrollToTop";
import SocialIcons from "@/components/SocialIcons"

export const metadata: Metadata = {
  title: {
    default: "مكتب ذيب للاستقدام - أفضل مكاتب استقدام العمالة المنزلية بالسعودية",
    template: "%s | مكتب ذيب للاستقدام",
  },
  description:
    "مكتب ذيب للاستقدام من أفضل مكاتب استقدام العمالة المنزلية بالمملكة العربية السعودية. نوفر خدمات استقدام عمالة منزلية مدربة ومؤهلة من الفلبين والهند وبنجلاديش وكينيا وأوغندا وإثيوبيا.",
  keywords: [
    "استقدام عمالة منزلية",
    "مكتب استقدام السعودية",
    "خادمات منزلية",
    "عمالة منزلية الفلبين",
    "استقدام من الهند",
    "مكتب ذيب للاستقدام",
    "خدمات منزلية",
    "عمالة مدربة",
    "استقدام سريع",
    "خدمة عملاء مميزة",
  ],
  authors: [{ name: "مكتب ذيب للاستقدام" }],
  creator: "مكتب ذيب للاستقدام",
  publisher: "مكتب ذيب للاستقدام",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // metadataBase: new URL(""),
  alternates: {
    canonical: "/",
    languages: {
      "ar-SA": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "",
    title: "مكتب ذيب للاستقدام - أفضل مكاتب استقدام العمالة المنزلية",
    description:
      "مكتب ذيب للاستقدام من أفضل مكاتب استقدام العمالة المنزلية بالمملكة العربية السعودية. خدمات استقدام احترافية وسريعة.",
    siteName: "مكتب ذيب للاستقدام",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "مكتب ذيب للاستقدام",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مكتب ذيب للاستقدام - أفضل مكاتب استقدام العمالة المنزلية",
    description: "خدمات استقدام عمالة منزلية احترافية وسريعة من أفضل الدول",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "مكتب ذيب للاستقدام",
              description: "مكتب استقدام عمالة منزلية معتمد في المملكة العربية السعودية",
              url: "",
              telephone: "+966500050373",
              email: "theebalqahtani680@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "حي النهضة - شارع سلمان الفارسي",
                addressLocality: "الرياض",
                addressCountry: "SA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "24.7136",
                longitude: "46.6753",
              },
              openingHours: "Mo-Su 08:00-22:00",
              priceRange: "$$",
              serviceArea: {
                "@type": "Country",
                name: "Saudi Arabia",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "خدمات استقدام العمالة المنزلية",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "استقدام من الفلبين",
                      description: "خدمات استقدام عمالة منزلية من الفلبين",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "استقدام من الهند",
                      description: "خدمات استقدام عمالة منزلية من الهند",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ScrollToTop />
        <SocialIcons />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
