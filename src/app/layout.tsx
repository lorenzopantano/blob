import type { Metadata } from "next";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import { fontsans, fontserif } from "@/styles/fonts";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Footer from "@/components/pages/landing/footer";

export const metadata: Metadata = {
  title: "Blob.",
  description: "DIY Blog for everyday crafts.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="min-h-screen ">
      <body
        className={cn(
          "h-full bg-background font-sans antialiased max-w-[1440px] mx-auto px-16 py-12 relative",
          fontsans.variable,
          fontserif.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
      <div className={cn(fontsans.variable, "font-sans")}>
        <Footer />
      </div>
    </html>
  );
}
