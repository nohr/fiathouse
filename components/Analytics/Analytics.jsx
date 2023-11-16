"use client";
import Script from "next/script";

const Analytics = () => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-F65TY3M3NK`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-F65TY3M3NK')
        `}
      </Script>
    </>
  );
};

export default Analytics;
