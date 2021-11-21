const express = require("express");
const { user, alluser } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/signup", user);
userRouter.get("/alluser", alluser);

module.exports = userRouter;
