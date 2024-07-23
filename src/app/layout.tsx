'use client'

import type { Metadata } from "next";
import "./globals.scss"
import { Providers } from './providers'

export const metadata: Metadata = {
  title: "Idle Institutional",
  description: "Idle Istitutional landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
