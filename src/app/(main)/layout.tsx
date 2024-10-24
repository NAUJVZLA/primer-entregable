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

            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
