import type { Metadata } from "next";
import { Montserrat, PT_Sans } from "next/font/google";
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
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} ${ptSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
