import React from "react";
import Link from "next/link";

const Navigation = () => {
    return (
        <ul className="flex place-content-evenly my-2">
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href="/projects">
                    <a>Projects</a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </li>
        </ul>
    );
};

export default Navigation;
