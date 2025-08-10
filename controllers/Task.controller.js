const { User, Task } = require("../models/index");

module.exports.createTask = async (req, res, next) => {
  const { body, userInstance } = req;
  try {
    //потрібно знайденому юзеру додати таски
    const createdResult = await userInstance.createTask(body);

    return res.status(201).send(createdResult);
  } catch (error) {
    next(error);
  }
};

//потрібно отримати всі таски одного юзера
module.exports.getAllUserTask = async (req, res, next) => {
  const { userInstance } = req;
  try {
    //знаходимо всі таски одного юзера
    const findAllTasks = await userInstance.getTasks();
    return res.status(200).send(findAllTasks);
  } catch (error) {
    next(error);
  }
};

//потрібно отримати КІЛЬКІСТЬ всіх тасок одного юзера
module.exports.getCountAllTasks = async (req, res, next) => {
  const { userInstance } = req;
  try {
    //знаходимо кількість тасок одного юзера
    const countAllTasks = await userInstance.countTasks();
    return res.status(200).send(`${countAllTasks}`);
  } catch (error) {
    next(error);
  }
};
