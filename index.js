const express = require("express");
const dotenv = require("dotenv");
const db = require("./db/db.js");
const morgan = require("morgan");
const cors = require("cors");

//Router
const userRouter = require("./Router/routes/userRoute"); // router level middleware
const cultureRouter = require("./Router/routes/cultureRoute");
const tourismRouter = require("./Router/routes/tourismRoute");
const urbanRouter = require("./Router/routes/urbanRoute");

/////////////////////////////////////////////
const app = express();
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
/////////////////////////////////////////////

app.use("/user", userRouter); // route
app.use("/culture", cultureRouter); // route
app.use("/tourism", tourismRouter); // route
app.use("/urban", urbanRouter); // route

/////////////////////////////////////////////

/////////////////////////////////////////////

app.listen(PORT, () => {
  console.log(`server is running on  ${PORT}`);
});
