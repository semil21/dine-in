"use client";
import {
  useGetAllMasterItemsHook,
  useItemStatusHook,
} from "@/app/_hooks/item/item.hook";
import React, { useState } from "react";
import CutomSkeleton from "../custom-skeleton/cutomSkeleton";
import { itemType } from "@/app/_types/item.type";
import AddItemModal from "./addItemModal";
const ItemsDataTable = () => {
  const [searchItem, setSearchItem] = useState("");

  const { data, isPending } = useGetAllMasterItemsHook();

  const filteredData = data?.filter((item: itemType) =>
    item?.name?.toLowerCase().includes(searchItem.toLowerCase()),
  );

  const { mutate } = useItemStatusHook();

  const handleItemStatusUpdate = async (data: {
    _id: string;
    status: boolean;
  }) => {
    await mutate(data);
  };
  return (
    <>
      <div className="mt-4 flex flex-col md:flex-row lg:flex-row  justify-between gap-6  ">
        <input
          type="text"
          className="border-2 border-gray-300 rounded-lg p-2 w-80"
          placeholder="Search Item Here...."
          onChange={(e) => setSearchItem(e.target.value)}
        />

        <AddItemModal />
      </div>
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
                    STATUS
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData && filteredData.length > 0 ? (
                filteredData.map((item: itemType, index: number) => (
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
                        {
                          <button
                            className={`w-20 px-2 py-1 rounded-lg text-white ${
                              item?.status ? "bg-green-600" : "bg-red-600"
                            }`}
                            onClick={() =>
                              handleItemStatusUpdate({
                                _id: item?._id ?? "",
                                status: item?.status ?? false,
                              })
                            }
                          >
                            {item?.status ? "Active" : "Inactive"}
                          </button>
                        }
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
                    No Item Found
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

export default ItemsDataTable;
