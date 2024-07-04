import { Router } from "express";

import { LastTryT } from "../users/users.types";
import { createLastTry } from "./guessSTM.controllers"; 

const router = Router();

router.post("/last_try", async (req, res) => {
  try {
    const {
      brandName,
      selectedOption,
      correctOption,
      answer_status,
      userId,
    }: LastTryT = req.body;
    
    await createLastTry({
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
