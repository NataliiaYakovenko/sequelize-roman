const { User } = require("../models/index");

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    console.log(body);
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

module.exports.findByPk = async (req, res, next) => {
  try {
    const { userInstance } = req;
    return res.status(200).send(userInstance);
  } catch (error) {
    next(error);
  }
};

// module.exports.updateByPk = async (req, res, next) => {
//   try {
//     const {
//       params: { id },
//       body,
//     } = req;
//     const updatedUsersArray = await User.update(body, {
//       where: { id: id },
//       returning: true,
//     });

//     return res.status(200).send(updatedUsersArray);
//   } catch (error) {
//     next(error);
//   }
// };

//нестатичний метод
module.exports.updateByPk = async (req, res, next) => {
  try {
    const { body } = req;

    const { userInstance } = req;

    const result = await userInstance.update(body);
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

module.exports.deleteByPk = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;
    const rowsCount = await User.destroy({ where: { id: userId } });

    if (rowsCount > 0) {
      return res.status(200).send("Successful delete");
    } else {
      return res.status(204).end();
    }
  } catch (error) {
    next(error);
  }
};
