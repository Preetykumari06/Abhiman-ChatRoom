const express = require('express');
const sequelize = require('./Config/db');
require('dotenv').config();
const cors = require('cors');
const { userRouter } = require('./Routes/userRouter');

const port = process.env.PORT || 8080;

const app = express();
app.use(express.json())
app.use(cors());

app.use("/api",userRouter);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});



app.listen(port,async()=>{
  await sequelize.authenticate();
  console.log(`Server is Running on http://localhost:${port}`)
});