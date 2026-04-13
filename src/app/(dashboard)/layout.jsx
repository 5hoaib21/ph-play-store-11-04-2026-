import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex gap-3 justify-between">
      <div
        className="h-screen w-62.5 bg-pink-500 flex
      flex-col  items-center justify-center font-bold text-5xl"
      >
        Sidebar
        <Link href={"/"}>
          <button className="btn btn-primary gap-1">
            Home <BiArrowBack />
          </button>
        </Link>
      </div>

      {children}
    </div>
  );
};

export default DashboardLayout;
