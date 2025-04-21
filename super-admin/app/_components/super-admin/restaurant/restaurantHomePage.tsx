"use client";
import { useGetRestaurantHook } from "@/app/_hooks/super-admin/restaurant/restaurant.hook";
import React from "react";
import DataTable from "../../common/data-table/dataTable";
import CutomSkeleton from "../../custom-skeleton/cutomSkeleton";
const RestaurantHomePage = () => {
  const { data, isPending } = useGetRestaurantHook();

  return <div>{!isPending ? <DataTable /> : <CutomSkeleton />}</div>;
};

export default RestaurantHomePage;
