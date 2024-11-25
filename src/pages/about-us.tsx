// app/about/page.tsx
import React from "react";
import HeadSection from "@/components/Head";
import Footer from "@/components/Footer";

const AboutPage: React.FC = () => {
  return (
    <>
      <HeadSection canonical={'https://gocleaner.ie/about-us'} />
      <div className={"container"}>
        <h1>About Us</h1>
        <p>
          Welcome to GoCleaner, your reliable choice for residential cleaning
          across Kildare, Dublin, Carlow, Laois, Offaly, and Meath. We
          understand that finding a house cleaner you can trust is essential,
          and we’re here to make the process as easy and transparent as
          possible.
        </p>
        <br/>
        <p>
          With GoCleaner, you can get an instant online quote in less than 22
          seconds, allowing you to see exactly what our services will cost
          without waiting or guessing. Unlike other cleaning services, we don’t
          require any payment upfront—you only pay after the job is complete and
          you’re fully satisfied with our work. This commitment to transparency
          and customer-first service means you can book with confidence, knowing
          there are no hidden fees and no financial surprises.
        </p>
        <br/>
        <p>
          Our offerings include everything from standard cleaning and deep
          cleaning to specialized services like move-in/move-out cleaning and
          eco-friendly options. Our team of professional, fully-vetted cleaners
          are dedicated to delivering exceptional results in every home. Whether
          you’re looking for a one-time deep clean or a regular cleaning
          schedule, GoCleaner provides dependable, flexible services that fit
          seamlessly into your busy lifestyle.
        </p>
        <br/>
        <p>
          Discover the difference a local cleaning company can make. We’re here
          to provide residents of Kildare, Dublin, Carlow, Laois, Offaly, and
          Meath with a cleaner home and peace of mind—on your terms and without
          any upfront costs.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
