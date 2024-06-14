import User from "./models/user";

import { UserT, CreateUser } from "./users.types";

const getAllUsers = async () => {
  return User.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt", "password", "salt"]
    }
  });
}

const createUser = async (user: CreateUser) => {
  return User.create(user);
}

const getUserByLogin = async (login: string) => {
  return User.findOne({
    attributes: {
      exclude: ["createdAt", "updatedAt"]
    },
    where: {
      login,
    }
  })
}

export { getAllUsers, createUser, getUserByLogin };
