const express=require("express");
const { createChatRoom, joinChatRoom } = require("../Controllers/chatRoomController");
const { authenticate } = require("../Middleware/authentication");
const chatRoomRouter=express.Router();

chatRoomRouter.get('/chat', (req, res) => {
  res.send('chat rooms');
});

chatRoomRouter.post("/createChatRoom", authenticate, createChatRoom);
chatRoomRouter.post("/joinChatRoom", authenticate, joinChatRoom);

module.exports={chatRoomRouter}