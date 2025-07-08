const contentModel = require("../models/contentDB");
const linkModel = require("../models/linkDB");
const userModel = require("../models/userDB");
const { hashFunction } = require("../utils/hashFunction");

const addContentController = async (req, res) => {
  const { cType, title, note, link } = req.body;

  let data;

  try {
    if (cType === "youTube" || cType === "Twitter") {
      const result = await contentModel.create({
        cType,
        title,
        link,
        userId: req.id,
      });
      data = result;
    } else {
      const result = await contentModel.create({
        cType,
        title,
        note,
        userId: req.id,
      });
      data = result;
    }
    console.log(data);
    res.json({
      success: true,
      message: "content added successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "Error in adding content API",
      error,
    });
  }
};

const getContentController = async (req, res) => {
  console.log("inside getcontent controller");
  const response = await contentModel
    .find({
      userId: req.id,
    })
    .populate("userId", "username");

  if (response.length > 0) {
    res.json({
      message: "content fetched successfully",
      response,
      success: true,
    });
  } else {
    res.json({
      message: "no content found",
      success: false,
    });
  }
};

const deleteContentController = async (req, res) => {
  try {
    console.log("inside delete todo controller");
    console.log(req.query.id);
    await contentModel.deleteOne({
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

const shareLinkController = async (req, res) => {
  try {
    console.log("inside share link comp");
    const share = req.body.share;
    console.log(share);
    //if user wants to share the link
    if (share) {
      //checking if there is an already generated link or not
      console.log("share true");
      const existingLink = await linkModel.findOne({
        userId: req.id,
      });
      console.log(existingLink);
      //if no existing link found
      if (existingLink == null) {
        console.log("if no link block");
        const shareLink = hashFunction(15);

        const result = await linkModel.create({
          userId: req.id,
          link: shareLink,
        });

        res.json({
          message: "link generated successfully",
          shareLink: result.link,
        });

        return;
      }

      //if link already generated send them from the db instead of creating a new one
      if (existingLink.link) {
        console.log("inside already link block");
        res.json({
          message: "link fetched successfully",
          shareLink: existingLink.link,
        });
      }
    } else {
      await linkModel.deleteOne({
        userId: req.id,
      });
      res.json({
        message: "link removed successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      message: "error in share link controller",
      error,
    });
  }
};

const getDataController = async (req, res) => {
  console.log("inside get Data controller");
  const hash = req.params.shareLink;
  console.log(hash);

  // Find the link using the provided hash.
  const data = await linkModel.findOne({ link: hash });
  console.log(data);
  if (!data) {
    res.status(404).json({ message: "Invalid share link", success: false }); // Send error if not found.
    return;
  }

  // Fetch content and user details for the shareable link.
  const content = await contentModel.find({ userId: data.userId });
  const user = await userModel.findOne({ _id: data.userId });

  if (!user) {
    res.status(404).json({ message: "User not found" }); // Handle missing user case.
    return;
  }

  res.json({
    username: user.username,
    content,
    success: true,
  }); // Send user and content details in response.
};

module.exports = {
  addContentController,
  getContentController,
  deleteContentController,
  getDataController,
  shareLinkController,
};
