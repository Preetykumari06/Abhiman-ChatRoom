const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../Config/db");

const Chatroom = sequelize.define("Chatroom", {
  id: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
    defaultValue: 6,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


module.exports = Chatroom;
