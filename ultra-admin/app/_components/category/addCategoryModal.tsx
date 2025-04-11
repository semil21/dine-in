"use client";
import { useAddNewMasterCategoryHook } from "@/app/_hooks/category/category.hook";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
const AddCategoryModal = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate } = useAddNewMasterCategoryHook();

  const onSubmit = async (name: string) => {
    await mutate(name);
    setShowModal(false);
    reset();
  };
  return (
    <>
      <button
        className="custombgcolor px-4 py-1 rounded-xl text-base font-medium"
        onClick={() => setShowModal(true)}
      >
        Add New Category
      </button>
      {showModal && (
        <div
          className=" z-10"
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
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start justify-center ">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-base text-center font-semibold text-gray-900"
                        id="modal-title"
                      >
                        Add New Category
                      </h3>
                      <hr className="mt-2" />
                      <div className="mt-2 flex flex-col gap-2">
                        <input
                          type="text"
                          placeholder="Enter category name"
                          className="border-[1px] border-gray-600 rounded-lg px-3 py-1 w-[18rem]"
                          {...register("name", { required: true })}
                        />
                        {errors.name && (
                          <span className="text-red-600 text-base">
                            Category mame is required.
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs sm:ml-3 sm:w-auto"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddCategoryModal;
