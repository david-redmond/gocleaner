import React from "react";
import Link from "next/link";

const Logo = ({isFloatingLogo = false}) => {
  return (
      <Link href={"/"}>
        <img
          src={"./logo.png"}
          className={isFloatingLogo ? "logo logo-float" : "logo"}
          width={200}
          height={112}
          alt={"Go Cleaner company logo"}
        />
      </Link>
  );
};

export default Logo;
