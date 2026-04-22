import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Food App",
  description: "Modern Next.js Food Application",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen max-w-[80%] mx-auto bg-base-200 antialiased">
        <Link href="/foods" className="text-2xl font-bold text-center mt-10 mb-4">
          Food List
        </Link>
        {children}
      </body>
    </html>
  );
}