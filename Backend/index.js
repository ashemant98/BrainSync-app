const express = require("express");
const connectDB = require("./config/db");
const userRoute = require("./routes/userRoutes");
const contentRoutes = require("./routes/contentRoutes");
const cors = require("cors");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

//connecting database
connectDB();

//using routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/content", contentRoutes);

//starting server
app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.MODE} mode on port ${PORT}`);
});
