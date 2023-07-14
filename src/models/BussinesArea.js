import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

const BusinessArea = sequelize.define("BusinessArea", {
  AreaName: {
    type: DataTypes.ENUM("marketing", "developement", "operations"),
    allowNull: false,
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
});

export default BusinessArea;
