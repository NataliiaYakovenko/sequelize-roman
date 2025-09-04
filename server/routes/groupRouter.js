const { Router } = require("express");
const groupController = require("../controllers/Group.controller");
const { getUserInstance } = require("../middlewares/user.mw");
const multer = require("multer");
const path = require("path");
const { STATIC_PATH } = require("../config/path.config");
//const upload = multer({ dest: path.resolve(__dirname,'../public/images') });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, STATIC_PATH);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}.${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

const groupRouter = Router();

groupRouter.post("/", groupController.createGroup);
groupRouter.put(
  "/:userId/:groupId",
  getUserInstance,
  groupController.addUserToGroup
);

groupRouter.get('/',groupController.getAllGroups);

//GET http://localhost:5000/api/groups/:userId
groupRouter.get("/:userId", getUserInstance, groupController.getUserGroups);

//GET http://localhost:5000/api/groups/:groupId/members
groupRouter.get("/:groupId/members", groupController.getGroupWithMembers);

//POST http://localhost:5000/api/groups/:groupId
groupRouter.post(
  "/:groupId",
  upload.single("groupAvatar"),
  groupController.createGroupImage
);

//DELETE http://localhost:5000/api/groups/:userId/:groupId
groupRouter.delete(
  "/:userId/:groupId",
  getUserInstance,
  groupController.deleteUserFromGroup
);

module.exports = groupRouter;
