"use client";
import { useFetchAllNEwCategoriesHook } from "@/app/_hooks/new-category/new-category.hook";
import React from "react";
import CutomSkeleton from "../custom-skeleton/cutomSkeleton";

const NewCategoryPage = () => {
  const { data, isPending } = useFetchAllNEwCategoriesHook();

  return (
    <>
      {!isPending ? (
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
                    APPROVAL STATUS
                  </p>
                </th>
                <th className="w-[300px] p-4 border-b border-slate-300 bg-slate-50">
                  <p className="block text-base font-bold leading-none text-black">
                    USER
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data?.map((item: any, index: number) => (
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
                  </tr>
                ))}
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

export default NewCategoryPage;
