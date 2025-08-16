const { Router } = require("express");
const UserController = require("../controllers/User.controller");
const { getUserInstance } = require("../middlewares/user.mw");
const { validateUser } = require("../middlewares/user.validation");

const userRouter = Router();
//POST http://localhost:5000/api/user
userRouter.post("/", validateUser, UserController.createUser);

//GET http://localhost:5000/api/users
userRouter.get("/", UserController.findAll);

//GET http://localhost:5000/api/user/3
userRouter.get("/:userId", getUserInstance, UserController.findByPk);

//GET http://localhost:5000/api/users/groups/1
userRouter.get("/groups/:userId", UserController.getUserwithGroups);

// PUT http://localhost:5000/api/user/8
userRouter.put("/:userId", getUserInstance, UserController.updateByPk);

// DELETE http://localhost:5000/api/user/3
userRouter.delete("/:userId", UserController.deleteByPk);

module.exports = userRouter;
