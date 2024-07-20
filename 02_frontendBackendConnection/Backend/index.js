import express from "express"; // To use import statement add ("type": "module") in package.json file
import dotenv from "dotenv"; // When using the dotenv package with ES modules, you need to call dotenv.config()
dotenv.config();            // to load the environment variables from your .env file into process.env.

const app = express();
// const port = 3500;

app.get("/", (req, res) => {
  res.send("AoA from backend!");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      text: "hehe very funny",
    },
    {
      id: 2,
      text: "hehe very funny",
    },
    {
      id: 3,
      text: "hehe very funny",
    },
    {
      id: 4,
      text: "hehe very funny",
    },
    {
      id: 5,
      text: "hehe very funny",
    },
  ];
  res.send(jokes);
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
