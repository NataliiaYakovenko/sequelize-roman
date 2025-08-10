const { User } = require("../models");

module.exports.getUserInstance = async (req, res, next) => {
  try {
    const { body, params: { userId } } = req;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }
    req.userInstance = user;
    next()
  } catch (error) {
    next(error);
  }
};
