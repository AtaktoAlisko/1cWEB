import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Providers } from './providers';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Softway",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-lightbg text-black dark:bg-darkbg dark:text-white`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
