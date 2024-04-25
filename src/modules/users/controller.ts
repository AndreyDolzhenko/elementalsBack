import { Request, Response } from "express";

import pool from "../../db/db";

import { getAllUsers as getAllUsersQuery } from "./queries";

function getAllUsers(req: Request, res: Response) {
    pool.query(getAllUsersQuery, (error, result) => {
      if (error) throw error;
      res.status(200).json(result.rows);
      console.log(result.rows);
    });
  }

  export { getAllUsers };