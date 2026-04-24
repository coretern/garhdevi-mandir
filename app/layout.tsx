import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "माँ गढ़देवी मंदिर | गढ़वा, झारखंड",
  description: "माँ गढ़देवी मंदिर, गढ़वा का आधिकारिक पोर्टल। शहर की रक्षक देवी के 200 साल पुराने इतिहास और दिव्य महत्व के बारे में जानें।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
