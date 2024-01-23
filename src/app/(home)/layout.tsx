"use client";

import { Inter } from "next/font/google";
import { SnackbarProvider } from "notistack";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <SnackbarProvider maxSnack={3} autoHideDuration={4000}>
          {children}
        </SnackbarProvider>
      </body>
    </html>
  );
}
