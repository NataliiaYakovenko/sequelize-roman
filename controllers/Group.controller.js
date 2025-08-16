const { User, Task, Group } = require("../models");

module.exports.createGroup = async (req, res, next) => {
  try {
    const { body } = req;

    const createdGroup = await Group.create(body);

    return res.status(201).send(createdGroup);
  } catch (error) {
    next(error);
  }
};

//Написати контроллер на додавання юзера у групу
module.exports.addUserToGroup = async (req, res, next) => {
  try {
    const {
      userInstance,
      params: { groupId },
    } = req;

    const group = await Group.findByPk(groupId);

    const result = await group.addUser(userInstance);

    return res.status(200).send("user added to row");
  } catch (error) {
    next(error);
  }
};

//знаходження груп конкретного юзера

module.exports.getUserGroups = async (req, res, next) => {
  try {
    const { userInstance } = req;

    const groups = await userInstance.getGroups();
    res.status(200).send(groups);
  } catch (err) {
    next(err);
  }
};

//видалити user з групи
module.exports.deleteUserFromGroup = async (req, res, next) => {
  try {
    const { userInstance } = req;
    const { groupId } = req.params;

    const groupInstance = await Group.findByPk(groupId);
    if (!groupInstance) {
      return res.status(404).send("Group not found");
    }
    const rowCount = await groupInstance.removeUser(userInstance);
    if (rowCount) {
      return res.status(200).send("User deleted");
    }
    return res.status(400).send("User is not in this group");
  } catch (error) {
    next(error);
  }
};

// module.exports.deleteUserFromGroup = async (req, res, next) => {
//   try {
//     const { userInstance } = req;
//     const { groupId } = req.params;

//     const foundGroup = await Group.findByPk(groupId);
//     if (!foundGroup) {
//       return res.status(404).send("Group not found");
//     }
//     const deleteUser = await foundGroup.removeUser();
//     res.status(200).end();
//   } catch (error) {
//     next(error);
//   }
// };
