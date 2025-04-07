import { Request, Response } from "express";
import NewCategory from "../../../../schema/super-admin/category/new-category/new-category.schema";

export const createNewCategory = async (req: Request, res: Response) => {
  try {
    const saveCategoryRecord = await NewCategory.create(req.body);

    if (saveCategoryRecord) {
      res.status(200).send({
        result:
          "Request has been forwaded to Admin, New Category will be available once its approved.",
      });
    }
  } catch (error) {
    res
      .status(500)
      .send({ result: "Server error, failed to create new category" });
  }
};
