import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import ComplianceNotice from "@/components/layout/ComplianceNotice";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { site } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: {
    template: `%s | ${site.name}`,
    default: `${site.name} | Chartered Accountants`,
  },
  description:
    "MSDA & CO is a trusted professional services partner with two decades of experience.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSerifDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <ComplianceNotice />
      </body>
    </html>
  );
}
