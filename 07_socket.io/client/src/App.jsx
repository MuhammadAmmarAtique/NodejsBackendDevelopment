import React, { useEffect } from "react";
import { io } from "socket.io-client";

const App = () => {
  //It creates a WebSocket connection to the server running at http://localhost:3700.
  const socket = io("http://localhost:3700");  
  //The socket object allows us to send and receive real-time messages between the client and the server.

  useEffect(()=>{
    socket.on("connect",()=>{
      console.log("Web socket connected");
    })
  },[])

  return <div>App</div>;
};

export default App;
