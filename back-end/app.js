// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

const holisticsController = require("./controllers/holisticsController");

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON
app.use("/holistics", holisticsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
  console.log(res);
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////
const db = require("./db/dbConfig.js");

app.get("/test", async (req, res) => {
  try {
    const allDays = await db.any("SELECT * FROM test");
    res.json(allDays);
  } catch (err) {
    res.json(err);
  }
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////

// EXPORT
module.exports = app;
