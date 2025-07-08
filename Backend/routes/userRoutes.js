const express = require("express");

const {
  signupController,
  loginController,
  getUserController,
} = require("../controller/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/signup", signupController);

router.post("/login", loginController);

router.get("/userDetails", authMiddleware, getUserController);

module.exports = router;
