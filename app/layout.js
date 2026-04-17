import { Outfit } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata = {
  title: "Nomu - development",
  description: "Precision development for your digital vision.",
  themeColor: "#000000",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logo.png",
    },
  },
  manifest: "/manifest.json",
};


export default function RootLayout({ children }) {
  return (
    <>

      <html lang="en">
        <body className={`${outfit.className} antialiased text-gray-700`}>
          {children}
        </body>
      </html>
    </>
  );
}
