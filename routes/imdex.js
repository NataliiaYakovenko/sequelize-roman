const { Router } = require("express");
const UserController = require("../controllers/User.controller");
const { ro } = require("date-fns/locale");
const taskController = require("../controllers/Task.controller");

const router = Router();

//POST http://localhost:5000/api/user
router.post("/user", UserController.createUser);

//GET http://localhost:5000/api/users
router.get("/users", UserController.findAll);

//GET http://localhost:5000/api/user/3
router.get("/user/:id", UserController.findByPk);

// PUT http://localhost:5000/api/user/8
router.put("/user/:id", UserController.updateByPk);

// DELETE http://localhost:5000/api/user/3
router.delete("/user/:id", UserController.deleteByPk);

//--------------------------------------------------

//POST http://localhost:5000/api/task/1
router.post("/task/:userId", taskController.createTask);

//GET http://localhost:5000/api/tasks/1
router.get("/tasks/:userId", taskController.getAllUserTask);

//GET http://localhost:5000/api/tasks-count/1
router.get("/tasks-count/:userId", taskController.getCountAllTasks);

module.exports = router;
