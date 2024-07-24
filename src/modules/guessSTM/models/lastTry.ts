import { DataTypes, UUID } from "sequelize";

import sequelize from "../../../db/db";
import { User } from "../../users";

const LastTry = sequelize.define("last_try", {
  id: {
    type: UUID,
    primaryKey: true,
  },
  brandName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  selectedOption: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
  correctOption: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
  answer_status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
    allowNull: false,
  }, 
});

LastTry.belongsTo(User, { foreignKey: "userId", as: "user" });

export default LastTry;
