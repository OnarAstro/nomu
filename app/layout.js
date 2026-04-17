import { Outfit } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata = {
  title: "Nomu - development",
  description: "A simple and efficient tool for managing your projects and tasks.",
};

export default function RootLayout({ children }) {
  return (
    <>

    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

      <html lang="en">
        <body className={`${outfit.className} antialiased text-gray-700`}>
          {children}
        </body>
      </html>
    </>
  );
}
