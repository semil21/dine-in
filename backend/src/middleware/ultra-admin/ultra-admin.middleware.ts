import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const verifyUltraAdminToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      res.status(404).send({ response: "No token found" });
      return;
    }

    const jwtSecretKey = process.env.JWT_SECRET_KEY;

    jwt.verify(token, jwtSecretKey, (err, decoded) => {
      if (err) {
        res.status(400).send({ response: "Invalid token" });
      }

      const { id, role } = decoded as { id: string; role: string };

      req.body.id = id;
      req.body.role = role;

      next();
    });
  } catch (error) {
    res.status(500).send({ response: "Server error, failed to verify token" });
  }
};

export default verifyUltraAdminToken;
