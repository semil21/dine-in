"use client";
import { useGetRestaurantHook } from "@/app/_hooks/super-admin/restaurant/restaurant.hook";
import React from "react";
import CutomSkeleton from "../../common/custom-skeleton/cutomSkeleton";
import CustomDataTable from "../../common/custom-data-table/customDataTable";
const RestaurantHomePage = () => {
  const { data, isPending } = useGetRestaurantHook();

  const tableColumns = [
    {
      key: "name",
      value: "Restaurant",
    },
    {
      key: "address",
      value: "Address",
    },
    {
      key: "area",
      value: "Area",
    },

    {
      key: "city",
      value: "City",
    },
    {
      key: "state",
      value: "State",
    },
    {
      key: "email",
      value: "Email",
    },

    {
      key: "contact",
      value: "Contact",
    },
    {
      key: "alternateContact",
      value: "Alt Contact",
    },

    {
      key: "gst",
      value: "GST",
    },
    {
      key: "status",
      value: "Status",
    },
  ];
  return (
    <div>
      {!isPending ? (
        <CustomDataTable
          data={data}
          columns={tableColumns}
          type="restaurant"
          heading="All Restaurants"
        />
      ) : (
        <CutomSkeleton />
      )}
    </div>
  );
};

export default RestaurantHomePage;
