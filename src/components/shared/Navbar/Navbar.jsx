import React from "react";
import logoImg from "../../../assets/image/logo.png";

import { FaGithub } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/apps",
      text: "Apps",
    },
    {
      path: "/installation",
      text: "Installation",
    },
    {
      path: "/dashboard",
      text: "Dashboard",
    },
  ];

  return (
    <nav className=" shadow">
      <div className="flex justify-between gap-4 items-center  py-2 container mx-auto">
        <Image src={logoImg} alt="PH Play Store" className="w-12.5" />
        <ul className="flex justify-between gap-2 items-center">
          {navItems.map((item, index) => (
            <MyNavLink key={index} item={item} href={item.path}>
              {item.text}
            </MyNavLink>
          ))}

          {/* 
          <li>
            <MyNavLink to={"/"}>Home</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/apps"}>Apps</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/installedApps"}>Installation</MyNavLink>
          </li> */}
        </ul>
        <button className="btn bg-purple-500 text-white">
          <FaGithub />
          Contribute
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
