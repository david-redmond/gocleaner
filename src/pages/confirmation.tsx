"use client";
import Head from "next/head";
import { contactPhoneNumber } from "@/constants";
import Link from "next/link";
import Logo from "@/components/logo";
import { useSearchParams } from "next/navigation";

const ConfirmationPage = () => {
  const searchParams = useSearchParams();
  // @ts-expect-error could be null
  const orderRef = searchParams.get("orderRef");
  return (
    <>
      <Head>
        <title>GoCleaner | Order Confirmation</title>
        <meta name="description" content="Thank you for your order!" />
        <meta name="robots" content="noindex"></meta>
      </Head>
      <Logo />
      <div className={"confirmationPage"}>
        <h2>Thank you!</h2>
        <p>
          Your order has been successfully placed.{" "}
          <strong>(Order: {Number(orderRef)})</strong>
        </p>
        <p>
          A member of our staff will contact you soon to confirm the details.
        </p>
        <p>
          If you have any questions, feel free to reach out on{" "}
          <a href={`tel:${contactPhoneNumber}`} style={{ color: "#57c102" }}>
            {contactPhoneNumber}
          </a>
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
    </>
  );
};

export default ConfirmationPage;
