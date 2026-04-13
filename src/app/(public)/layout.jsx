import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";

const PublicLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <h2 className="bg-pink-500 text-center py-7">Footer</h2>
    </div>
  );
};

export default PublicLayout;
