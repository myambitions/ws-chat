const express = require("express");
const server = require("http").createServer();
const io = require("socket.io").listen(server);
const app = express();
const port = 3001;

io.on("connection", socket => {
  console.log("user connected");
  socket.on("message", message => {
    console.log("message: ", message);
  });
});

server.listen(port, () => console.log("server started on port:", port));
