import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app); // here we are converting express app to raw http server so it can work with Web Socket

// WebSocket/Socket.IO Setup:- 
const io = new Server(server,{
  cors:{
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  }
}); //by using http server creating web socket server (io) + cors configuration is done here like this!

io.on("connection", (socket) => {
  console.log("User Connected!");
  console.log("Socket Id:", socket.id);
  // #1 "emit" (sab ko msg jaiy ga)
  // socket.emit("welcome","Welcome to the Server!")

  // #2 "broadcast" (jo socket connect ho raha hai usko chor kar baqi sab ko msg jaaiy ga kaay koi naya aya hai!)
  // socket.broadcast.emit("welcome",`${socket.id} joined the Server!`)

  // #3
  socket.on("disconnect",()=>{
    "socket disconnected", socket.id
  })

  console.log("");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
