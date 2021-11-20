const express = require("express");
const dotenv = require("dotenv");
const db = require("./db/db.js");

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());





app.listen(PORT, () => {
  console.log(`server is running on  ${PORT}`);
});