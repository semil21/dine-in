"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { MdOutlineLogin } from "react-icons/md";

import { authorizedRoutes } from "../_route/route.config";
import { RouteItem } from "../_types/routes.tye";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getauthorizedRole = localStorage.getItem("role");

  const filterAuthorizedRoutes = authorizedRoutes?.filter((item: RouteItem) =>
    item?.allowedRoles?.includes(getauthorizedRole ?? ""),
  );
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const router = useRouter();
  const handleLogOut = async () => {
    localStorage.removeItem("session_id");
    localStorage.removeItem("role");
    router.push("/");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <aside
        className={`fixed z-30 inset-y-0 left-0 transform bg-[#f9f7f7] border-r-[.3rem] border-black text-black w-64 p-4 transition-transform duration-300 ease-in-out
  ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
  lg:translate-x-0 lg:static lg:inset-0 flex flex-col`}
      >
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        <nav className="space-y-4 flex-grow">
          {filterAuthorizedRoutes &&
            filterAuthorizedRoutes?.map((navItem: RouteItem, index: number) => (
              <ul key={index}>
                <Link href={navItem?.path}>
                  <li className="flex items-center gap-3 text-black hover:bg-black hover:text-white p-2 ">
                    <span className="block text-xl font-bold">
                      {navItem?.label}
                    </span>
                  </li>
                </Link>
              </ul>
            ))}
        </nav>

        <div
          className="flex gap-3 mt-auto cursor-pointer"
          onClick={handleLogOut}
        >
          <div className="text-red-500 font-medium">Log out</div>
          <MdOutlineLogin className="text-2xl text-red-500 font-medium" />
        </div>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <main className="flex-1 lg:ml-2 bg-gray-100 p-6 overflow-y-auto">
        <button
          onClick={toggleSidebar}
          className="p-2 text-gray-600 bg-gray-200 rounded-md lg:hidden"
        >
          {isSidebarOpen ? "Close" : "Menu"}
        </button>
        {children}
      </main>
    </div>
  );
}
