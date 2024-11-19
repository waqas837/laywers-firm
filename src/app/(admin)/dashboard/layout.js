"use client";
import LawFirmAdminSidebar from "@/components/AdminComponents/Sidebar";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("adminToken");
    if (!token) {
      setisAuthenticated(false);
      redirect("/admin");
    } else {
      setisAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return <p>Unauthorized access is strict! Redirecting...</p>;
  }

  return (
    <div className="flex">
      <LawFirmAdminSidebar />
      {children}
    </div>
  );
}
