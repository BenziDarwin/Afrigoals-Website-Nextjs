import { Footer } from "@/components/landing/footer";
import { Navigation } from "@/components/landing/navigation";
import { AuthProvider } from "@/lib/auth-context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Afrigoals - Africa's Premier Football Analytics Platform",
  description:
    "Revolutionizing African football with AI-powered video analysis, real-time statistics, and comprehensive league management.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          <AuthProvider>{children}</AuthProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
