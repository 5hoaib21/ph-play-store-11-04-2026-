"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyNavLink = ({ href, item, children }) => {
  const pathName = usePathname();
  // console.log(pathName, "pathname");
  // console.log(href, "href");

  return (
    <Link
      href={href}
      className={`pb-2 font-semibold ${pathName === href ? "border-b border-purple-500" : ""}`}
    >
      {children}
    </Link>
  );
};

export default MyNavLink;
