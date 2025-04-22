"use client";
import { useGetUSerCategoriesHoook } from "@/app/_hooks/super-admin/category/super-admin-category.hook";
import React from "react";
import CustomDataTable from "../../common/custom-data-table/customDataTable";
import CutomSkeleton from "../../common/custom-skeleton/cutomSkeleton";
import { categoryTableColumns } from "@/app/_table_columns/super-admin/category-table-columns";
const CategoryHomePage = () => {
  const { data, isPending } = useGetUSerCategoriesHoook();

  const tableColumns = categoryTableColumns;

  console.log("dataert", JSON.stringify(data, null, 22));
  return (
    <div>
      {!isPending ? (
        <div>
          <CustomDataTable
            data={data}
            columns={tableColumns}
            type="restaurant"
            heading="All Restaurants"
            // modalDetails={modalDetails}
          />
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <CutomSkeleton />
        </div>
      )}
    </div>
  );
};

export default CategoryHomePage;
