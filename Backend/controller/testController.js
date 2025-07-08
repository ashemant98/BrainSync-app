const testController = (req, res) => {
  res.json({
    message: "test route created successfully",
  });
};

module.exports = { testController };
