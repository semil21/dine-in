"use client";
import { useGetUSerCategoriesHoook } from "@/app/_hooks/super-admin/category/super-admin-category.hook";
import React from "react";
import CutomSkeleton from "../../common/custom-skeleton/cutomSkeleton";
import CategoryDataTable from "./categoryDataTable";
const CategoryHomePage = () => {
  const { data, isPending } = useGetUSerCategoriesHoook();

  return (
    <div>
      {!isPending ? (
        <div>
          <CategoryDataTable data={data} />
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
