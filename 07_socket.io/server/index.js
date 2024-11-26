import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app); // here we are converting express app to raw http server so it can work with Web Socket

// WebSocket/Socket.IO Setup:- 
const io = new Server(server); //using http server creating web socket server (io)

io.on("connection", (socket) => {
  console.log("User Connected!");
  console.log("Socket Id:", socket.io);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
