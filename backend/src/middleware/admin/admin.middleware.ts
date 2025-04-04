import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const verifyAdminToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).send({ response: "Token not found" });
    }

    const jwtSecretKey = process.env.JWT_SECRET_KEY;

    jwt.verify(token, jwtSecretKey, (err, decoded) => {
      if (err) {
        res.status(401).send({ response: "invalid token" });
      }

      const { id, role, restaurant } = decoded as {
        id: string;
        role: string;
        restaurant: string;
      };

      req.body.id = id;
      req.body.role = role;
      req.body.restaurant = restaurant;

      next();
    });
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to verify admin token" });
  }
};

export default verifyAdminToken;
