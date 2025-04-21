"use client";
import { useGetRestaurantHook } from "@/app/_hooks/super-admin/restaurant/restaurant.hook";
import React from "react";
import CutomSkeleton from "../../common/custom-skeleton/cutomSkeleton";
import CustomDataTable from "../../common/custom-data-table/customDataTable";
import { restaurantTableColumns } from "@/app/_table_columns/super-admin/restaurant-table-columns";
import { addNewRestaurantModal } from "@/app/_modal/super-admin/add-new-restaurant.modal";
const RestaurantHomePage = () => {
  const { data, isPending } = useGetRestaurantHook();

  const tableColumns = restaurantTableColumns;

  const modalDetails = addNewRestaurantModal;

  return (
    <div>
      {!isPending ? (
        <div>
          <CustomDataTable
            data={data}
            columns={tableColumns}
            type="restaurant"
            heading="All Restaurants"
            modalDetails={modalDetails}
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

export default RestaurantHomePage;
