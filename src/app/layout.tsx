"use client";

import { Box } from "@/components/elements";
import { Inter } from "next/font/google";
import { SnackbarProvider } from "notistack";

import "@/styles/global.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Box
        component="body"
        className={inter.className}
        width="100%"
        sx={{
          overflowX: "hidden",
        }}
      >
        <SnackbarProvider maxSnack={3} autoHideDuration={4000}>
          {children}
        </SnackbarProvider>
      </Box>
    </html>
  );
}
