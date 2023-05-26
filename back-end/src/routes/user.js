const express = require("express");
const router = express.Router();
const userController = require("../controllers").userController;

router.post("/", userController.register);
router.get("/login", userController.login);
router.get("/token", userController.getByToken, userController.getUserByToken);

module.exports = router;
