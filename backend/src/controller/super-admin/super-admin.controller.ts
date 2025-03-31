import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import SuperAdmin from "../../schema/super-admin/super-admin";
import dotenv from "dotenv";
import jsw from "jsonwebtoken";

dotenv.config();

export const createNewSuperAdmin = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { password } = req.body;

      const saltRounds = 10;

      const hashedPassword = await bcrypt.hash(password, saltRounds);

      req.body.password = hashedPassword;

      const saveRecord = await SuperAdmin.create(req.body);

      if (saveRecord) {
        res.status(200).send({ response: saveRecord });
      } else {
        res.status(400).send({ response: "Failed to create new super admin" });
      }
    } catch (error) {
      res.status(500).send({ response: "Failed to create new super admin" });
    }
  },
);

export const adminLogin = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const verifyEmail = await SuperAdmin.findOne({ email: email });

      if (!verifyEmail) {
        res.staus(401).send({ response: "Email not found" });
        return;
      }

      const verifyPassword = await bcrypt.compare(
        password,
        verifyEmail?.password,
      );

      if (!verifyPassword) {
        res.status(401).send({ response: "Incorrect password" });
        return;
      }

      const jwtSecretKey = process.env.JWT_SECRET_KEY;

      const auth_token = jsw.sign({ id: verifyEmail?._id }, jwtSecretKey, {
        expiresIn: "1d",
      });

      if (auth_token) {
        res
          .status(200)
          .send({ auth_token: auth_token, response: "Logged in successfull." });
      } else {
        res.statua(401).send({ response: "Failed to login as super admin" });
      }
    } catch (error) {
      console.log("Failed to login as super admin");
      throw error;
    }
  },
);
