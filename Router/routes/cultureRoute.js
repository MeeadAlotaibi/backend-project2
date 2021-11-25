const express = require("express");
const {
  culture,
  allCulture,
  allallCulture,
} = require("../controllers/cultureController");
const cultureRouter = express.Router();

cultureRouter.delete("/deleteCulture", culture);

cultureRouter.post("/culture", culture);
cultureRouter.get("/allculture", allCulture);
cultureRouter.get("/allallculture", allallCulture);

module.exports = cultureRouter;
