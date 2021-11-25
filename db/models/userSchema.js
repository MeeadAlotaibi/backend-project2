// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favoriteSchema: [{ type: mongoose.Schema.Types.ObjectId, ref: "Data" }],
  Bio: { type: String, default: "my Bio", maxlength: 130 },
});

module.exports = mongoose.model("User", userSchema);
