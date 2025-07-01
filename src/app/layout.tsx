import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BananaBoard",
  description: "Climb the BananaBoard leaderboard!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-yellow-300 text-yellow-900">
          <Link href="/" className="flex items-center justify-center text-2xl font-bold">
            🍌 BananaBoard
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              href="/login"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Login
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
