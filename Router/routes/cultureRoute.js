const express = require("express");
const { culture, allCulture } = require("../controllers/cultureController");
const cultureRouter = express.Router();

cultureRouter.post("/culturee", culture);
cultureRouter.get("/allculturee", allCulture);

module.exports = cultureRouter;
