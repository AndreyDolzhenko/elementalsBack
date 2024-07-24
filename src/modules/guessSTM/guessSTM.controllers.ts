import { LastTryT, AttemptsT, CreateAttempts } from "./guessSTM.types";
import moment from "moment-timezone";
import Attempts from "./models/attempts";
import LastTry from "./models/lastTry";

const createLastTry = async (lastTry: LastTryT) => {
  return LastTry.create(lastTry);
};

const createAttempts = async (attempts: CreateAttempts) => {
  return Attempts.create(attempts);
};

const getLastTryByUserId = async (userId: number) => {
  const lastTryRecords: any = await LastTry.findAll({
    attributes: {
      exclude: ["id"],
    },
    where: {
      userId,
    },
  });  
  const formattedRecords = lastTryRecords.map((record: any) => {
    const formattedRecord = record;     
    formattedRecord.createdAt = moment(formattedRecord.createdAt)
    .tz("UTC")
    .utcOffset(180)
    .format("YYYY-MM-DD HH:mm:ss");
    formattedRecord.updatedAt = moment(formattedRecord.updatedAt).tz('UTC').utcOffset(180).format('YYYY-MM-DD HH:mm:ss');
    return formattedRecord;
  });  
 
  return formattedRecords;
};

const deleteLastTryByUserId = async (userId: number) => {
  LastTry.destroy({
    where: {
      userId,
    },
  });
};

const getAttempts = async (userId: number) => {
  const attemptsRecords: any = await Attempts.findAll({
    attributes: {
      exclude: ["id"],
    },
    where: {
      userId,
    },
  });
  const formattedRecords = attemptsRecords.map((record: any) => {
    const formattedRecord = record;      
    formattedRecord.createdAt = moment(formattedRecord.createdAt)
    .tz("UTC")
    .utcOffset(180)
    .format("YYYY-MM-DD HH:mm:ss");
    formattedRecord.updatedAt = moment(formattedRecord.updatedAt).tz('UTC').utcOffset(180).format('YYYY-MM-DD HH:mm:ss');
    return formattedRecord;
  });  
  
  return formattedRecords;
};

export {
  createLastTry,
  getLastTryByUserId,
  createAttempts,
  getAttempts,
  deleteLastTryByUserId,
};
