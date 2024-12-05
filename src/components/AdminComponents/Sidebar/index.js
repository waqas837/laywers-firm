"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
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
  LogOut,
  Mail,
  MessageSquareMore,
} from "lucide-react";
import Link from "next/link";
import { socketConn } from "@/lib/socketInstance";

const LawFirmAdminSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const [expandedNav, setExpandedNav] = useState({});
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    if (socketConn) {
      socketConn.emit("adminSocketId", { message: "submit admin socket id" });
    }
  }, [socketConn]);

  useEffect(() => {
    const findActiveItem = () => {
      for (const item of navigation) {
        if (item.href === pathname) {
          setActiveItem(item.name);
          return;
        }
        if (item.subNav) {
          const activeSubItem = item.subNav.find(
            (sub) => sub.href === pathname
          );
          if (activeSubItem) {
            setActiveItem(activeSubItem.name);
            setExpandedNav((prev) => ({ ...prev, [item.name]: true }));
            return;
          }
        }
      }
    };

    findActiveItem();
  }, [pathname]);

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
    localStorage.removeItem("adminToken");
    router.push("/admin");
  };

  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <Home className="w-5 h-5 mr-2 text-white opacity-70" />,
    },
    {
      name: "Live Chat Help",
      href: "/dashboard/help-chat-center",
      icon: (
        <MessageSquareMore className="w-5 h-5 mr-2 text-white opacity-70" />
      ),
    },
    {
      name: "Blogs",
      icon: <FileText className="w-5 h-5 mr-2 text-white opacity-70" />,
      subNav: [
        {
          name: "Add Blog",
          href: "/dashboard/blogs/create",
          icon: <Edit className="w-5 h-5 mr-2 text-white opacity-70" />,
        },
        {
          name: "Edit Blogs",
          href: "/dashboard/blogs/edit",
          icon: <Edit className="w-5 h-5 mr-2 text-white opacity-70" />,
        },
      ],
    },
    {
      name: "Team",
      icon: <Users className="w-5 h-5 mr-2 text-white opacity-70" />,
      subNav: [
        {
          name: "Add Team Member",
          href: "/dashboard/team/create",
          icon: <Edit className="w-5 h-5 mr-2 text-white opacity-70" />,
        },
        {
          name: "Edit Team",
          href: "/dashboard/team/edit",
          icon: <Edit className="w-5 h-5 mr-2 text-white opacity-70" />,
        },
      ],
    },
    {
      name: "Practice Areas",
      icon: <FileText className="w-5 h-5 mr-2 text-white opacity-70" />,
      subNav: [
        {
          name: "Add Practice Area",
          href: "/dashboard/areas/create",
          icon: <Edit className="w-5 h-5 mr-2 text-white opacity-70" />,
        },
        {
          name: "Edit Areas",
          href: "/dashboard/areas/edit",
          icon: <Edit className="w-5 h-5 mr-2 text-white opacity-70" />,
        },
      ],
    },
    {
      name: "Subscribers",
      icon: <Mail className="w-5 h-5 mr-2 text-white opacity-70" />,
      subNav: [
        {
          name: "View Subscribers",
          href: "/dashboard/subscribers",
          icon: <Users className="w-5 h-5 mr-2 text-white opacity-70" />,
        },
      ],
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
          className={`fixed top-0 left-0 h-full bg-gray-900 border-r border-gray-800 w-64 transition-transform duration-300 overflow-y-auto ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-gray-900 pt-4 px-4 pb-2">
            <div className="flex items-center justify-between bg-yellow-500 px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">Admin</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="px-2 py-3">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name} className="py-1">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`flex items-center px-3 py-2.5 rounded-lg text-white hover:bg-gray-700 transition-colors group ${
                        activeItem === item.name
                          ? "bg-gray-700 border-l-4 border-yellow-500"
                          : ""
                      }`}
                      onClick={() => setActiveItem(item.name)}
                    >
                      {item.icon}
                      <span className="text-sm font-medium group-hover:text-white">
                        {item.name}
                      </span>
                    </Link>
                  ) : (
                    <div>
                      <div
                        className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-white hover:bg-gray-700 transition-colors cursor-pointer group ${
                          expandedNav[item.name] ? "bg-gray-700" : ""
                        }`}
                        onClick={() => toggleNavExpansion(item.name)}
                      >
                        <div className="flex items-center">
                          {item.icon}
                          <span className="text-sm font-medium group-hover:text-white">
                            {item.name}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform text-white opacity-70 ${
                            expandedNav[item.name] ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      {item.subNav && expandedNav[item.name] && (
                        <div className="mt-1 ml-3 space-y-1">
                          {item.subNav.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`flex items-center px-3 py-2 rounded-lg text-white hover:bg-gray-700 transition-colors group ${
                                activeItem === subItem.name
                                  ? "bg-gray-700 border-l-4 border-yellow-500"
                                  : ""
                              }`}
                              onClick={() => setActiveItem(subItem.name)}
                            >
                              {subItem.icon}
                              <span className="text-sm group-hover:text-white">
                                {subItem.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Logout Button */}
          <div className="sticky bottom-0 p-4 bg-gray-900 border-t border-gray-800">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-start px-4 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg hover:from-yellow-600 hover:to-yellow-500 transition-all group shadow-md"
            >
              <LogOut className="w-5 h-5 mr-2 opacity-90" />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>

        {/* Main content area */}
        <div
          className={`flex-1 p-6 ${
            isOpen ? "ml-64" : "ml-0"
          } transition-all duration-300`}
        >
          {/* Your main content goes here */}
        </div>
      </div>
    </div>
  );
};

export default LawFirmAdminSidebar;
