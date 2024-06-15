const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../Config/db");

const UserChatroom = sequelize.define("user_chatroom", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "Users",
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  chatroomId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Chatroom",
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
});


module.exports = UserChatroom;
