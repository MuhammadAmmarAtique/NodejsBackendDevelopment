import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

//importing schedulers
// import "./schedulars/schedularOne.js"
import "./schedulars/schedularTwo.js"

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server started successfully on port ${port}`);
});
