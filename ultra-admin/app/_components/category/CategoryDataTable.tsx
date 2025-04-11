"use client";
import { useAllCategoryHook } from "@/app/_hooks/category/category.hook";
import React, { useState } from "react";
import date from "date-and-time";
import CutomSkeleton from "../custom-skeleton/cutomSkeleton";
import { categoryType } from "@/app/_types/category";
const CategoryDataTable = () => {
  const [searchCategory, setSearchCategory] = useState("");

  const { data, error, isPending } = useAllCategoryHook();

  const now = new Date();

  date.format(now, "ddd, MMM DD YYYY");

  const filteredData = data?.filter((item: categoryType) =>
    item?.name?.toLowerCase().includes(searchCategory.toLowerCase()),
  );

  return (
    <>
      <div className="mt-4">
        <input
          type="text"
          className="border-2 border-gray-300 rounded-md p-2 w-80"
          placeholder="Search Category Here...."
          onChange={(e) => setSearchCategory(e.target.value)}
        />
      </div>
      {!isPending && !error ? (
        <div className="relative w-full h-full overflow-x-auto text-gray-700 bg-white shadow-md rounded-lg bg-clip-border my-4">
          <table className="w-full text-left table-auto">
            <thead>
              <tr>
                <th className="w-[400px] p-4 border-b border-slate-300 bg-slate-50">
                  <p className="block text-base font-bold leading-none text-black">
                    NAME
                  </p>
                </th>
                <th className="w-[300px] p-4 border-b border-slate-300 bg-slate-50">
                  <p className="block text-base font-bold leading-none text-black">
                    STATUS
                  </p>
                </th>
                <th className="w-[300px] p-4 border-b border-slate-300 bg-slate-50">
                  <p className="block text-base font-bold leading-none text-black">
                    CREATED AT
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData && filteredData.length > 0 ? (
                filteredData.map((item: categoryType, index: number) => (
                  <tr
                    key={index}
                    className={`hover:bg-green-100 ${
                      index % 2 === 0 ? "bg-blue-50" : "bg-white"
                    }`}
                  >
                    <td className="p-4 border-b py-5">
                      <p className="w-[11rem] text-base font-medium text-gray-700">
                        {item.name}
                      </p>
                    </td>
                    <td className="p-4 border-b py-5">
                      <p className="w-[7rem] text-base font-medium text-gray-700">
                        {item.status ? (
                          <span className="text-green-600 font-semibold">
                            Active
                          </span>
                        ) : (
                          <span className="text-red-600 font-semibold">
                            Inactive
                          </span>
                        )}
                      </p>
                    </td>
                    <td className="p-4 border-b py-5">
                      <p className="w-[11rem] text-base font-medium text-gray-700">
                        {item?.createdAt
                          ? date.format(
                              new Date(item.createdAt),
                              "ddd, MMM DD YYYY",
                            )
                          : "N/A"}
                      </p>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={3}
                    className="text-center py-5 text-gray-800 font-medium"
                  >
                    No Category Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="h-screen flex items-center justify-center">
          <CutomSkeleton />
        </div>
      )}
    </>
  );
};

export default CategoryDataTable;
