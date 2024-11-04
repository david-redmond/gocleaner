"use client";
import Head from "next/head";
import PageLayout from "./layout";
import { contactPhoneNumber } from "@/constants";
import Link from "next/link";

const ConfirmationPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>GoCleaner | Order Confirmation</title>
        <meta name="description" content="Thank you for your order!" />
      </Head>
      <img
        src="/logo.png"
        alt="Go Cleaner Logo"
        width={"300"}
        className={"logo"}
      />
      <div className={"confirmationPage"}>
        <h2>Thank you!</h2>
        <p>Your order has been successfully placed.</p>
        <p>
          A member of our staff will contact you soon to confirm the details.
        </p>
        <p>
          If you have any questions, feel free to reach out on{" "}
            <a href={`tel:${contactPhoneNumber}`} style={{color: "#57c102"}}>{contactPhoneNumber}</a>
        </p>
        <Link
          href="/"
          style={{
            marginTop: "20px",
            display: "inline-block",
            textDecoration: "underline",
          }}
        >
          Go back
        </Link>
      </div>
    </PageLayout>
  );
};

export default ConfirmationPage;
