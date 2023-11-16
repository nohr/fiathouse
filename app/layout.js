"use client";

import "@/styles/globals.scss";
import localFont from "next/font/local";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Analytics from "@/components/Analytics/Analytics";
import useTheme from "@/hooks/useTheme";

const Poppins = localFont({
  src: [
    {
      path: "./fonts/Poppins/Poppins-ExtraLight.ttf",
      weight: "100",
      style: "extralight",
    },
    {
      path: "./fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/Poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  display: "swap",
});

export default function RootLayout({ children }) {
  const searchParams = useSearchParams();
  useTheme();

  useEffect(() => {
    const utm_source = searchParams.get("utm_source");
    if (utm_source) {
      localStorage.setItem("utm_source", utm_source);
    }
    const utm_medium = searchParams.get("utm_medium");
    if (utm_medium) {
      localStorage.setItem("utm_medium", utm_medium);
    }
    const utm_term = searchParams.get("utm_term");
    if (utm_term) {
      localStorage.setItem("utm_term", utm_term);
    }
  }, [searchParams]);

  return (
    <html lang="en" className={Poppins.className}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
