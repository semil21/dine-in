import UltraAdmin from "../../schema/ultra-admin/ultra-admin.schema";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jws from "jsonwebtoken";

dotenv.config();
export const saveNewUltraAdmin = async (req: Request, res: Response) => {
  try {
    const { password } = req.body;

    const saltrounds = 10;

    const bcryyptedPasswords = await bcrypt.hash(password, saltrounds);

    req.body.password = bcryyptedPasswords;

    if (bcryyptedPasswords) {
      const saveUltraADminRecord = await UltraAdmin.create(req.body);

      if (saveUltraADminRecord) {
        res.status(200).send({ response: saveUltraADminRecord });
      } else {
        res.status(400).send({ response: "Failed to save new ultra admin" });
      }
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to save new ultra admin" });
  }
};

export const ultraAdminLogin = async (req: Request, res: Response) => {
  try {
    const { password, email } = req.body;

    const verifyEmail = await UltraAdmin.findOne({ email: email });

    if (!verifyEmail) {
      return res.status(404).send({ response: "Email ot found" });
    }

    const verifyPassword = await bcrypt.compare(
      password,
      verifyEmail?.password,
    );

    if (!verifyPassword) {
      res.status(404).send({ response: "Incorrect password" });
      return;
    }

    const jwtSecretKey = process.env.JWT_SECRET_KEY;

    const auth_token = jws.sign(
      {
        id: verifyEmail?._id,
        role: verifyEmail?.role,
      },
      jwtSecretKey,
      { expiresIn: "1m" },
    );

    if (auth_token) {
      res.status(200).send({ response: auth_token, message: "Welcome back" });
    } else {
      res.status(400).send({ response: "Failed to log in" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to login as ultra admin" });
  }
};
