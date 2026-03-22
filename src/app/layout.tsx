import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Manaiakalani — Community Strategy & Technical Engagement",
    template: "%s | Manaiakalani",
  },
  description:
    "Maximilian Stein — Community Strategy Lead for Microsoft Intune & Microsoft Security in Customer Experience Engineering (CxE). Connecting engineering teams with the global technical community.",
  metadataBase: new URL("https://manaiakalani.github.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manaiakalani.github.io",
    title: "Manaiakalani — Community Strategy & Technical Engagement",
    description:
      "Connecting engineering teams with the global technical community through actionable insights and real customer engagement.",
    siteName: "Manaiakalani",
  },
  twitter: {
    card: "summary",
    title: "Manaiakalani — Community Strategy & Technical Engagement",
    description:
      "Connecting engineering teams with the global technical community through actionable insights and real customer engagement.",
    creator: "@manaiakalani",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "color-scheme": "light dark",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" />
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||((!t||t==="system")&&window.matchMedia("(prefers-color-scheme:dark)").matches);if(d){document.documentElement.classList.add("dark");document.querySelector('meta[name="theme-color"]').setAttribute("content","#09090b")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="flex min-h-svh flex-col">
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
