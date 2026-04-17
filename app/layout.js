import { Outfit } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

// export const metadata = {
//   title: "Nomu - development",
//   description: "Precision development for your digital vision.",
//   themeColor: "#000000",
//   icons: {
//     icon: "/logo.png",
//   },
//   manifest: "/manifest.json",
// };


export default function RootLayout({ children }) {
  return (
    <>

    <Head>

      <title>Nomu - development</title>
      <meta name="description" content="Precision development for your digital vision." />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/svg+xml" href="/logo.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#000000" />

    </Head>

      <html lang="en">
        <body className={`${outfit.className} antialiased text-gray-700`}>
          {children}
        </body>
      </html>
    </>
  );
}
