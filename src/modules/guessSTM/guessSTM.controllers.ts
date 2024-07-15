import { LastTryT, AttemptsT, CreateAttempts } from "./guessSTM.types";
import Attempts from "./models/attempts";
import LastTry from "./models/lastTry";

const createLastTry = async (lastTry: LastTryT) => {
  return LastTry.create(lastTry);
};

const createAttempts = async (attempts: CreateAttempts) => {
  return Attempts.create(attempts);
};

const getLastTryByUserId = async (userId: number) => {
  return LastTry.findAll({
    attributes: {
      exclude: ["id"],
    },
    where: {
      userId,
    },
  });
};

const getAttempts = async (userId: number) => {
  return Attempts.findAll({
    attributes: {
      exclude: ["id"],
    },
    where: {
      userId,
    }
  });
}

export { createLastTry, getLastTryByUserId, createAttempts, getAttempts };
