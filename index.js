const express = require('express');
const sequelize = require('./Config/db');
require('dotenv').config();
const cors = require('cors');

const port = process.env.PORT || 8080;

const app = express();
app.use(cors());



app.get('/', (req, res) => {
  res.send('Hello, world!');
});



app.listen(port,async()=>{
  await sequelize.authenticate();
  console.log(`Server is Running on http://localhost:${port}`)
});