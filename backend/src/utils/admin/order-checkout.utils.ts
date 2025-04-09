import mongoose from "mongoose";

export const orderCheckoutUtils = (orderId: string) => [
  {
    $match: {
      order: new mongoose.Types.ObjectId(orderId),
    },
  },
  {
    $lookup: {
      from: "itemvariations",
      localField: "item",
      foreignField: "_id",
      as: "stage_one_result",
    },
  },
  {
    $unwind: {
      path: "$stage_one_result",
    },
  },
  {
    $lookup: {
      from: "items",
      localField: "stage_one_result.item",
      foreignField: "_id",
      as: "stage_two_result",
    },
  },
  {
    $unwind: {
      path: "$stage_two_result",
    },
  },
  {
    $lookup: {
      from: "masteritems",
      localField: "stage_two_result.master_item",
      foreignField: "_id",
      as: "stage_three_result",
    },
  },
  {
    $unwind: {
      path: "$stage_three_result",
    },
  },
  {
    $project: {
      _id: 1,
      order: 1,
      item: 1,
      quantity: 1,
      status: 1,
      item_name: "$stage_three_result.name",
      item_price: "$stage_one_result.price",
      item_quantity: "$stage_one_result.quantity",
    },
  },
];
