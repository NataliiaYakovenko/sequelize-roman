const { User } = require("../models");
const UserNotFound = require("../error/UserNotFound");

module.exports.getUserInstance = async (req, res, next) => {
  try {
    const {
      body,
      params: { userId },
    } = req;

    const user = await User.findByPk(userId, {
      attributes: {
        exclude: ["password"],
      },
    });

    if (!user) {
      throw new UserNotFound("User not found");
    }
    req.userInstance = user;
    next();
  } catch (error) {
    next(error);
  }
};
