"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  useAddNewRestaurantHook,
  useUpdateRestaurantHook,
} from "@/app/_hooks/super-admin/restaurant/restaurant.hook";

const CustomAddModal = ({
  modalDetails,
  type,
  isOpen,
  setIsOpen,
  editData = null,
  removeHandleEditData,
}: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const { mutate: addMutate } = useAddNewRestaurantHook();
  const { mutate: updateMutate } = useUpdateRestaurantHook();

  useEffect(() => {
    if (editData) {
      Object.keys(editData).forEach((key) => {
        setValue(key, editData[key]);
      });
    }
  }, [editData, setValue]);

  const onSubmit = async (data: any) => {
    if (type === "restaurant") {
      await addMutate(data);
      setIsOpen(false);
      reset();
    }
  };

  console.log("type123", type);
  const onEditData = async (data: any) => {
    if (type === "restaurant") {
      updateMutate(data);
      setIsOpen(false);
      reset();
    }
  };

  return (
    <>
      <button
        className="custombgcolor px-4 py-2 rounded-lg text-base font-medium"
        onClick={() => setIsOpen(true)}
      >
        {editData ? "Edit Category" : "Add New Category"}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-gray-500/75 transition-opacity"
            aria-hidden="true"
          />

          <div className="fixed inset-0 z-60 flex items-center justify-center px-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6">
              {modalDetails?.heading && (
                <h3
                  className="text-center font-semibold text-gray-900 text-lg"
                  id="modal-title"
                >
                  {modalDetails.heading}
                </h3>
              )}
              <hr className="mt-2 mb-4" />

              {modalDetails?.formFields?.map((input: any, index: number) => (
                <div key={index} className="mb-4">
                  <label className="block mb-1 font-medium text-sm text-gray-700">
                    {input.label}
                  </label>
                  {input.type === "textarea" ? (
                    <textarea
                      {...register(input.name, { required: input.required })}
                      placeholder={input.placeholder}
                      className="w-full border border-gray-600 px-3 py-1 rounded-lg resize-none h-24"
                    />
                  ) : (
                    <input
                      {...register(input.name, { required: input.required })}
                      type={input.type}
                      placeholder={input.placeholder}
                      className="w-full border border-gray-600 px-3 py-1 rounded-lg"
                    />
                  )}
                  {errors[input.name] && (
                    <span className="text-red-600 text-sm">
                      {input.error || `${input.label} is required`}
                    </span>
                  )}
                </div>
              ))}

              <div className="flex justify-end gap-2">
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  onClick={handleSubmit(editData ? onEditData : onSubmit)}
                >
                  {editData ? "Update" : "Submit"}
                </button>
                <button
                  className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                  onClick={() => {
                    setIsOpen(false);
                    reset();
                    removeHandleEditData();
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomAddModal;
