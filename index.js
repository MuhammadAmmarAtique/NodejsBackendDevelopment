require("dotenv").config(); //import 'dotenv/config'
const express = require("express"); //import express from "express"

const app = express();
// const port = 3000

const myGithubData = {
  login: "MuhammadAmmarAtique",
  id: 131598704,
  node_id: "U_kgDOB9gJcA",
  avatar_url: "https://avatars.githubusercontent.com/u/131598704?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/MuhammadAmmarAtique",
  html_url: "https://github.com/MuhammadAmmarAtique",
  followers_url: "https://api.github.com/users/MuhammadAmmarAtique/followers",
  following_url:
    "https://api.github.com/users/MuhammadAmmarAtique/following{/other_user}",
  gists_url: "https://api.github.com/users/MuhammadAmmarAtique/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/MuhammadAmmarAtique/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/MuhammadAmmarAtique/subscriptions",
  organizations_url: "https://api.github.com/users/MuhammadAmmarAtique/orgs",
  repos_url: "https://api.github.com/users/MuhammadAmmarAtique/repos",
  events_url:
    "https://api.github.com/users/MuhammadAmmarAtique/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/MuhammadAmmarAtique/received_events",
  type: "User",
  site_admin: false,
  name: "Muhammad Ammar Atique",
  company: null,
  blog: "",
  location: "Haripur,kpk,Pakistan",
  email: null,
  hireable: null,
  bio: "Front-End React Developer",
  twitter_username: null,
  public_repos: 13,
  public_gists: 0,
  followers: 5,
  following: 19,
  created_at: "2023-04-23T13:41:40Z",
  updated_at: "2024-07-07T09:12:30Z",
};

app.get("/", (req, res) => {
  res.send("Hello World! Backend developer Ammar is here :)");
});

app.get("/About", (req, res) => {
  res.send("<h1> Welcome to your website </h1>");
});

app.get("/Contact-us", (req, res) => {
  res.send("<p>Contact us at number 92374098 </p>");
});

app.get("/Github", (req, res) => {
  res.send(myGithubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
