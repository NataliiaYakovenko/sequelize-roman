const { Router } = require("express");
const UserController = require("../controllers/User.controller");
const { ro } = require("date-fns/locale");
const taskController = require("../controllers/Task.controller");
const { getUserInstance } = require("../middlewares/user.mw");
const { validateUser } = require("../middlewares/user.validation");
const { validateTask } = require("../middlewares/task.mw");

const router = Router();

//POST http://localhost:5000/api/user
router.post("/user", validateUser, UserController.createUser);

//GET http://localhost:5000/api/users
router.get("/users", UserController.findAll);

//GET http://localhost:5000/api/user/3
router.get("/user/:userId", getUserInstance, UserController.findByPk);

// PUT http://localhost:5000/api/user/8
router.put("/user/:userId", getUserInstance, UserController.updateByPk);

// DELETE http://localhost:5000/api/user/3
router.delete("/user/:userId", UserController.deleteByPk);

//--------------------------------------------------

//POST http://localhost:5000/api/task/1
router.post("/task/:userId",validateTask, getUserInstance, taskController.createTask);

//GET http://localhost:5000/api/tasks/1
router.get("/tasks/:userId", getUserInstance, taskController.getAllUserTask);

//GET http://localhost:5000/api/tasks-count/1
router.get(
  "/tasks-count/:userId",
  getUserInstance,
  taskController.getCountAllTasks
);

module.exports = router;
