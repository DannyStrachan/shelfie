require("dotenv").config({ path: __dirname + "/../.env" });
const massive = require("massive");
const express = require("express");
// const controller = require("./server");
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());


app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`);
  });
  // put this inside of the .then in massive