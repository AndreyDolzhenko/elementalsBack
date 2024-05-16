import User from "./models/user";

import Types from "./users.types";

const getAllUsers = async () => {
  return User.findAll();
}

type UserT = Types;

const createUser = async (user: UserT) => {
  return User.create(user);
}

// import pool from "../../db/db";

// import { getAllUsers as getAllUsersQuery } from "./queries";

// function getAllUsers(req: Request, res: Response) {
//     pool.query(getAllUsersQuery, (error, result) => {
//       if (error) throw error;
//       res.status(200).json(result.rows);
//       console.log(result.rows);
//     });
//   }

  export { getAllUsers };