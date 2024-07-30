import { Router } from "express";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { getAllUsers, createUser, getUserByLogin, updateUser } from "./users.controllers";
import { SignUpUser, UserT } from "./users.types";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/auth/registration", async (req, res) => {
  try {
    const { login, fio, mail, password }: SignUpUser = req.body;

    if (login.length < 3) {
      res.status(400).send("Минимальная длина логина - 3 символа");
      return;
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    await createUser({
      login,
      fio,
      mail,
      salt,
      password: hashedPassword,  
      profile: "user",    
    });

    res.status(201).send("Пользователь создан");
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/auth/login", async (req, res) => {
  try {
    const { login, password } = req.body;
    const user: UserT = (await getUserByLogin(login)) as any;
    if (user) {
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        const token = jwt.sign(
          { id: user.id },
          process.env.JWT_SECRET as string,
          {
            expiresIn: 300,
          }
        );       
        res.status(200).json({
          auth: true,
          token,
          user: {
            id: user.id,
            login: user.login,
            fio: user.fio,
            mail: user.mail,
            profile: user.profile,
          },
        });
        return;
      }
      res.status(400).json({
        message: "Неверный пароль!",
        auth: false,
      });     
    } else {
      res.status(404).json({message: "Нет такого пользователя в базе!"});
    }
  } catch (error) {}
});

router.put("/:id", async (req, res) => {  
  try {
    const userId = +req.params.id;
    const user = req.body;
    const updatedUser = await updateUser(userId, user);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).send("Данные пользователя не обновлены!");
  }
});

export default router;
