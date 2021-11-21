const express = require("express");
const dotenv = require("dotenv");
const db = require("./db/db.js");
const morgan = require("morgan");
const cors = require("cors");

//Router
const userRouter = require("./Router/routes/userRoute"); // router level middleware
const cultureRouter = require("./Router/routes/cultureRoute");

/////////////////////////////////////////////
const app = express();
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());

/////////////////////////////////////////////

app.use("/user", userRouter); // route
app.use("/culture", cultureRouter); // route

/////////////////////////////////////////////

app.use(morgan("dev"));
app.use(cors());

/////////////////////////////////////////////

app.listen(PORT, () => {
  console.log(`server is running on  ${PORT}`);
});
