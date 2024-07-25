import { DataTypes } from "sequelize";
import moment from "moment-timezone";

import sequelize from "../../../db/db";
import { User } from "../../users";

const Attempts = sequelize.define("attempts", { 
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
        },
        allowNull: false,
    },    
});

Attempts.belongsTo(User, {foreignKey: "userId", as: "user"}); // нужно Один ко многим

export default Attempts;
