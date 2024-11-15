import React from "react";
import Logo from "@/components/logo";
import Head from "next/head";
import {areasCovered} from "@/constants";

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
            <meta property="og:image" content="/logo-1.png" />
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
            <meta name="twitter:image" content="/logo-1.png" />

            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                rel="stylesheet"
            />

            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-0RF7HF43FN"
            ></script>
            {`<script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-0RF7HF43FN');
        </script>`}

            {/* Structured Data */}
            {`<script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "GoCleaner",
            "url": "https://www.gocleaner.ie",
            "logo": "/logo-1.png",
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
      <Logo />
      <h1>Privacy Policy for GoCleaner</h1>
      <p>
        <strong>Effective Date:</strong> 11/11/2024
      </p>

      <p>
        GoCleaner (“we,” “us,” or “our”) is committed to protecting the privacy
        of our customers. This Privacy Policy explains how we collect, use, and
        protect personal data provided by our users. It applies to information
        collected when you use our services or visit our website,
        www.gocleaner.ie.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect the following personal information from you:</p>
      <ul>
        <li>Name</li>
        <li>Address</li>
        <li>Email</li>
        <li>Phone number</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use your personal information solely to:</p>
      <ul>
        <li>
          Communicate with you about our services, including scheduling and
          responding to inquiries.
        </li>
        <li>Organize and deliver the cleaning services you request.</li>
      </ul>

      <h2>3. Data Sharing</h2>
      <p>
        We do not share, sell, rent, or trade your personal information with
        third parties.
      </p>

      <h2>4. Cookies and Analytics</h2>
      <p>
        Our website uses Google Analytics to help us understand how users engage
        with our site. Google Analytics may collect information such as IP
        addresses, browser type, and pages visited. This data is used to improve
        website performance and user experience. Google Analytics may use
        cookies, which are small text files stored on your device. You can
        control or disable cookies through your browser settings.
      </p>
      <p>
        For more information on how Google collects and processes data, please
        refer to{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google’s Privacy Policy
        </a>
        .
      </p>

      <h2>5. Your Rights</h2>
      <p>
        In compliance with the General Data Protection Regulation (GDPR), you
        have the following rights regarding your personal data:
      </p>
      <ul>
        <li>
          <strong>Access</strong>: You may request access to the personal
          information we hold about you.
        </li>
        <li>
          <strong>Correction</strong>: You may request corrections to any
          inaccurate information.
        </li>
        <li>
          <strong>Deletion</strong>: You may request that we erase your personal
          information by submitting a request at{" "}
          <a
            href="https://www.gosolutions.ie/data-request"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.gosolutions.ie/data-request
          </a>
          .
        </li>
      </ul>

      <h2>6. Data Security</h2>
      <p>
        We take data security seriously and implement appropriate measures to
        protect your personal information from unauthorized access, alteration,
        or disclosure. However, please note that no method of transmission over
        the Internet is 100% secure.
      </p>

      <h2>7. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy periodically to reflect changes in our
        practices. The revised policy will be posted on this page, and the
        effective date will be updated.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or how
        we handle your personal data, please contact us at:
      </p>
      <p>
        <strong>GoCleaner</strong>
        <br />
        Phone: 087 670 9065
      </p>
    </div>
  );
};

export default PrivacyPolicy;
