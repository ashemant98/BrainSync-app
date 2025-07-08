const JWT = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"];
  console.log(token);
  const validUser = JWT.verify(token, process.env.JWT_SECRET_KEY);

  if (validUser) {
    req.id = validUser.id;
    next();
  } else {
    res.json({
      message: "error in middleware",
    });
  }
};
module.exports = authMiddleware;
