import cors from "cors";
import express from "express";
const app = express();

const port = 6500;

// 1)Enable All CORS Requests
// app.use(cors())

// 2)Enable CORS for a Single Route
// app.get("/", cors(), (req, res) => {
//   res.send({"text":"home route"});
// });

// 3)Configuring CORS (cors can accept object, we can pass various options inside it)
// var corsOptions = {
//   origin: "http://localhost:5173",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
// app.get("/", cors(corsOptions), (req, res) => {
//   res.send({ text: "home route" });
// });

app.get("/", (req, res) => {
  res.send({ text: "home route" });
});

// 4)Configuring CORS w/ Dynamic Origin (WHITE LISTING)
var whitelist = ["http://localhost:5173", "http://localhost:5174"];
var corsOptions = {
  origin: function (origin, callback) {
    console.log("Origin: ", origin); // Logging the origin
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

const data = {
  1: "Ammar",
  2: "Hamid",
  3: "Danish",
};

app.get("/api/data", cors(corsOptions), (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log("Server is started and listening on port 6500");
});
