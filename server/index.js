const server = require("http").createServer();
const io = require("socket.io").listen(server);
const port = process.env.PORT || 3001;

io.on("connection", socket => {
  console.log(`user ${socket.id} connected`);
  socket.emit("connected");

  socket.on("send message", message => {
    console.log("message: ", message);
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
    socket.emit("disconnected");
  });

  socket.on("set name", name => {
    console.log(`user with ${socket.id} setted his name to`, name);
    socket.username = name;
    io.emit("name", name);
  });
});

server.listen(port, () => console.log("server started on port:", port));