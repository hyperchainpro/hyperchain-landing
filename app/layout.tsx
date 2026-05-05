import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hyperchain.id"),
  title: "Hyperchain Project - Ekosistem Digital Terintegrasi",
  description:
    "Hyperchain Project adalah ekosistem digital terintegrasi yang menghubungkan produktivitas, keuangan, kesehatan, dan inovasi dalam satu rantai digital yang kuat. 12 produk, 8 sektor industri.",
  keywords: [
    "Hyperchain",
    "ekosistem digital",
    "produktivitas",
    "fintech",
    "edtech",
    "healthtech",
    "startup Indonesia",
    "SaaS",
  ],
  authors: [{ name: "Hyperchain Project" }],
  creator: "Hyperchain Project",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://hyperchain.id",
    title: "Hyperchain Project - Ekosistem Digital Terintegrasi",
    description:
      "Satu ekosistem. Dua belas produk. Tak terbatas kemungkinan. Bergabunglah dengan Hyperchain Project.",
    siteName: "Hyperchain Project",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hyperchain Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyperchain Project - Ekosistem Digital Terintegrasi",
    description:
      "Satu ekosistem. Dua belas produk. Tak terbatas kemungkinan.",
    images: ["/og-image.png"],
    creator: "@hyperchainid",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className + " antialiased bg-black text-white"}>
        {children}
      </body>
    </html>
  );
}
