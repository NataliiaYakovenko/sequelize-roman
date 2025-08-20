const { Router } = require("express");
const taskController = require("../controllers/Task.controller");
const { getUserInstance } = require("../middlewares/user.mw");
const { validateTask } = require("../middlewares/task.mw");

const taskRouter = Router();

//POST http://localhost:5000/api/task/1
taskRouter.post("/:userId",validateTask,getUserInstance,taskController.createTask);

//GET http://localhost:5000/api/tasks/1
taskRouter.get("/:userId", getUserInstance, taskController.getAllUserTask);

//GET http://localhost:5000/api/tasks-count/1
taskRouter.get( "/count/:userId",getUserInstance,taskController.getCountAllTasks);

module.exports = taskRouter