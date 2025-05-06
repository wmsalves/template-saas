// import type { Metadata } from "next";
import { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Template SaaS Rocketseat',
  description: 'Landing page',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className} bg-gray-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}