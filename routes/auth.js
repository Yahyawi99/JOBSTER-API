const express = require("express");
const router = express.Router();

const { register, login, updateUser } = require("../controllers/auth");

const authentication = require("../middleware/authentication");

const testUser = require("../middleware/test-user");

router.post("/register", register);
router.post("/login", login);
router.patch("/updateUser", authentication, testUser, updateUser);

module.exports = router;
