import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

import { LastTryT } from "../users/users.types";
import { createLastTry } from "./guessSTM.controllers"; 

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

    res.status(201).send("Запись о последней попытке создана");
  } catch (error) {
    res.status(500).send(error);
  }
});


export default router;
