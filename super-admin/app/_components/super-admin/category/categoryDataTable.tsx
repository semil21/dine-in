"use client";
import React, { useState } from "react";
import AddCategoryModal from "./addCategoryModal";
const CategoryTable = ({ data }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [restaurantInfo, setRestaurantInfo] = useState({ name: "", area: "" });

  const handleShowMddal = () => {
    setShowModal(false);
    setRestaurantInfo({ name: "", area: "" });
  };
  return (
    <>
      <h1 className="text-center font-medium text-3xl bg-black text-white py-3">
        All Categories
      </h1>
      {data &&
        data?.map((cat: any, index: number) => (
          <div key={index} className="my-8">
            <div className="flex flex-col md:flex-row gap-10 justify-center ">
              <div className="flex flex-col md:flex-row gap-4 text-lg font-medium">
                <h4> {cat?.restaurant_name.toUpperCase()},</h4>
                <p>{cat?.restaurant_address.toUpperCase()}, </p>
                <p>{cat?.restaurant_area.toUpperCase()}, </p>
                <p>{cat?.restaurant_city.toUpperCase()} </p>
              </div>
              <div>
                <button
                  onClick={() => {
                    setShowModal(true);
                    setRestaurantInfo({
                      name: cat?.restaurant_name,
                      area: cat?.restaurant_area,
                    });
                  }}
                >
                  Add
                </button>
                {showModal && (
                  <AddCategoryModal
                    handleShowMddal={handleShowMddal}
                    restaurantInfo={restaurantInfo}
                  />
                )}
              </div>
            </div>

            <div className="relative w-full h-full overflow-x-auto text-gray-700 bg-white shadow-md rounded-lg bg-clip-border my-6">
              <table className="w-full text-left table-auto">
                <thead>
                  <tr className="bg-slate-500 text-white">
                    <th className="w-[800px] p-4 border-b border-slate-300 ">
                      <p className="block text-lg font-medium leading-none  ">
                        Name
                      </p>
                    </th>
                    <th className="w-[300px] p-4 border-b border-slate-300 ">
                      <p className="block text-lg font-medium leading-none ">
                        Status
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.length == 0 ? (
                    <p>Failed to get All Categories</p>
                  ) : (
                    data &&
                    cat &&
                    cat?.categories?.map((item: any, index: number) => (
                      <tr
                        key={index}
                        className={`hover:bg-black hover:text-white text-gray-700 ${
                          index % 2 === 0 ? "bg-blue-50" : "bg-white"
                        }`}
                      >
                        <td className="p-4 border-b py-5">
                          <p className="w-36 text-base font-medium ">
                            {item?.category_name}
                          </p>
                        </td>
                        <td className="w-[150px] p-4 border-b border-slate-200 py-5">
                          <p className="text-base font-medium ">
                            <button className="bg-green-600 text-white px-4 py-2 w-24 rounded-lg hover:bg-green-700">
                              {item?.category_status ? (
                                <span className="text-white font-semibold">
                                  Active
                                </span>
                              ) : (
                                <span className="text-white font-semibold">
                                  Inactive
                                </span>
                              )}
                            </button>
                          </p>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ))}
    </>
  );
};

export default CategoryTable;
