import "../app/globals.css";
import React from "react";
import Head from "next/head";
import { areasCovered } from "@/constants";
import Logo from "@/components/logo";
const HeadSection = ({ floatNav = false, canonical}: {floatNav?: boolean, canonical: string}) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={canonical} />

        <title>GoCleaner | Professional residential cleaners</title>
        <meta
          name="description"
          content={`GoCleaner offers reliable and affordable cleaning services in ${areasCovered}. From standard cleaning to deep cleaning, we ensure your home shines. Contact us today!`}
        />
        <meta
          name="keywords"
          content="cleaner, cheap cleaner, affordable cleaner, cleaning services, Kildare cleaning, Dublin cleaning, Meath cleaning, Laois cleaning, Offaly cleaning, home cleaning, residential cleaning, GoCleaner"
        />

        {/*OG Tags*/}
        <meta
          property="og:title"
          content="GoCleaner - Professional Local Cleaning Services"
        />
        <meta
          property="og:description"
          content="Reliable and affordable cleaning services to keep your home spotless."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://www.gocleaner.ie" />
        {/*Twitter Tags*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GoCleaner - Professional Local Cleaning Services"
        />
        <meta
          name="twitter:description"
          content="Reliable and affordable cleaning services to keep your home spotless."
        />
        <meta name="twitter:image" content="/logo.png" />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0RF7HF43FN"
        ></script>
        <script async src={'/initGa.js'}></script>

        {/* Structured Data */}
        {`<script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "GoCleaner",
            "url": "https://www.gocleaner.ie",
            "logo": "/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+353876709065",
              "contactType": "Customer Service",
              "areaServed": "IE",
              "availableLanguage": "English"
            }
          }
        </script>`}
      </Head>
      <nav className={floatNav ? "navbar navbar-float" : "navbar"}>
        <div className="navbar-container">
          <Logo />
        </div>
      </nav>
    </>
  );
};

export default HeadSection;
