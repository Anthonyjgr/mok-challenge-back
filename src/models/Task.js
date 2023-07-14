import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

const Task = sequelize.define("Task", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  deadline: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  responsible: {
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

export default Task;
