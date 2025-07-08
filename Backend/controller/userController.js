const userModel = require("../models/userDB");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signupController = async (req, res) => {
  try {
    const { username, password } = req.body;

    //using bcrypt library to hash the password

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = await userModel.create({
      username,
      password: hashedPassword,
    });

    res.json({
      success: true,
      message: "user created successfully",
      newUser,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "error in creating user",
      error: error,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    const foundUser = await userModel.findOne({
      username,
    });

    if (foundUser) {
      if (await bcrypt.compare(password, foundUser.password)) {
        const token = JWT.sign(
          { id: foundUser._id },
          process.env.JWT_SECRET_KEY
        );

        res.json({
          success: true,
          message: "login successfull",
          token,
        });
      } else
        res.json({
          success: false,
          message: "wrong password",
        });
    } else {
      res.json({
        success: false,
        message: "User not found or incorrect user id",
      });
    }
  } catch (error) {
    res.json({
      error,
    });
  }
};

const getUserController = async (req, res) => {
  const foundUser = await userModel.findOne({
    _id: req.id,
  });

  if (foundUser) {
    res.json({
      success: true,
      username: foundUser.username,
    });
  } else {
    res.json({
      message: "errpr ",
    });
  }
};

module.exports = {
  signupController,
  loginController,
  getUserController,
};
