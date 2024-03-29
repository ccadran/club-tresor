"use client";

import { Inter } from "next/font/google";
import "./styles/globals.scss";
import Header from "./components/HeaderTest/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useEffect } from "react";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
