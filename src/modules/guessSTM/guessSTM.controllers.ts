import { LastTryT } from "../users/users.types";
import LastTry from "./models/lastTry";

const createLastTry = async (lastTry: LastTryT) => {
    return LastTry.create(lastTry);
  }

export {createLastTry};
