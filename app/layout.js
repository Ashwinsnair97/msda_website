import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/layout/Footer";
import ComplianceNotice from "../components/layout/ComplianceNotice";

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
  title: "MSDA & CO | Chartered Accountants",
  description:
    "MSDA & CO is a trusted professional services partner with two decades of experience.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSerifDisplay.variable} h-full antialiased`}
      style={{
        "--brand-font-body": "var(--font-inter)",
        "--brand-font-heading": "var(--font-dm-serif-display)",
      }}
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
