import { Request, Response } from "express";
import { fetchAllTablesOfRestaurantUtils } from "../../../utils/super-admin/get-all-restaurant-tables";
import Table from "../../../schema/super-admin/table/table.schema";
export const createNewTable = async (req: Request, res: Response) => {
  try {
    const saveTableRecord = await Table.create(req.body);
    if (saveTableRecord) {
      res.status(200).send({ response: saveTableRecord });
    } else {
      res.status(400).send({ response: "Failed to create new table" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to create new table" });
  }
};

export const getAllTablesOfRestaurant = async (req: Request, res: Response) => {
  try {
    const { restaurantId } = req.params;

    const fetchAllRecorrdsPipeline = await fetchAllTablesOfRestaurantUtils(
      restaurantId,
    );

    const getAllTabblesOfRestaurant = await Table.aggregate(
      fetchAllRecorrdsPipeline,
    );

    if (getAllTabblesOfRestaurant) {
      res.status(200).send({ response: getAllTabblesOfRestaurant });
    } else {
      res
        .status(400)
        .send({ response: "Failed to get all tables of restaurant" });
    }
  } catch (error) {
    res.status(500).send({
      response: "Server error, failed to get all tables of a restaurant",
    });
  }
};

export const updateTable = async (req: Request, res: Response) => {
  try {
    const { tableId } = req.params;

    const updateTableRecord = await Table.findByIdAndUpdate(
      { _id: tableId },
      req.body,
      { new: true },
    );

    if (updateTableRecord) {
      res.status(200).send({ response: updateTableRecord });
    } else {
      res.status(400).send({ response: "Failed to update table record" });
    }
  } catch (error) {
    res.status(500).send({ response: "Server error, failed to update table" });
  }
};

export const updateTableStatus = async (req: Request, res: Response) => {
  try {
    const { tableId } = req.params;

    const { status } = req.body;

    const updatedStatus = status === true ? false : true;

    const updateTableStatusRecord = await Table.findByIdAndUpdate(
      { _id: tableId },
      { status: updatedStatus },
      { new: true },
    );

    if (updateTableStatusRecord) {
      res.status(200).send({ response: updateTableStatusRecord });
    } else {
      res.status(400).send({ response: "Faild to update table status" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to update table status" });
  }
};
