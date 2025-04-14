"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineLogin } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ChartBarStacked } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const router = useRouter();
  const handleLogOut = async () => {
    sessionStorage.removeItem("session_id");
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
          <ul>
            <Link href="/dashboard">
              <li className="flex items-center gap-3 text-black hover:bg-blue-600 hover:text-white p-2">
                <HiOutlineHome className="text-2xl" />
                <span className="block text-xl font-bold">Home</span>
              </li>
            </Link>

            <li
              className="flex items-center gap-3 cursor-pointer text-black hover:bg-blue-600 hover:text-white p-2"
              onClick={toggleCategories}
            >
              <ChartBarStacked className="text-2xl" />
              <span className="block text-xl font-bold">Categories</span>
              {isCategoriesOpen ? <FaChevronUp /> : <FaChevronDown />}
            </li>

            {isCategoriesOpen && (
              <ul className="ml-4 space-y-2">
                <Link href="/dashboard/category/all-category">
                  <li className="py-2 px-7 text-black hover:bg-blue-300 rounded ">
                    All Categories
                  </li>
                </Link>
                <Link href="/dashboard/new-category">
                  <li className="py-2 px-7 text-black hover:bg-blue-300 rounded">
                    New Categories
                  </li>
                </Link>
              </ul>
            )}
          </ul>
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
