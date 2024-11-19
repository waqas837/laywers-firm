"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  FileText,
  Users,
  Settings,
  Edit,
  Trash,
  LogOut, // Import the LogOut icon
} from "lucide-react";
import Link from "next/link";

const LawFirmAdminSidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [expandedNav, setExpandedNav] = useState({});

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleNavExpansion = (name) => {
    setExpandedNav((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // Remove the token from localStorage
    router.push("/admin");
  };

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: <Home className="w-5 h-5 mr-2 text-green-500" />,
    },
    {
      name: "Blogs",
      icon: <FileText className="w-5 h-5 mr-2 text-blue-500" />,
      subNav: [
        {
          name: "Add Blog",
          href: "/dashboard/blogs/create",
          icon: <Edit className="w-5 h-5 mr-2 text-green-500" />,
        },
        {
          name: "Edit Blogs",
          href: "/dashboard/blogs/edit",
          icon: <Edit className="w-5 h-5 mr-2 text-yellow-500" />,
        },
      ],
    },
    {
      name: "Team",
      icon: <Users className="w-5 h-5 mr-2 text-blue-500" />,
      subNav: [
        {
          name: "Add Team Member",
          href: "/dashboard/team/create",
          icon: <Edit className="w-5 h-5 mr-2 text-green-500" />,
        },
        {
          name: "Edit Team",
          href: "/dashboard/team/edit",
          icon: <Edit className="w-5 h-5 mr-2 text-yellow-500" />,
        },
      ],
    },
    {
      name: "Practice Areas",
      icon: <FileText className="w-5 h-5 mr-2 text-blue-500" />,
      subNav: [
        {
          name: "Add Practice Area",
          href: "/dashboard/areas/create",
          icon: <Edit className="w-5 h-5 mr-2 text-green-500" />,
        },
        {
          name: "Edit Areas",
          href: "/dashboard/areas/edit",
          icon: <Edit className="w-5 h-5 mr-2 text-yellow-500" />,
        },
      ],
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="w-5 h-5 mr-2 text-blue-500" />,
    },
  ];

  return (
    <div>
      <div className="flex h-screen overflow-hidden">
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className={`fixed top-4 z-10 p-2 bg-yellow-500 rounded-full shadow-lg transition-all duration-300 ${
            isOpen ? "left-64" : "left-4"
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-900" />
          ) : (
            <Menu className="w-6 h-6 text-gray-900" />
          )}
        </button>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full bg-gray-900 border-r border-gray-800 w-64 p-4 transition-transform duration-300 overflow-y-auto ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6 bg-yellow-500 px-4 py-3 rounded-lg">
            <div className="text-2xl font-bold text-gray-900">Admin</div>
          </div>
          <nav className="flex-1 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <div
                  className={`flex items-center justify-between px-4 py-2 rounded-lg text-white hover:bg-gray-700 transition-colors ${
                    item.subNav ? "cursor-pointer" : ""
                  }`}
                  onClick={() => item.subNav && toggleNavExpansion(item.name)}
                >
                  <div className="flex items-center">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                  {item.subNav && (
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        expandedNav[item.name] ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>
                {item.subNav && expandedNav[item.name] && (
                  <div className="ml-4 space-y-1">
                    {item.subNav.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={`flex items-center px-4 py-2 rounded-lg text-white hover:bg-gray-700 transition-colors ${
                          router.pathname === subItem.href ? "bg-gray-700" : ""
                        }`}
                      >
                        {subItem.icon}
                        <span>{subItem.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-start px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 mt-6"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>

        {/* Main content area */}
        <div className="flex-1 p-6 ml-64">
          {/* Your main content goes here */}
        </div>
      </div>
    </div>
  );
};

export default LawFirmAdminSidebar;
