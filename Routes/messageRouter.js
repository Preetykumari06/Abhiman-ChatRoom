const express = require("express");
const messageRouter=express.Router();
const { saveMessage, recieveAllMessge } = require("../Controllers/messageController.js");
const { authenticate } = require("../Middleware/authentication.js");

messageRouter.post("/", authenticate, saveMessage);
messageRouter.get("/:userChatroomId", authenticate, recieveAllMessge);


module.exports = {messageRouter}

