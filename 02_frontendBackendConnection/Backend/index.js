import express from "express"; //to use import statement add ("type": "module") in package.json file
const app = express();
const port = 3500;

app.get("/", (req, res) => {
  res.send("AoA from backend!");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id:1,
      text:"hehe very funny"
    },
    {
      id:2,
      text:"hehe very funny"
    },
    {
      id:3,
      text:"hehe very funny"
    },
    {
      id:4,
      text:"hehe very funny"
    },
    {
      id:5,
      text:"hehe very funny"
    },
  ]
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
