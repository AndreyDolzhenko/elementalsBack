import { DataTypes, UUID } from "sequelize";

import sequelize from "../../../db/db";
import { User } from "../../users";

const UserResults = sequelize.define("user_results", { 
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    results: {
        type: DataTypes.INTEGER,
        allowNull: true,    
    },
    lastTryId: {
        type: UUID,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,        
        references: {
            model: User,
            key: "id",
        }
    },
});

UserResults.belongsTo(User, {foreignKey: "userId", as: "user"});

export default UserResults;
