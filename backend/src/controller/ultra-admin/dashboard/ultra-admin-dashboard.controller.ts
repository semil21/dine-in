import { Request, Response } from "express";
import MasterItem from "../../../schema/ultra-admin/master-item/master-item.schema";
import ItemVariation from "../../../schema/super-admin/item-variation/item-variation.schema";
import SuperAdmin from "../../../schema/super-admin/super-admin";
import Restaurant from "../../../schema/super-admin/restaurant/restaurant.schema";
import Admin from "../../../schema/admin/admin.schema";
import MasterCategory from "../../../schema/ultra-admin/master-category/master-category.schema";
import Category from "../../../schema/super-admin/category/category-super-admin.schmea";
import NewOrders from "../../../schema/admin/new-order/new-order.schema";
import Table from "../../../schema/super-admin/table/table.schema";
import TableReservation from "../../../schema/super-admin/table-reservation/table-reservation.schema";
export const getDashBoardCount = async (req: Request, res: Response) => {
  try {
    const [
      superAddminCount,
      restaurantCount,
      adminCount,
      masterCategoryCount,
      masterItemCount,
      categoriesCount,
      itemCount,
      item_variationsCount,
      pendingOrdersCount,
      completedOrdersCount,
      cancelledOrdersCount,
      tableCount,
      tableReservationCount,
    ] = await Promise.all([
      SuperAdmin.countDocuments(),
      Restaurant.countDocuments(),
      Admin.countDocuments(),
      MasterCategory.countDocuments(),
      MasterItem.countDocuments(),
      Category.countDocuments(),
      MasterItem.countDocuments(),
      ItemVariation.countDocuments(),
      NewOrders.countDocuments({ status: "pending" }),
      NewOrders.countDocuments({ status: "completed" }),
      NewOrders.countDocuments({ status: "cancelled" }),
      Table.countDocuments(),
      TableReservation.countDocuments(),
    ]);

    res.status(200).send({
      super_admins: superAddminCount,
      restaurant: restaurantCount,
      admins: adminCount,
      master_categories: masterCategoryCount,
      master_item: masterItemCount,
      categories: categoriesCount,
      items: itemCount,
      item_variatio: item_variationsCount,
      pendingOrder: pendingOrdersCount,
      completedOrder: completedOrdersCount,
      cancelledOrder: cancelledOrdersCount,
      tables: tableCount,
      table_reservation: tableReservationCount,
    });
  } catch (error) {
    res
      .status(500)
      .send({ result: "Server error, failed to get all dashboard counts." });
  }
};
