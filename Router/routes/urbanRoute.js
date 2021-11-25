const express = require("express");
const { urban, allUrban } = require("../controllers/urbanController");
const urbanRouter = express.Router();

urbanRouter.post("/urbann", urban);
urbanRouter.get("/allUrban", allUrban);

module.exports = urbanRouter;
