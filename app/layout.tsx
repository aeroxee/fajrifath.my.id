import Footer from "@/components/footer";
import MyAlert from "@/components/my-alert";
import Navbar from "@/components/navbar";
import ThemeProvider from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import NextJSTopLoader from "nextjs-toploader";
import "./globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Home - Fajri Fath",
  description: "Sebuah blog yang berisi tentang kesaharian dari penulis.",
  authors: {
    name: "Fajri Fath",
    url: "https://github.com/aeroxee",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextJSTopLoader zIndex={1000} height={4} showSpinner={false} />
          <Navbar />
          {children}
          <Footer />
          <MyAlert />
        </ThemeProvider>
      </body>
    </html>
  );
}
