const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `database connected successfully on ${mongoose.connection.host}`
    );
  } catch {
    console.log("error in database connection");
  }
}

module.exports = connectDB;
