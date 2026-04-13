import Link from "next/link";
import React from "react";
import { TiArrowBackOutline } from "react-icons/ti";

const NotFoundPage = () => {
  return (
    <div className="h-screen bg-pink-300 flex  items-center justify-center font-bold text-5xl text-black flex-col">
      this app is not found..!
      <br />
      please try again later
      <Link href={"/"}>
        {" "}
        <button className="btn btn-accent bg-black text-white rounded-2xl">
          <TiArrowBackOutline /> Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
