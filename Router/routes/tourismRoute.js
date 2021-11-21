const express = require("express");
const { tourism, allTourism } = require("../controllers/tourismController");
const tourismRouter = express.Router();

tourismRouter.post("/tourism", tourism);
tourismRouter.get("/allTourism", allTourism);

module.exports = tourismRouter;
