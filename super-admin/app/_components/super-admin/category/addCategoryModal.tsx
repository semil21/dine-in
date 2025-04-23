"use client";
import {
  useActiveMasterCategoriesHook,
  useAddNewCategoryHook,
} from "@/app/_hooks/super-admin/category/super-admin-category.hook";
import React, { useState } from "react";
import Select, { SingleValue } from "react-select";

const CustomOption = (props: any) => {
  const { data, innerRef, innerProps, isFocused } = props;

  return (
    <div
      ref={innerRef}
      {...innerProps}
      style={{
        backgroundColor: isFocused ? "#f0f0f0" : "white",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <span>{data.name}</span>
    </div>
  );
};

const AddCategoryModal = ({ handleShowMddal, restaurantInfo }: any) => {
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const { data } = useActiveMasterCategoriesHook();

  const { mutate } = useAddNewCategoryHook();
  const handleNewCategory = async () => {
    const restaurant = restaurantInfo.restaurantId;
    const category = selectedCategory;

    const data = { restaurant, category };
    console.log("data :", data);
    await mutate(data);
  };
  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-gray-500/75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg h-72">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left  w-full">
                    <div className="flex justify-between gap-5 ">
                      <h3
                        className="text-base font-semibold text-gray-900"
                        id="modal-title"
                      >
                        Add new category for - {restaurantInfo?.name} ,
                        {restaurantInfo?.area}
                      </h3>

                      <button
                        className="text-red-300 text-xl font-medium"
                        onClick={handleShowMddal}
                      >
                        X
                      </button>
                    </div>
                    <div className="mt-2">
                      <Select
                        options={data?.map(
                          (item: { name: string; _id: string }) => ({
                            label: item.name,
                            value: item._id,
                            ...item,
                          }),
                        )}
                        components={{ Option: CustomOption }}
                        onChange={(
                          selected: SingleValue<{ value: string }>,
                        ) => {
                          setSelectedCategory(selected?.value ?? "");
                        }}
                        styles={{
                          control: (base) => ({
                            ...base,
                            minHeight: "50px",
                            height: "50px",
                            width: "100%",
                          }),
                          menu: (base) => ({
                            ...base,
                            zIndex: 9999,
                          }),
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-24 justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-xs sm:ml-3  "
                  onClick={() => handleNewCategory()}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="inline-flex w-24 justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-xs sm:ml-3  "
                  onClick={handleShowMddal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategoryModal;
