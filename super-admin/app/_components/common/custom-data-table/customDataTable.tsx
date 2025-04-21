import React from "react";
interface Column {
  key: string;
  value: string;
}

interface CustomDataTableProps {
  data: any[];
  columns: Column[];
  type?: string;
  heading?: string;
}
const CustomDataTable = ({
  data = [],
  columns = [],
  heading,
}: CustomDataTableProps) => {
  if (!data || data.length === 0) {
    return <div>No data found</div>;
  }

  return (
    <>
      <h1 className="text-center font-medium text-3xl bg-black text-white py-3">
        {heading}
      </h1>
      <div className="relative w-full h-full overflow-x-auto text-gray-700 bg-white shadow-md rounded-lg bg-clip-border my-6">
        <table className="w-full text-left table-auto">
          <thead>
            {columns && columns?.length > 0 ? (
              columns?.map((column, index) => (
                <th key={index} className="px-8 py-4">
                  {column.value}
                </th>
              ))
            ) : (
              <div> No Columns Found </div>
            )}
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={`hover:bg-black hover:text-white text-gray-700 ${
                  index % 2 === 0 ? "bg-blue-50" : "bg-white"
                }`}
              >
                {columns?.map((column, index) => (
                  <td key={index} className="py-4 px-8 border-b ">
                    {column.key.toLowerCase().includes("status") ||
                    column.key.toLowerCase().includes("approved") ? (
                      <button
                        className={`px-4 py-1.5 w-24 rounded-lg text-white ${
                          item[column.key] ? "bg-green-600" : "bg-red-600"
                        }`}
                      >
                        {item[column.key] ? "Active" : "Inactive"}
                      </button>
                    ) : (
                      <p className="w-[11rem] text-base font-medium ">
                        {item[column.key]?.toString() ?? "N/A"}
                      </p>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomDataTable;
