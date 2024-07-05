import { Router } from "express";

import { LastTryT } from "../users/users.types";
import { createLastTry } from "./guessSTM.controllers"; 

const router = Router();

router.post("/", async (req, res) => {
  try {
    const {
      id,
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

    res.status(201).send("Запись о последней попытке создана");
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
