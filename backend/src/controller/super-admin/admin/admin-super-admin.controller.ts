import { Request, Response } from "express";
import Admin from "../../../schema/admin/admin.schmea";
import bcrypt from "bcrypt";
import { getAllAdminsOFUserUtils } from "../../../utils/super-admin/get-all-admins-of-user";

export const createNewAdmin = async (req: Request, res: Response) => {
  try {
    delete req.body.role;
    req.body.user = req.body.id;
    const { password } = req.body;

    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    req.body.password = hashedPassword;
    const saveNewAdmin = await Admin.create(req.body);

    if (saveNewAdmin) {
      res.status(200).send({ response: saveNewAdmin });
    } else {
      res.status(400).send({ response: "Failed to create new admin" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to create new admin" });
  }
};

export const getAllAdminsOfUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const fetchAllAdminsPipeline = getAllAdminsOFUserUtils(id);

    const fetchAllAdmins = await Admin.aggregate(fetchAllAdminsPipeline);

    if (fetchAllAdmins) {
      res.status(200).send({ response: fetchAllAdmins });
    } else {
      res.status(400).send({ response: "Failed to fetch all admins data" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to get all admins data" });
  }
};

export const updateAdmin = async (req: Request, res: Response) => {
  try {
    const { adminId } = req.params;

    const { password } = req.body;

    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    req.body.password = hashedPassword;
    const updateAdminRecord = await Admin.findByIdAndUpdate(
      { _id: adminId },
      req.body,
      { new: true },
    );

    if (updateAdminRecord) {
      res.status(200).send({ response: updateAdminRecord });
    } else {
      res.status(400).send({ response: "Failed to update admin" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to update admin record" });
  }
};

export const updateAdminStatus = async (req: Request, res: Response) => {
  try {
    const { adminId } = req.params;
    const { status } = req.body;

    const updatedStatus = status === true ? false : true;

    const updatedRecordStatus = await Admin.findByIdAndUpdate(
      { _id: adminId },
      { status: updatedStatus },
      { new: true },
    );

    if (updatedRecordStatus) {
      res.status(200).send({ response: updatedRecordStatus?.status });
    } else {
      res
        .status(400)
        .send({ response: "Server error, failed to update record" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to update admin status " });
  }
};
