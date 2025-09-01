const { User, Group } = require("../models/index");

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const createdUser = await User.create(body);
    return res.status(201).send(createdUser);
  } catch (error) {
    next(error);
  }
};

// module.exports.findAll = async (req, res, next) => {
//   try {
//     const resultArray = await User.findAll();
//     return res.status(200).send(resultArray);
//   } catch (error) {
//     next(error);
//   }
// };

module.exports.findAll = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 5;
    const offset = parseInt(req.query.offset) || 0;

    const resultArray = await User.findAll({ limit, offset });
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
//приклад Lazy loading - лениве завантаження
// module.exports.getUserwithGroup = async (req, res, next) => {
//   try {
//     const { userId } = req.params;
//     const userInstance = await User.findByPk(userId);
//     if (!userInstance) {
//       res.status(404).send("User not found");
//     }
//       const groupsArray = await userInstance.getGroups();

//     return res.status(200).send({ data: { userInstance, groupsArray } });
//   } catch (err) {
//     next(err);
//   }
// };

// голодне(моментальне завантаження)
module.exports.getUserwithGroups = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const userWithGroups = await User.findByPk(userId, {
      attributes: ["id", "first_name", "last_name"], //повертаємо тільки ті данні які нам потрібні
      include: [
        {
          model: Group,
          through: { attributes: [] }, // працює на зв'язну таблицю users_to_gtoups
          attributes: ["id", "name"], // працює на таблицю groups
        },
      ],
    });

    if (!userWithGroups) {
      res.status(404).send("User not found");
    }
    return res.status(200).send(userWithGroups);
  } catch (err) {
    next(err);
  }
};
