import { DataTypes } from "sequelize";

import sequelize from "../../../db/db";
import { User } from "../../users";

const Attampts = sequelize.define("attampts", { 
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },    
    correct: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    uncorrect: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },   
    userId: {
        type: DataTypes.INTEGER,        
        references: {
            model: User,
            key: "id",
        }
    },
});

Attampts.belongsTo(User, {foreignKey: "userId", as: "user"}); // нужно Один к Одному

export default Attampts;
