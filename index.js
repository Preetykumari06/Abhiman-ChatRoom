const express = require('express');
const sequelize = require('./Config/db');
require('dotenv').config();
const cors = require('cors');
const { userRouter } = require('./Routes/userRouter');
const { chatRoomRouter } = require('./Routes/chatRoomRouter');

const port = process.env.PORT || 8080;

const app = express();
app.use(express.json())
app.use(cors());

app.use("/api",userRouter);
app.use("/api",chatRoomRouter);

app.get('/', (req, res) => {
  res.send('Hello, Welcome to Chat App!');
});


app.listen(port,async()=>{
  await sequelize.authenticate();
  console.log(`Server is Running on http://localhost:${port}`)
});