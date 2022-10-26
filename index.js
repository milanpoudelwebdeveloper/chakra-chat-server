const express = require("express");
const { Server } = require("socket.io");
const helmet = require("helmet");
const app = express();

//server for the sockets
const server = require("http").createServer(app);

//what other domains our server will be talking to, which is our frontend
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

//middlwares
//helmet for security
app.use(helmet());

//to receive json and treat it as the javascript objects
app.use(express.json());

app.get("/", (req, res) => {
  res.json("hello world");
});

io.on("connect", (socket) => {});

server.listen(4000, () => {
  console.log("Server listening on port 4000");
});
