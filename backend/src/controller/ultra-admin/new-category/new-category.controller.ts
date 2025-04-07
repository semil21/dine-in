import { Request, Response } from "express";
import NewCategory from "../../../schema/super-admin/category/new-category/new-category.schema";
import MasterCategory from "../../../schema/ultra-admin/master-category/master-category.schema";
import { fetchNewCategoryUtils } from "../../../utils/ultra-admin/new-category.utils";
export const getNewCategoriesRequest = async (req: Request, res: Response) => {
  try {
    const fetchRecords = await NewCategory.aggregate(fetchNewCategoryUtils);

    if (fetchRecords) {
      res.status(200).send({ result: fetchRecords });
    } else {
      res.status(400).send({ result: "Failed to fetch all new categories" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ result: "Server error, failed to get all new categories" });
  }
};

export const approveNewCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;

    const findNewCategory = await NewCategory.findOneAndDelete({
      _id: categoryId,
    }).lean();

    if (!findNewCategory) {
      return res.status(404).json({ result: "Category not found" });
    }

    const newMasterCategory = await MasterCategory.create({
      name: findNewCategory.name,
    });

    res.status(200).json({
      result: newMasterCategory,
      message: "New Category created successfully",
    });
  } catch (error) {
    console.error("Error approving category:", error);
    res.status(500).json({
      result: "Server error, failed to approve new category",
      error,
    });
  }
};
