const express = require("express");
const { Server } = require("socket.io");
const helmet = require("helmet");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();

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
app.use(cors());
app.use(morgan("dev"));

//to receive json and treat it as the javascript objects
app.use(express.json());

fs.readdirSync("./routes").map((r) =>
  app.use("/api/", require(`./routes/${r}`))
);

io.on("connect", (socket) => {});

server.listen(4000, () => {
  console.log("Server listening on port 4000");
});
