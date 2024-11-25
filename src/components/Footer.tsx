import React from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" py={4} textAlign="center" bgcolor="grey.200">
      <div className={"footer-links"}>
        <Link href={"/privacy-policy"} aria-label={"Privacy Policy Link"}>
          Privacy Policy
        </Link>
        <Link href={"/about-us"} aria-label={"About Go Cleaner Link"}>
          About Us
        </Link>
      </div>
      <Typography variant="body2">
        © 2024{" "}
        <a
          href={"https://www.gosolutions.ie"}
          style={{ textDecoration: "underline" }}
          target={"_blank"}
        >
          GoSolutions.
        </a>{" "}
        All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
