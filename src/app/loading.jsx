import React from "react";
import { HashLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex justify-center items-center text-3xl font-bold h-screen">
      {/* <HashLoader color="#ad46ff" /> */}
      Global Loading...
    </div>
  );
};

export default loading;
