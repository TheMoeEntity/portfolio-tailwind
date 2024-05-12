import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MOE - Frontend Web Developer",
  description:
    "Portfolio page for Moses Chukwudi Nwigberi, a bad-ass web developer based in Lagos, Nigeria.",
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
      <body className={poppins.className}>
        {children}
        <Script
          src="https://kit.fontawesome.com/4ef8c63dd7.js"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
