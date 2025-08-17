const { Router } = require("express");
const groupController = require("../controllers/Group.controller");
const { getUserInstance } = require("../middlewares/user.mw");

const groupRouter = Router();

groupRouter.post("/", groupController.createGroup);
groupRouter.put(
  "/:userId/:groupId",
  getUserInstance,
  groupController.addUserToGroup
);

//GET http://localhost:5000/api/groups/:userId
groupRouter.get("/:userId", getUserInstance, groupController.getUserGroups);

//GET http://lovalhost:5000/api/groups/:groupId/members
groupRouter.get("/:groupId/members", groupController.getGroupWithMembers);

//DELETE http://localhost:5000/api/groups/:userId/:groupId
groupRouter.delete(
  "/:userId/:groupId",
  getUserInstance,
  groupController.deleteUserFromGroup
);

module.exports = groupRouter;
