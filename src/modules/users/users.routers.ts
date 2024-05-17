import { Router } from "express";
import * as bcrypt from "bcrypt";

import { getAllUsers, createUser } from "./users.controllers";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { login, fio, mail, password } = req.body;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    await createUser({
      login,
      fio,
      mail,
      salt,
      password: hashedPassword,
    });
    res.status(201).send("Пользователь создан");
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
