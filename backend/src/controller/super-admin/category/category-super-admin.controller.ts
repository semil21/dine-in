import { Request, Response } from "express";
import Category from "../../../schema/super-admin/category/category-super-admin.schmea";
import mongoose from "mongoose";
import { fetchAllUserCategoriesUtils } from "../../../utils/super-admin/get-all-user-categories.utils";
import MasterCategory from "../../../schema/ultra-admin/master-category/master-category.schema";
import { getAllActiveMasterCategoriesUtils } from "../../../utils/super-admin/get-all-active-master-categories";

export const saveNewCategory = async (req: Request, res: Response) => {
  try {
    req.body.user = req.body.id;

    const { restaurant, category } = req.body;

    const checkCategoryExists = await Category.findOne({
      restaurant: restaurant,
      category: category,
    });

    if (checkCategoryExists) {
      return res.status(400).send({ result: "Category already exists" });
    }
    const saveCategoryRecord = await Category.create(req.body);

    if (saveCategoryRecord) {
      res.status(200).send({ result: saveCategoryRecord });
    } else {
      res.status(400).send({ result: "Failed to save new category" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ result: "Server error, failed to save new category" });
  }
};

export const getAllCategoriesOfRestaurant = async (
  req: Request,
  res: Response,
) => {
  try {
    const adminId = req.body.id;

    const fetchCategoriesPipeline = fetchAllUserCategoriesUtils(adminId);

    const fetchALlRestaurantsRecord = await Category.aggregate(
      fetchCategoriesPipeline,
    );

    if (fetchALlRestaurantsRecord) {
      res.status(200).send({ result: fetchALlRestaurantsRecord });
    } else {
      res
        .status(400)
        .send({ result: "Failed to get all categories of a restaurant" });
    }
  } catch (error) {
    res.status(500).send({
      result: "Server error, failed to get all categories of a restaurant",
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

    const updateRecordStatus = await Category.findByIdAndUpdate(
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
      res.status(400).send({ result: "Failed to update category status" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ result: "Server error, failed to update category status" });
  }
};

export const getAllActiveMasterCategories = async (
  req: Request,
  res: Response,
) => {
  try {
    const fetchAllMAsterCategoriesPipeline =
      await getAllActiveMasterCategoriesUtils();

    const fetchAllActiveMasterCategories = await MasterCategory.aggregate(
      fetchAllMAsterCategoriesPipeline,
    );

    if (fetchAllActiveMasterCategories) {
      res.status(200).send({ result: fetchAllActiveMasterCategories });
    } else {
      res
        .status(400)
        .send({ response: "Failed to get all active master categories." });
    }
  } catch (error) {
    res.status(500).send({
      response: "Server error, failed to get all active master categories.",
      error: error,
    });
  }
};
