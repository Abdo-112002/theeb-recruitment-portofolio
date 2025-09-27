import "./globals.css";
import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Suspense } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import SocialIcons from "@/components/SocialIcons";

const BASE_URL = "https://theebrecruitment.com";
const SITE_NAME = "مكتب ذيب القحطاني للاستقدام";
const SITE_DESCRIPTION =
  "مكتب ذيب القحطاني للاستقدام من أفضل مكاتب استقدام العمالة المنزلية بالمملكة العربية السعودية. نوفر خدمات استقدام عمالة منزلية مدربة ومؤهلة من الفلبين، الهند، بنجلاديش، كينيا، أوغندا، وإثيوبيا.";
const PHONE = "+9665555908232";
const EMAIL = "theebalqahtani680@gmail.com";
const ADDRESS_LINE = "شارع الصحابة - حي إشبيلية - الرياض";

// كل الصور هنستخدم zeebLogo.png من public root
const LOGO_PUBLIC = `${BASE_URL}/zeebLogo.png`;
const OG_IMAGES = [
  { url: LOGO_PUBLIC, width: 1200, height: 630, alt: SITE_NAME },
];

// keywords
const KEYWORDS_PRIMARY = [
  "استقدام عمالة منزلية",
  "مكتب استقدام السعودية",
  "خادمات منزلية",
  "عمالة منزلية الفلبين",
  "استقدام من الهند",
  "مكتب ذيب القحطاني للاستقدام",
];
const KEYWORDS_SECONDARY = [
  "خدمات منزلية",
  "عمالة مدربة",
  "استقدام سريع",
  "خدمة عملاء مميزة",
  "استقدام بنجلاديش",
  "استقدام كينيا",
  "استقدام أوغندا",
  "استقدام إثيوبيا",
];

// services
const SERVICES = [
  {
    name: "خدمة عملاء مميزة",
    description:
      "فريق خدمة العملاء معكم خطوة بخطوة بدءاً من طلب استقدام عمالة منزلية حتى وصول العمالة إليكم",
  },
  {
    name: "خدمات استقدام رقمية متكاملة",
    description: "خطوات بسيطة تفصلك عن استقدام العمالة المنزلية التي تحتاجها",
  },
  {
    name: "المتابعة المستمرة والتطوير الشامل",
    description:
      "نوفر كافة الإمكانيات لمتابعة احتياجات العملاء وتسهيل عملهم بسرعة فائقة",
  },
];

// countries
const COUNTRIES = [
  {
    name: "الفلبين",
    price: "13000",
    currency: "ريال",
    duration: "30-45 يوم",
    features: ["مدربة جيداً", "تتحدث الإنجليزية", "خبرة عالية", "مؤهلة طبياً"],
  },
  {
    name: "الهند",
    price: "3000",
    currency: "ريال",
    duration: "20-30 يوم",
    features: ["أسعار مناسبة", "خبرة جيدة", "تدريب متخصص", "سرعة في الإجراءات"],
  },
  {
    name: "بنجلاديش",
    price: "7300",
    currency: "ريال",
    duration: "25-35 يوم",
    features: ["عمالة ماهرة", "أسعار متوسطة", "تدريب جيد", "التزام عالي"],
  },
  {
    name: "كينيا",
    price: "5700",
    currency: "ريال",
    duration: "35-45 يوم",
    features: ["تتحدث الإنجليزية", "مدربة جيداً", "خبرة متنوعة", "أمانة عالية"],
  },
  {
    name: "أوغندا",
    price: "4800",
    currency: "ريال",
    duration: "30-40 يوم",
    features: ["أسعار جيدة", "عمالة مدربة", "سرعة في التنفيذ", "جودة عالية"],
  },
  {
    name: "إثيوبيا",
    price: "3900",
    currency: "ريال",
    duration: "25-35 يوم",
    features: ["أسعار مناسبة", "عمالة ماهرة", "تدريب متخصص", "التزام جيد"],
  },
];

// social links
const SOCIALS = [
  "https://x.com/theeboffice1",
  "https://www.facebook.com/theeboffice1",
  "https://www.instagram.com/theeb_recruitment/",
  "https://wa.me/966555908232",
];

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SITE_NAME} - أفضل مكاتب استقدام العمالة المنزلية بالسعودية`,
    template: "%s | " + SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  keywords: [...KEYWORDS_PRIMARY, ...KEYWORDS_SECONDARY],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { email: false, address: false, telephone: false },

  alternates: {
    canonical: BASE_URL + "/",
    languages: {
      "ar-SA": BASE_URL + "/",
    },
  },

  openGraph: {
    title: `${SITE_NAME} - استقدام العمالة المنزلية`,
    description: SITE_DESCRIPTION,
    url: BASE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "ar_SA",
    images: OG_IMAGES,
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: OG_IMAGES.map((i) => i.url),
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data
  const jsonLd: any = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: BASE_URL,
    telephone: PHONE,
    email: EMAIL,
    logo: LOGO_PUBLIC,
    sameAs: SOCIALS,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS_LINE,
      addressLocality: "الرياض",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "24.7136",
      longitude: "46.6753",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "22:00",
      },
    ],
    priceRange: "$$",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PHONE,
        contactType: "customer service",
        areaServed: "SA",
        availableLanguage: ["Arabic", "English"],
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات استقدام العمالة المنزلية",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description,
        },
      })),
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Countries Offered",
      itemListElement: COUNTRIES.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          name: c.name,
          description: `${c.name} - السعر ${c.price} ${c.currency} - المدة ${c.duration} - الميزات: ${c.features.join(
            ", "
          )}`,
        },
      })),
    },
  };

  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href={BASE_URL + "/"} />
        <link
          rel="preload"
          href="/heroBgImage.webp"
          as="image"
          fetchPriority="high"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <ScrollToTop />
        <SocialIcons />
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  );
}
