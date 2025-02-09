import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "MOE - Frontend Web Developer",
  description:
    "Portfolio page for Moses Chukwudi Nwigberi, a tech geek and a web developer based in Lagos, Nigeria.",
  keywords:
    "Moe, Moses Chukwudi Nwigberi, Web Developer, Lagos, Ebonyi State, Nigeria",
  authors: [{ name: "Moses Chukwudi Nwigberi" }],
  creator: "Moses Chukwudi Nwigberi",
  applicationName: "Moe's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
