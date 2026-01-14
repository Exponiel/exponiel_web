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
  title: "Exponiel — Платформа для выставок и деловых поездок",
  description: "Единая система для организаторов и участников: бронирование стендов и билетов, коммуникация, аналитика и планирование командировок.",
  keywords: ["выставки", "деловые поездки", "бронирование стендов", "B2B", "организаторы выставок", "аналитика выставок"],
  authors: [{ name: "Exponiel" }],
  openGraph: {
    title: "Exponiel — Платформа для выставок и деловых поездок",
    description: "Единая система для организаторов и участников: бронирование стендов и билетов, коммуникация, аналитика и планирование командировок.",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exponiel — Платформа для выставок и деловых поездок",
    description: "Единая система для организаторов и участников",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const yandexMetrikaId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;

  return (
    <html lang="ru">
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
