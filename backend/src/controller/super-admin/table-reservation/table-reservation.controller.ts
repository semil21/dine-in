import { Request, Response } from "express";
import TableReservation from "../../../schema/super-admin/table-reservation/table-reservation.schema";

export const newTableReservation = async (req: Request, res: Response) => {
  try {
    const saveTableReservationRecord = await TableReservation.create(req.body);

    if (saveTableReservationRecord) {
      res.status(200).send({ result: saveTableReservationRecord });
    } else {
      res.status(400).send({ result: "Failed to create table reservation" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ result: "Server error, failed to create table reservation" });
  }
};

export const updateTableReservation = async (req: Request, res: Response) => {
  try {
    const { tableReservationId } = req.params;

    const updateReservationRecord = await TableReservation.findByIdAndUpdate(
      { _id: tableReservationId },
      req.body,
      { new: true },
    );

    if (updateReservationRecord) {
      res.status(200).send({ result: updateReservationRecord });
    } else {
      res.status(400).send({ result: "Failed to update table reservation" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ result: "Server error, failed to update table reservation" });
  }
};

export const deleteReservation = async (req: Request, res: Response) => {
  try {
    const { tableReservationId } = req.params;

    const deleteReservationRecord = await TableReservation.findByIdAndDelete(
      { _id: tableReservationId },
      { new: true },
    );

    if (deleteReservationRecord) {
      res.status(200).send({ result: "Reservaion delete successfully" });
    } else {
      res.status(400).send({ result: "Failed to delete table reservation" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ result: "Server error, failed to delete table reservation" });
  }
};
