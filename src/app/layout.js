import { Inter, Bricolage_Grotesque, Condiment } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const condiment = Condiment({ weight: "400", subsets: ["latin"], variable: "--font-condiment" });

export const metadata = {
  title: "Comfort Bolakale - Portfolio",
  description: "Product leader with 2+ years building AI products in B2B/SaaS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bricolage.variable} ${condiment.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
