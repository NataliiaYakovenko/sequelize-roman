const { Router } = require("express");
const UserController = require("../controllers/User.controler");

const router = Router();

//Post http:localhost:5000/api/user
router.post("/user", UserController.createUser);

module.exports = router;
