const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db');

const ChatRoom = sequelize.define('ChatRoom', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  createdBy: { 
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  maxCapacity: { 
    type: DataTypes.INTEGER, 
    defaultValue: 6 
  },
  password: { type: DataTypes.STRING, allowNull: false },
}, {
  timestamps: true
});


module.exports = ChatRoom;

