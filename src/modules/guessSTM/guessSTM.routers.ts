import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

import { LastTryT, DataOfLastTry } from "./guessSTM.types";
import { createLastTry, getLastTryByUserId } from "./guessSTM.controllers";

const router = Router();

router.post("/last-try", async (req, res) => {
  const id = uuidv4();
  console.log(id);
  try {
    const {
      brandName,
      selectedOption,
      correctOption,
      answer_status,
      userId,
    }: LastTryT = req.body;
    console.log(req.body);
    await createLastTry({
      id,
      brandName,
      selectedOption,
      correctOption,
      answer_status,
      userId,
    });

    res.status(201).send("Запись о последней попытке создана");
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/last-try/data", async (req, res) => {
  try {
    const userId: number = req.body;
    const lastTryResult: DataOfLastTry = (await getLastTryByUserId(
      userId
    )) as any;
    if (lastTryResult) {
      res.status(200).json({
        lastTryResult: {
          brandName: lastTryResult.brandName,
          selectedOption: lastTryResult.selectedOption,
          correctOption: lastTryResult.correctOption,
          answerStatus: lastTryResult.answer_status,
        },
      });
    } else {
      res.status(404).json({ message: "Нет такого пользователя в базе!" });
    }
  } catch (error) {}
});

router.post("/attempts", async (req, res) => {
  const id = uuidv4();
  console.log(id);
  try {
    const {
      brandName,
      selectedOption,
      correctOption,
      answer_status,
      userId,
    }: LastTryT = req.body;

    await createLastTry({
      id,
      brandName,
      selectedOption,
      correctOption,
      answer_status,
      userId,
    });

    res.status(201).send("Результаты тестирования записаны");
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
