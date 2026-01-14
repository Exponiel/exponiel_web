import type { Metadata } from "next";
import { Montserrat, PT_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  variable: "--font-montserrat",
  display: 'swap',
});

const ptSans = PT_Sans({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  weight: ['400', '700'],
  variable: "--font-pt-sans",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://exponiel.ru"),
  title: "Exponiel — Платформа для выставок и деловых поездок",
  description: "Единая система для организаторов и участников: бронирование стендов и билетов, коммуникация, аналитика и планирование командировок.",
  keywords: [
    "выставки",
    "деловые поездки",
    "бронирование стендов",
    "B2B",
    "организаторы выставок",
    "аналитика выставок",
    "управление выставками",
    "expo platform",
    "business trips",
  ],
  authors: [{ name: "Exponiel" }],
  creator: "Exponiel",
  publisher: "Exponiel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://exponiel.ru",
    siteName: "Exponiel",
    title: "Exponiel — Платформа для выставок и деловых поездок",
    description:
      "Единая система для организаторов и участников: бронирование стендов и билетов, коммуникация, аналитика и планирование командировок.",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Exponiel Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exponiel — Платформа для выставок и деловых поездок",
    description: "Единая система для организаторов и участников",
    images: ["/android-chrome-512x512.png"],
  },
  verification: {
    yandex: "618f068a8a22265b",
    google: "DYO8QzJtRmx1FPalD0cdD7-fRkdkPv59ThNoQIQtk34",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const yandexMetrikaId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;

  // JSON-LD структурированные данные для SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Exponiel",
    description:
      "Цифровая платформа для выставок и деловых поездок. Единая система для организаторов и участников.",
    url: "https://exponiel.ru",
    email: "exponiel@mail.ru",
    logo: "https://exponiel.ru/apple-touch-icon.png",
    image: "https://exponiel.ru/android-chrome-512x512.png",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      email: "exponiel@mail.ru",
      contactType: "Customer Service",
      availableLanguage: ["Russian"],
    },
  };

  return (
    <html lang="ru">
      <head>
        {/* JSON-LD структурированные данные */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} ${ptSans.variable} antialiased`}>
        {children}

        {/* Яндекс.Метрика */}
        {yandexMetrikaId && (
          <>
            <Script
              id="yandex-metrika"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(m,e,t,r,i,k,a){
                    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();
                    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                  })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=${yandexMetrikaId}', 'ym');

                  ym(${yandexMetrikaId}, 'init', {
                    ssr:true,
                    webvisor:true,
                    clickmap:true,
                    ecommerce:"dataLayer",
                    accurateTrackBounce:true,
                    trackLinks:true
                  });
                `,
              }}
            />
            <noscript>
              <div>
                <img
                  src={`https://mc.yandex.ru/watch/${yandexMetrikaId}`}
                  style={{ position: "absolute", left: "-9999px" }}
                  alt=""
                />
              </div>
            </noscript>
          </>
        )}
      </body>
    </html>
  );
}
