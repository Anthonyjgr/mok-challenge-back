import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

const Project = sequelize.define("Project", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  manager: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  start: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  deadline: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM("started", "pending", "finished"),
    allowNull: true,
  },
  businessAreaId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

export default Project;
