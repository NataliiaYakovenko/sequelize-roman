const { User, Task } = require("../models/index");

module.exports.createTask = async (req, res, next) => {
  const {
    body,
    params: { userId },
  } = req;
  try {
    //знайти юзера, якому потрібно додати таску
    const user = await User.findByPk(userId);

    //потрібно знайденому юзеру додати таски
    const createdResult = await user.createTask(body);

    return res.status(201).send(createdResult);
  } catch (error) {
    next(error);
  }
};
