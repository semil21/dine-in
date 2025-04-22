import { useUpdateRestaurantStatusHook } from "@/app/_hooks/super-admin/restaurant/restaurant.hook";
import React from "react";
import CustomAddModal from "../custom-add-modal/customAddModal";

interface Column<T> {
  key: keyof T;
  value: string;
}

interface CustomDataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  type?: string;
  heading?: string;
  modalDetails?: any;
}

const CustomDataTable = <T extends { _id: string; status?: boolean }>({
  data = [],
  columns = [],
  heading,
  type,
  modalDetails,
}: CustomDataTableProps<T>) => {
  const { mutate } = useUpdateRestaurantStatusHook();

  if (!data || data.length === 0) {
    return <div>No data found</div>;
  }

  const handleStatusUpdate = (id: string, status: boolean) => {
    if (type === "restaurant") {
      mutate({ id, status });
    }
  };

  return (
    <>
      {heading && (
        <h1 className="text-center font-medium text-3xl bg-black text-white py-3">
          {heading}
        </h1>
      )}

      <div className="flex justify-center md:justify-end my-6">
        <CustomAddModal modalDetails={modalDetails} type={type} />
      </div>

      <div className="relative w-full h-full overflow-x-auto text-gray-700 bg-white shadow-md rounded-lg bg-clip-border my-6">
        <table className="w-full text-left table-auto">
          <thead>
            <tr>
              {columns.length > 0 ? (
                columns.map((column, index) => (
                  <th key={index} className="px-8 py-4">
                    {column.value}
                  </th>
                ))
              ) : (
                <th>No Columns Found</th>
              )}
              <th className="px-8 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={`hover:bg-black hover:text-white text-gray-700 ${
                  index % 2 === 0 ? "bg-blue-50" : "bg-white"
                }`}
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="py-4 px-8 border-b">
                    {String(column.key).toLowerCase().includes("status") ||
                    String(column.key).toLowerCase().includes("approved") ? (
                      <button
                        className={`px-4 py-1.5 w-24 rounded-lg text-white ${
                          item[column.key] ? "bg-green-600" : "bg-red-600"
                        }`}
                        onClick={() =>
                          handleStatusUpdate(item._id, item.status ?? false)
                        }
                      >
                        {item[column.key] ? "Active" : "Inactive"}
                      </button>
                    ) : (
                      <p className="w-[11rem] text-base font-medium">
                        {item[column.key]?.toString() ?? "N/A"}
                      </p>
                    )}
                  </td>
                ))}

                <td className="py-4 px-8 border-b">
                  <button
                    className="bg-blue-600  text-white font-medium px-4 py-1.5 rounded-lg"
                    onClick={() =>
                      modalDetails?.onEdit && modalDetails.onEdit(item)
                    }
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomDataTable;
