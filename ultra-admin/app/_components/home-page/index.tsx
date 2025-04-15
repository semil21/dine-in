"use client";
import { useGetAllDashboardCountHook } from "@/app/_hooks/dashboard/dashboard.hook";
import React from "react";
import { RiAdminFill } from "react-icons/ri";
import { FaHotel } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { TbCategory } from "react-icons/tb";
import { MdFastfood } from "react-icons/md";
import { MdOutlineFastfood } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { PiPicnicTableBold } from "react-icons/pi";
import { TbReservedLine } from "react-icons/tb";
import { MdPendingActions } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { GiCancel } from "react-icons/gi";

const HomePage = () => {
  const { data } = useGetAllDashboardCountHook();

  const {
    super_admins,
    restaurant,
    admins,
    master_categories,
    categories,
    master_item,
    items,
    item_variatio,
    tables,
    table_reservation,
    pendingOrder,
    completedOrder,
    cancelledOrder,
  } = data || {};

  return (
    <div>
      {(super_admins || restaurant || admins) && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-3">
          <div className="card w-full bg-base-100 shadow-xl mt-0 sm:mt-4  ">
            <div className="card-body flex flex-col justify-center items-center gap-10 py-5 border-[1px] border-gray-200">
              <div className="flex items-center gap-4">
                <RiAdminFill
                  className="h-5 w-8 text-fuchsia-600
"
                />
                <h2 className="card-title text-xl font-semibold">
                  Super Admins
                </h2>
              </div>
              <p className="text-center text-xl font-semibold">
                {super_admins}
              </p>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl mt-0 sm:mt-4">
            <div className="card-body flex flex-col justify-center items-center gap-10 py-5 border-[1px] border-gray-200">
              <div className="flex items-center gap-4">
                <FaHotel
                  className="h-5 w-8 text-stone-600
"
                />
                <h2 className="card-title text-xl font-semibold">
                  Restaurants
                </h2>
              </div>
              <p className="text-center text-xl font-semibold">{restaurant}</p>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl mt-0 sm:mt-4">
            <div className="card-body flex flex-col justify-center items-center gap-10 py-5 border-[1px] border-gray-200">
              <div className="flex items-center gap-4">
                <IoPeopleSharp
                  className="h-5 w-8 text-rose-500
"
                />
                <h2 className="card-title text-xl font-semibold">
                  Restaurant Staff
                </h2>
              </div>

              <p className="text-center text-xl font-semibold">{admins}</p>
            </div>
          </div>
        </div>
      )}

      {(master_categories || categories) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10 ">
          <div className="card w-full bg-base-100 shadow-xl mt-0 sm:mt-4  ">
            <div className="card-body flex flex-col justify-center items-center gap-10 py-5 border-[1px] border-gray-200">
              <div className="flex items-center gap-4">
                <BiSolidCategory className="h-5 w-8 text-indigo-600" />
                <h2 className="card-title text-xl font-semibold">
                  Master Categories
                </h2>
              </div>
              <p className="text-center text-xl font-semibold">
                {master_categories}
              </p>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl mt-0 sm:mt-4">
            <div className="card-body flex flex-col justify-center items-center gap-10 py-5 border-[1px] border-gray-200">
              <div className="flex items-center gap-4">
                <TbCategory className="h-5 w-8 text-slate-600" />
                <h2 className="card-title text-xl font-semibold">Categories</h2>
              </div>
              <p className="text-center text-xl font-semibold">{categories}</p>
            </div>
          </div>
        </div>
      )}

      {(master_item || items || item_variatio) && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card w-full bg-base-100 shadow-xl mt-0 sm:mt-4  ">
            <div className="card-body flex flex-col justify-center items-center gap-10 py-5 border-[1px] border-gray-200">
              <div className="flex items-center gap-4">
                <MdFastfood className="h-5 w-8 text-cyan-600" />
                <h2 className="card-title text-xl font-semibold">
                  Master Items
                </h2>
              </div>
              <p className="text-center text-xl font-semibold">{master_item}</p>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl mt-0 sm:mt-4">
            <div className="card-body flex flex-col justify-center items-center gap-10 py-5 border-[1px] border-gray-200">
              <div className="flex items-center gap-4">
                <MdOutlineFastfood className="h-5 w-8 text-teal-500" />
                <h2 className="card-title text-xl font-semibold">Items</h2>
              </div>
              <p className="text-center text-xl font-semibold">{items}</p>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl mt-0 sm:mt-4">
            <div className="card-body flex flex-col justify-center items-center gap-10 py-5 border-[1px] border-gray-200">
              <div className="flex items-center gap-4">
                <BiFoodMenu
                  className="h-5 w-8 text-violet-600
"
                />
                <h2 className="card-title text-xl font-semibold">
                  Item Variations
                </h2>
              </div>
              <p className="text-center text-xl font-semibold">
                {item_variatio}
              </p>
            </div>
          </div>
        </div>
      )}

      {(tables || table_reservation) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
          <div className="card w-full bg-base-100 shadow-xl mt-0 sm:mt-4  ">
            <div className="card-body flex flex-col justify-center items-center gap-10 py-5 border-[1px] border-gray-200">
              <div className="flex items-center gap-4">
                <PiPicnicTableBold
                  className="h-5 w-8 text-orange-700
"
                />
                <h2 className="card-title text-xl font-semibold">Tables</h2>
              </div>
              <p className="text-center text-xl font-semibold">{tables}</p>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl mt-0 sm:mt-4">
            <div className="card-body flex flex-col justify-center items-center gap-10 py-5 border-[1px] border-gray-200">
              <div className="flex items-center gap-4">
                <TbReservedLine
                  className="h-5 w-8 text-zinc-600
"
                />
                <h2 className="card-title text-xl font-semibold">
                  Table Reservations
                </h2>
              </div>
              <p className="text-center text-xl font-semibold">
                {table_reservation}
              </p>
            </div>
          </div>
        </div>
      )}

      {(pendingOrder || completedOrder || cancelledOrder) && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card w-full bg-base-100 shadow-xl mt-0 sm:mt-4  ">
            <div className="card-body flex flex-col justify-center items-center gap-10 py-5 border-[1px] border-gray-200">
              <div className="flex items-center gap-4">
                <MdPendingActions className="h-5 w-8 text-yellow-500" />
                <h2 className="card-title text-xl font-semibold">
                  Pending Orders
                </h2>
              </div>
              <p className="text-center text-xl font-semibold">
                {pendingOrder}
              </p>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl mt-0 sm:mt-4">
            <div className="card-body flex flex-col justify-center items-center gap-10 py-5 border-[1px] border-gray-200">
              <div className="flex items-center gap-4">
                <IoCheckmarkDoneCircleSharp className="h-5 w-8 text-green-500" />
                <h2 className="card-title text-xl font-semibold">
                  Completed Orders
                </h2>
              </div>
              <p className="text-center text-xl font-semibold">
                {completedOrder}
              </p>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl mt-0 sm:mt-4">
            <div className="card-body flex flex-col justify-center items-center gap-10 py-5 border-[1px] border-gray-200">
              <div className="flex items-center gap-4">
                <GiCancel className="h-5 w-8 text-red-600" />
                <h2 className="card-title text-xl font-semibold">
                  Cancelled Orders
                </h2>
              </div>

              <p className="text-center text-xl font-semibold">
                {cancelledOrder}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
