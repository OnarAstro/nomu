import { Outfit } from "next/font/google";
import "./globals.css";
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata = {
  title: "Nomu - development",
  description: "Precision development for your digital vision.",
  themeColor: "#000000",
  icons: {
    icon: "/logo.png",
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
