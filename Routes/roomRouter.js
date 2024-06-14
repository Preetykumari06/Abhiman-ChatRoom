const express = require("express");
const chatRoomRouter=express.Router();
const { authenticate } = require("../Middleware/authentication.js");
const { createRoom, joinRoom } = require("../Controllers/roomController.js");


chatRoomRouter.get('/chat', (req, res) => {
    res.send('chat rooms');
  });

chatRoomRouter.post("/",authenticate, createRoom);
chatRoomRouter.post("/joinroom", authenticate, joinRoom);
  


module.exports={chatRoomRouter}
