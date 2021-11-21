const express = require("express");
const { urban, allUrban } = require("../controllers/urbanController");
const urbanRouter = express.Router();

urbanRouter.post("/tourism", urban);
urbanRouter.get("/allTourism", allUrban);

module.exports = urbanRouter;
