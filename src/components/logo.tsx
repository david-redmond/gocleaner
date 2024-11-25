import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = ({isFloatingLogo = false}) => {
  return (
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          className={isFloatingLogo ? "logo logo-float" : "logo"}
          width={200}
          height={112}
          alt={"Go Cleaner company logo"}
        />
      </Link>
  );
};

export default Logo;
