const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  img: { type: String },
  title: { type: String },
  description: { type: String },
  cat: { type: String, required: true },
  // category: { type: String, required: true },
});

module.exports = mongoose.model("Data", dataSchema);
