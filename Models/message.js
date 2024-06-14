const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../utils/database.js");

const Message = sequelize.define("Message", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  userChatroomId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "user_chatroom",
      key: "id",
    },
  },
  senderId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "Users",
      key: "id",
    },
  },
});

module.exports = Message;
