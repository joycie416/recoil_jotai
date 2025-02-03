import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/rootLayout/Header";

export const metadata: Metadata = {
  title: "Recoil Jotai Zustand",
  description: "To practice Recoil, Jotai, and Zustand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
