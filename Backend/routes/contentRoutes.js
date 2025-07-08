const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  addContentController,
  getContentController,
  getDataController,
  shareLinkController,
  deleteContentController,
} = require("../controller/contentController");
const {
  addTodoController,
  getTodoController,
  deleteTodoController,
} = require("../controller/todoController");

const router = express.Router();
//crud for content
router.post("/addContent", authMiddleware, addContentController);
router.get("/getContent", authMiddleware, getContentController);
router.delete("/deleteContent", authMiddleware, deleteContentController);
//crud for todos
router.post("/addTodo", authMiddleware, addTodoController);
router.get("/getTodo", authMiddleware, getTodoController);
router.delete("/deleteTodo", authMiddleware, deleteTodoController);
//crud for links
router.post("/shareLink", authMiddleware, shareLinkController);
router.get("/viewContent/:shareLink", getDataController);

module.exports = router;
