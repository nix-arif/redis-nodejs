const express = require("express");
const path = require("path");
// const fetch = require("node-fetch");
// const redis = require("./redis-client");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "index.html"));
});