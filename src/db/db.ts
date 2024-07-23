import { Sequelize } from "sequelize";

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbPassword = process.env.DB_PASSWORD as string;
const dbHost = process.env.DB_HOST as string;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "postgres",
  host: dbHost,
  define: {
    freezeTableName: true,
    charset: "utf8",
    collate: "utf8_general_ci",
  },
  query: {
    raw: true,
  },
  // dialectOptions: {
  //   useUTC: true,
  // },
  // timezone: "+03:00",
});

export default sequelize;
