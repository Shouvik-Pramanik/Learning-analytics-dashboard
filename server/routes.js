const express = require("express");
const router = express.Router();
const TeacherController = require("./teacher.controller");

const UserController = require("./user.controller");
router.post("/teacher/login", TeacherController.login);
router.get("/predictT3", UserController.predictT3);
router.get("/getUser", UserController.getUser);
router.get("/getAllUsers", UserController.getAllUsers);

module.exports = router;
