"use client";
import { InstallAppsContext } from "@/context/install.context";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const InstallToggleButton = ({ app }) => {
  const { installedApps, setInstalledApps } = useContext(InstallAppsContext);
  // console.log(installedApps, "something");

  const handleInstallNow = () => {
    console.log("handle install now fnc");
    // logic
    setInstalledApps([...installedApps, app]);
    toast.success(`${app.title} has been successfully installed`);
  };

  const isInstalled = installedApps.find((iApp) => iApp.id === app.id);
  console.log(isInstalled, "isInstalled");
  return (
    <button
      disabled={isInstalled ? true : false}
      className={`btn ${isInstalled ? "bg-gray-200 text-shadow-black" : "bg-purple-500 text-white"}`}
      onClick={handleInstallNow}
    >
      install now
    </button>
  );
};

export default InstallToggleButton;
