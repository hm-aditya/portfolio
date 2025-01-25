import "./globals.css";
import type { Metadata } from "next";
import React from "react";

import ThemeProvider from "@/context/Theme";


export const metadata: Metadata = {
  title: "Aditya Patil",
  description:
    "Aditya Patil is a Fullstack Webdeveloper who loves to build things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with responsive design. I am a self-taught developer who is passionate about building software that improves the lives of those around me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`  dark:bg-zinc-900`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}