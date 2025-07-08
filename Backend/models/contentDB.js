const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  cType: {
    type: String,
    enum: ["youTube", "Twitter", "Notes"],
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: function () {
      if (this.cType === "youTube" || this.cType === "Twitter") return true;
      else return false;
    },
  },

  note: {
    type: String,
    required: function () {
      if (this.cType === "Notes") return true;
      else return false;
    },
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
});

const contentModel = mongoose.model("content", contentSchema);

module.exports = contentModel;
