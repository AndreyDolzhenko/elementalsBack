import { LastTryT } from "./guessSTM.types";
import LastTry from "./models/lastTry";

const createLastTry = async (lastTry: LastTryT) => {
    return LastTry.create(lastTry);
  }

const getLastTryByUserId = async (userId: number) => {
  return LastTry.findOne({
    attributes: {
      exclude: ["id"]
    },
    where: {
      userId,
    }
  })
}

export {createLastTry, getLastTryByUserId};
