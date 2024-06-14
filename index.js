const express = require('express');
const sequelize = require("./Config/db.js");
require('dotenv').config();
const cors = require('cors');
const { userRouter } = require('./Routes/userRouter');
const { chatRoomRouter } = require('./Routes/roomRouter');
const { messageRouter } = require('./Routes/messageRouter');
const User = require("./Models/userModal.js");
const Chatroom = require("./Models/chatroom.js");
const http = require("http");
const UserChatroom = require("./Models/userchatroom.js");
const Message = require("./Models/message.js");
const socket = require("socket.io");

const port = process.env.PORT || 8080;

const app = express();
app.use(express.json())
app.use(cors());

app.use("/api",userRouter);
app.use("/api",chatRoomRouter);
app.use("/api", messageRouter);

Chatroom.belongsTo(User, {
  as: "creator",
  foreignKey: "creatorId",
  constraints: true,
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
User.hasMany(Chatroom, { foreignKey: "creatorId" });
User.belongsToMany(Chatroom, { through: UserChatroom });
Chatroom.belongsToMany(User, { through: UserChatroom });
UserChatroom.hasMany(Message, { onDelete: "CASCADE" });
Message.belongsTo(UserChatroom);

app.get('/', (req, res) => {
  res.send('Hello, Welcome to Chat App!');
});


const server = http.createServer(app);
const io = socket(server, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  console.log("connection establish");
  socket.on("joinroom", (userData) => {
    socket.join(userData.roomId);
    socket.emit("connected");
  });
});


app.listen(port,async()=>{
  await sequelize.authenticate();
  console.log(`Server is Running on http://localhost:${port}`)
});