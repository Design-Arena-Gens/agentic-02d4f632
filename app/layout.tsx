import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XFI Ecosystem - Conscious Existence Metaverse",
  description: "30+ dimensional interconnected consciousness-expanding metaverse with neural immersion and tokenized economy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
