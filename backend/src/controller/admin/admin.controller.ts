import { Request, Response } from "express";
import Admin from "../../schema/admin/admin.schmea";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const adminLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const verifyEmail = await Admin.findOne({ email: email });

    if (!verifyEmail) {
      return res.status(200).send({ response: "Email not found" });
    }

    const verifyPassword = await bcrypt.compare(
      password,
      verifyEmail?.password,
    );

    if (!verifyPassword) {
      return res.status(400).send({ response: "Incorrect password." });
    }

    const jwtSecretKey = process.env.JWT_SECRET_KEY;

    const auth_token = jwt.sign(
      {
        id: verifyEmail?._id,
        role: verifyEmail?.role,
      },
      jwtSecretKey,
      { expiresIn: "1d" },
    );

    if (auth_token) {
      res.status(200).send({ response: auth_token });
    } else {
      res.status(400).send({ response: "Failed to log in" });
    }
  } catch (error) {
    res.status(500).send();
  }
};
