const express = require("express");
const path = require("path");
const fetch = require("node-fetch");
const redis = require("./redis-client");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

//

app.post("/api1", async (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  try {
    const requests = await redis.incr(ip);
    console.log("Number of requests:", requests);
    // console.log(requests);
  } catch (err) {
    console.log(err);
  }

  res.json({
    response: "ok",
    callsInAMinute: 0,
  });
});

app.post("/api2", async (req, res) => {
  res.json({
    response: "ok",
    callsInAMinute: 0,
  });
});

app.post("/api3", async (req, res) => {
  res.json({
    response: "ok",
    callsInAMinute: 0,
  });
});

app.listen(3000);
