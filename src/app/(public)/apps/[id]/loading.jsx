import React from "react";
import { HashLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex justify-center bg-amber-200 items-center text-3xl font-bold h-screen">
      {/* <HashLoader color="#ad46ff" /> */}
      Application Details Loading...
    </div>
  );
};

export default loading;
