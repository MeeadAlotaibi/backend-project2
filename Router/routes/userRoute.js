const express = require("express");
const { user, alluser, signin ,favoriteUser,
  removeFavoriteUser,
  getFavorite,
  favoriteUserTest,} = require("../controllers/userController");
const { checkDuplicateUsernameOrEmail } = require("../../middelWares");

const userRouter = express.Router();

userRouter.post("/signup", checkDuplicateUsernameOrEmail, user);
userRouter.post("/signin", signin);
userRouter.get("/alluser", alluser);
userRouter.put("/fav/:email/:_id", favoriteUser);
// userRouter.get("/favv/:email", getFavorite);
userRouter.put("/removeFav/:email/:_id", removeFavoriteUser);
userRouter.put("/favorite/:email/:ObjectId", favoriteUserTest);
module.exports = userRouter;
