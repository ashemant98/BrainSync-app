const todoModel = require("../models/todos");

const addTodoController = async (req, res) => {
  try {
    const title = req.body.title;
    const data = await todoModel.create({
      title,
      userId: req.id,
    });
    res.json({
      message: "todos added successfully",
      data,
    });
  } catch (error) {
    res.json({
      message: "error in add todo controller",
      error,
    });
  }
};

const getTodoController = async (req, res) => {
  try {
    const data = await todoModel
      .find({
        userId: req.id,
      })
      .populate("userId", "username");

    if (data.length > 0)
      res.json({
        message: "todos fetched successfully",
        data,
        success: true,
      });
    else
      res.json({
        message: "no data to fetch",
        success: false,
      });
  } catch (error) {
    console.log(error);
    res.json({
      message: "error in getting todos",
      error,
    });
  }
};

const deleteTodoController = async (req, res) => {
  try {
    console.log("inside delete todo controller");
    console.log(req.query.id);
    await todoModel.deleteOne({
      _id: req.query.id,
    });
    res.json({
      message: "deleted successfully",
    });
  } catch (err) {
    console.log(err);
    res.json({
      err,
    });
  }
};

module.exports = {
  getTodoController,
  addTodoController,
  deleteTodoController,
};
