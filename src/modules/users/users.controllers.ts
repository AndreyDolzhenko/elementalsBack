import User from "./models/user";

import { UserT, CreateUser, UpdateUser } from "./users.types";

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

const updateUser = async (id: number, user: UpdateUser ) => {
  return User.update(user, {
    where: {
      id,
    }
  })
}

export { getAllUsers, createUser, getUserByLogin, updateUser };
