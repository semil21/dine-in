"use client";
import {
  useApproveNewCategoryHook,
  useFetchAllNEwCategoriesHook,
} from "@/app/_hooks/new-category/new-category.hook";
import React from "react";
import CutomSkeleton from "../custom-skeleton/cutomSkeleton";
import { newMasterCategoryType } from "@/app/_types/new-master-category";
import date from "date-and-time";
import Swal from "sweetalert2";

const NewCategoryPage = () => {
  const { data, isPending } = useFetchAllNEwCategoriesHook();

  const { mutate } = useApproveNewCategoryHook();

  const handleNewCategoryApproval = (newCategoryId: string) => {
    Swal.fire({
      title: "Are you sure to approve this new category ?",
      text: "Once approved it cannot be reverted !",
      icon: "info",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Approve",
      confirmButtonColor: "#10B981",
      cancelButtonColor: "#EF4444",
    }).then((result) => {
      if (result.isConfirmed) {
        mutate(newCategoryId);
      }
    });
  };

  return (
    <>
      {!isPending ? (
        <div className="relative w-full h-full overflow-x-auto text-gray-700 bg-white shadow-md rounded-lg bg-clip-border my-4">
          <table className="w-full text-left table-auto">
            <thead>
              <tr>
                <th className="w-[400px] p-4 border-b border-slate-300 bg-slate-50">
                  <p className="block text-base font-bold leading-none text-black">
                    CATEGORY NAME
                  </p>
                </th>
                <th className="w-[400px] p-4 border-b border-slate-300 bg-slate-50">
                  <p className="block text-base font-bold leading-none text-black">
                    USER EMAIL
                  </p>
                </th>
                <th className="w-[400px] p-4 border-b border-slate-300 bg-slate-50">
                  <p className="block text-base font-bold leading-none text-black">
                    CREATED AT
                  </p>
                </th>
                <th className="w-[300px] p-4 border-b border-slate-300 bg-slate-50">
                  <p className="block text-base font-bold leading-none text-black">
                    APPROVAL STATUS
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data?.map((item: newMasterCategoryType, index: number) => (
                  <tr
                    key={index}
                    className={`hover:bg-green-100 ${
                      index % 2 === 0 ? "bg-blue-50" : "bg-white"
                    }`}
                  >
                    <td className="p-4 border-b py-5">
                      <p className="w-[11rem] text-base font-medium text-gray-700">
                        {item?.name}
                      </p>
                    </td>
                    <td className="p-4 border-b py-5">
                      <p className="w-[11rem] text-base font-medium text-gray-700">
                        {item?.user_email}
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
                    <td className="p-4 border-b py-5">
                      <p className="w-[11rem] text-base font-medium text-gray-700">
                        <button
                          className="bg-red-600 px-4 py-1 text-white rounded-lg"
                          onClick={() => handleNewCategoryApproval(item._id)}
                        >
                          {item?.isApproved ? "true" : "Unapproved"}
                        </button>
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
