import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Box, Button, TextField, Typography } from "@mui/material";

const App = () => {
  //It creates a WebSocket connection to the server running at http://localhost:3700.
  const socket = io("http://localhost:3700");
  //The socket object allows us to send and receive real-time messages between the client and the server.

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message",message)
    setMessage("")
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Web socket i.e Client + Server connected");
    });

    socket.on("welcome", (msg) => {
      console.log(msg);
    });
  }, []);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        maxWidth: 400,
        margin: "2rem auto",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h5" component="h1" gutterBottom>
       Socket.emit (frontend) & Socket.on (backend)
      </Typography>
      <TextField
        label="Enter Something"
        variant="outlined"
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default App;
