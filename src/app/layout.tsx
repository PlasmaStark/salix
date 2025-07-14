import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./components/navigation/navbar";
import ProfileInfo from "./components/bio/ProfileInfo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Leonardo's home",
  description: "Leonardo's home page",
};

export default function RootLayout({
  children,
  lastMod,
}: Readonly<{
  children: React.ReactNode;
  lastMod?: string;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="/icons/academicons/css/academicons.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navigation />
        <div className="flex">
          {/* Sidebar desktop */}
          <aside className="hidden md:block w-[250px] text-white px-4 py-8 border-r border-dashed border-[rgba(255,255,255,0.3)]">
            <div className="sticky top-8 z-10">
              <ProfileInfo />
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 px-6 pr-5 md:px-8 max-w-screen-lg mx-auto">
            {/* Mobile Profile */}
            <div className="block md:hidden">
              <ProfileInfo compact />
            </div>

            {/* Content */}
            {children}
          </main>
        </div>

        <footer className="bg-gray-800 text-white py-8 mt-2 text-center">
          <p className="text-sm">© {new Date().getFullYear()} myself</p>
          {lastMod && (
            <p className="text-xs text-gray-400">
              Last updated: {new Date(lastMod).toLocaleDateString()}
            </p>
          )}
        </footer>
      </body>
    </html>
  );
}
