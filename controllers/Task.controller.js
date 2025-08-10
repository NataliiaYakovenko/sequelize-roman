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

//потрібно отримати всі таски одного юзера
module.exports.getAllUserTask = async (req, res, next) => {
  const {
    body,
    params: { userId },
  } = req;
  try {
    //знаходимо юзера
    const user = await User.findByPk(userId);

    //знаходимо всі таски одного юзера
    const findAllTasks = await user.getTasks();
    return res.status(200).send(findAllTasks);
  } catch (error) {
    next(error);
  }
};

//потрібно отримати КІЛЬКІСТЬ всіх тасок одного юзера
module.exports.getCountAllTasks = async (req, res, next) => {
  const {
    body,
    params: { userId },
  } = req;
  try {
    //знаходимо юзера
    const user = await User.findByPk(userId);

    //знаходимо кількість тасок одного юзера
    const countAllTasks = await user.countTasks();
    return res.status(200).send(`${countAllTasks}`);
  } catch (error) {
    next(error);
  }
};
