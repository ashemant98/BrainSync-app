const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  link: {
    required: true,
    unique: true,
    type: String,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "user",
    unique: true,
  },
});

const linkModel = mongoose.model("sharelink", linkSchema);

module.exports = linkModel;
