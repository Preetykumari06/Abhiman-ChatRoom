const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../Models/userModal');
require("dotenv").config();

const register=async(req,res)=>{
    try {
        const {deviceId, name, phone, availCoins, password,prime } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await UserModel.create({deviceId, name, phone, availCoins, password: hashedPassword,prime });
        res.status(201).json({ message: 'User registered successfully', user });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

const login=async(req,res)=>{
   
    const { userId, password } = req.body;
    try {
        const user = await UserModel.findByPk(userId);
        if (!user) {
            return res.status(401).send({ message: 'User not found' });
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).send({ message: 'Invalid password' });
        }
        const token = jwt.sign({ userId: user.userId, prime: user.prime }, process.env.JWT_SECRET);
        res.send({ token });
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports={register,login}