const { User } = require("../models/index");

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const createdUser = await User.create(body);
    return res.status(201).send(createdUser);
  } catch (error) {
    next(error);
  }
};

module.exports.findAll = async (req, res, next) => {
  try {
    const resultArray = await User.findAll();
    return res.status(200).send(resultArray);
  } catch (error) {
    next(error);
  }
};
