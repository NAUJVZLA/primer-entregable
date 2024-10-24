"use client";
import { ThemeProvider } from "@/context/ThemeContext";
import Home from "./home/home";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Home />

            <main className="flex-grow container mx-auto p-6">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
