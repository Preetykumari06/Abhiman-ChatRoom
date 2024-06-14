const express = require("express");
const http = require("http");
const sequelize = require("./Config/db");
const cors = require("cors");

const app = express();
app.use(cors(""));
app.use(express.json());



module.exports = app;
