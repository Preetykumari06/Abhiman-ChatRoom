// const Chatroom = require("../Models/chatroom.js");
// const UserChatRoom = require("../Models/userchatroom.js");
// const crypto = require("crypto");
// const bcrypt = require("bcrypt");

// exports.createRoom = async (req, res) => {
//   try {
//     const { roomName: name = null } = req.body;
//     const randomToken = crypto.randomBytes(32).toString("hex");
//     const hashedPassword = await bcrypt.hash(randomToken, 12);
//     const room = await req.user.createChatroom({
//       name,
//       password: hashedPassword,
//     });
//     const link = `${req.protocol}://${req.get(
//       "host"
//     )}/api/chatrooms/joinroom`;
//     const roomId = room.dataValues.id;

//     res.status(201).json({
//       success: true,
//       invitationLink: link,
//       roomId,
//       password: randomToken,
//     });
//     console.log(room);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// exports.joinRoom = async (req, res) => {
//   try {
//     const { roomId = null, password = null } = req.body;
//     const room = await Chatroom.findByPk(roomId);
//     if (!room) {
//       throw {
//         status: 400,
//         message: "room not found",
//       };
//     }

//     const { password: hashedPassword } = room.dataValues;
//     const isMatch = await bcrypt.compare(password, hashedPassword);
//     if (!isMatch) {
//       throw {
//         message: "you are  not authorize to join this room",
//       };
//     }

//     const userInchatRoom = await UserChatRoom.findOne({
//       where: { chatroomId: roomId, userId: req.user.dataValues.id },
//     });

//     if (userInchatRoom) {
//       res.status(409).json({
//         message: "User is already in room",
//       });
//       return;
//     }

//     const usersinRooms = await room.countUsers();
//     if (usersinRooms > 5) {
//       res.status(200).json({
//         success: true,
//         message: "room is already full",
//       });
//     }

//     const addingUser = await room.addUser(req.user);

//     res.status(200).json({
//       message: "user has been added to the room",
//     });
//   } catch (error) {
//     res.status(401).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };


const Chatroom = require('../Models/chatroom');
const UserChatroom = require('../Models/userchatroom');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

exports.createRoom = async (req, res) => {
  try {
    const { roomName: name = null } = req.body;
    const randomToken = crypto.randomBytes(32).toString('hex');
    const hashedPassword = await bcrypt.hash(randomToken, 12);
    const room = await Chatroom.create({
      name,
      password: hashedPassword,
      createdBy: req.user.id,   
    });

    const link = `${req.protocol}://${req.get('host')}/api/chatrooms/joinroom`;
    const roomId = room.id;

    res.status(201).json({
      success: true,
      invitationLink: link,
      roomId,
      password: randomToken,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: 'Room creation failed' });
  }
};

exports.joinRoom = async (req, res) => {
  try {
    const { roomId = null, password = null } = req.body;
    const room = await Chatroom.findByPk(roomId);
    if (!room) {
      return res.status(400).json({ success: false, message: 'Room not found' });
    }

    const isMatch = await bcrypt.compare(password, room.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid room password' });
    }

    const userInChatRoom = await UserChatroom.findOne({
      where: { chatroomId: roomId, userId: req.user.id },
    });

    if (userInChatRoom) {
      return res.status(409).json({ message: 'User is already in room' });
    }

    const usersInRoom = await room.countUsers();
    if (usersInRoom >= room.capacity) {
      return res.status(200).json({ success: false, message: 'Room is already full' });
    }

    await room.addUser(req.user);

    res.status(200).json({ success: true, message: 'User has been added to the room' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: 'Joining room failed' });
  }
};
