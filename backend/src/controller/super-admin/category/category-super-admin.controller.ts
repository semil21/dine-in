import { Request, Response } from "express";
import SuperAdminCategory from "../../../schema/super-admin/category/category-super-admin.schmea";

export const saveNewCategory = async (req: Request, res: Response) => {
  try {
    const saveCategoryRecord = await SuperAdminCategory.create(req.body);

    if (saveCategoryRecord) {
      res.status(200).send({ response: saveCategoryRecord });
    } else {
      res.status(400).send({ response: "Failed to save new category" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to save new category" });
  }
};

export const getAllCategoriesOfRestaurant = async (
  req: Request,
  res: Response,
) => {
  try {
    const { restaurantId } = req.params;

    const fetchALlRestaurantsRecord = await SuperAdminCategory.find({
      restaurant: restaurantId,
    }).lean();

    if (fetchALlRestaurantsRecord) {
      res.status(200).send({ response: fetchALlRestaurantsRecord });
    } else {
      res
        .status(400)
        .send({ response: "Failed to get all categories of a restaurant" });
    }
  } catch (error) {
    res.status(500).send({
      response: "Server error, failed to get all categories of a restaurant",
    });
  }
};

export const updateRestaurantCategoryStatus = async (
  req: Request,
  res: Response,
) => {
  try {
    const { categoryId } = req.params;
    const { status } = req.body;

    const updatedStatus = status === true ? false : true;

    const updateRecordStatus = await SuperAdminCategory.findByIdAndUpdate(
      { _id: categoryId },
      { status: updatedStatus },
      { new: true },
    );

    if (updateRecordStatus) {
      res.status(200).send({
        status: updateRecordStatus?.status,
        message: "Category status updated successfully.",
      });
    } else {
      res.status(400).send({ response: "Failed to update category status" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to update category status" });
  }
};
