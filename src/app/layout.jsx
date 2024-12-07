'use client'

import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppins-regular",
  weight: "100 900",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <SessionProvider>
            {children}
            </SessionProvider>
        </body>
    </html>
  );
}
