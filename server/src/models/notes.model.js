const { DataTypes } = require("sequelize");
const connectMysql = require("../configs/db.config");

const Notes = connectMysql.define(
  "Notes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isDone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  { timestamps: true }
);

module.exports = Notes;
