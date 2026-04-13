"use  client";
import InstalledAppsProvider from "@/context/install.context";
import React from "react";

const Providers = ({ children }) => {
  return <InstalledAppsProvider>{children}</InstalledAppsProvider>;
};

export default Providers;
