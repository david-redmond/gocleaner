import React from 'react';
import Link from "next/link";

const Logo = () => {
    return (
        <Link href={'/'}>
            <img
                src={"./logo.png"}
                className={"logo"}
                width={200}
                height={112}
                alt={"Go Cleaner company logo"}
            />
        </Link>
    );
}

export default Logo;