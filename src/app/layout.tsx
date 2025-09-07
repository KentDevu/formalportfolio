import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/theme-provider";
import { Navigation } from "@/components/common/navigation";
import { Footer } from "@/components/common/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio | Modern Developer Portfolio",
  description: "A modern portfolio showcasing projects, achievements, blogs, and professional journey with AI-powered assistance.",
  keywords: ["portfolio", "developer", "next.js", "react", "typescript", "AI"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio | Modern Developer Portfolio",
    description: "A modern portfolio showcasing projects, achievements, blogs, and professional journey with AI-powered assistance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
