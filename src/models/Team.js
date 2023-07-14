import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

const Team = sequelize.define("Team", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  members: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  manager: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  projectId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

export default Team;
