import pool from "../../db/db.js";

import { getAllUsers as getAllUsersQuery } from "./queries.js";

function getAllUsers(req, res) {
    pool.query(getAllUsersQuery, (error, result) => {
      if (error) throw error;
      res.status(200).json(result.rows);
      console.log(res);
    });
  }

  export { getAllUsers };