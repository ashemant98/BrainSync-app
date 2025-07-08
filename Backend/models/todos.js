const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,

    required: true,
    ref: "user",
  },
});

const todoModel = mongoose.model("todos", todoSchema);

module.exports = todoModel;
