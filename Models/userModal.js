const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db');

const UserModel = sequelize.define('User', {
        userId: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        deviceId: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        availCoins: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        prime: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    }, {
        timestamps: true,
});



module.exports = UserModel;

// register
// {
//     "userId":"",
//     "deviceId": "123456789ABCDEF",
//     "name": "John",
//     "phone": "1237897890",
//     "password": "12345",
//     "availCoins": 0,
//     "prime": true
// }

// login
// {
//     "userId": "2",
//     "password": "12345"
//   }