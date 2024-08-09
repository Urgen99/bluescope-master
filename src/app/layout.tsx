import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/common/navbar/Navbar.component";
import FooterComponent from "@/components/common/Footer/Footer.component";
import BottomNavComponent from "@/components/common/BottomNav/BottomNav.component";
import { InriaSerif } from "@/utils/fonts";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "BlueScope Company Pvt. Ltd.",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} ${InriaSerif.variable}`}
      >
        <NavbarComponent />
        {children}
        <FooterComponent />
        <BottomNavComponent />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
