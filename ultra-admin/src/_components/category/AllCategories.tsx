"use client";
import { useGetAllCategoriesHook } from "@/_hooks/category/category.hook";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { categoryType } from "@/_types/category.type";
import date from "date-and-time";
import Customskeleton from "../custom-skeleton/custom-skeleton";

const AllCategories = () => {
  const { data, isPending } = useGetAllCategoriesHook();

  const formatDate = (dateString: string) => {
    return date.format(new Date(dateString), "ddd, MMM DD YYYY");
  };
  return (
    <>
      {!isPending ? (
        <div className="px-4 w-full overflow-x-auto">
          <Table className="border-[1px] border-gray-300 w-full">
            <TableHeader className="bg-transparent">
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-lg font-semibold">No</TableHead>
                <TableHead className="text-lg font-semibold">Name</TableHead>
                <TableHead className="text-lg font-semibold">Status</TableHead>
                <TableHead className="text-lg font-semibold">Created</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
              {data &&
                data?.map((item: categoryType, index: number) => (
                  <TableRow
                    key={index}
                    className="odd:bg-muted/50 odd:hover:bg-muted/50 border-none hover:bg-transparent"
                  >
                    <TableCell className="py-2.5 font-normal text-base">
                      {index + 1}
                    </TableCell>
                    <TableCell className="py-2.5 text-base ">
                      {item.name}
                    </TableCell>
                    <TableCell className="py-2.5 text-base">
                      {item.status === true ? "active" : "inactive"}
                    </TableCell>
                    <TableCell className="py-2.5 text-base">
                      {item?.createdAt && formatDate(item?.createdAt)}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="flex flex-col space-y-3 justify-center items-center h-screen">
          <div className="space-y-2">
            <Customskeleton />
          </div>
        </div>
      )}
    </>
  );
};

export default AllCategories;
