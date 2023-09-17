const express = require("express");
const router = express.Router();

const { register, login, updateUser } = require("../controllers/auth");

const authentication = require("../middleware/authentication");

const testUser = require("../middleware/test-user");

const rateLimiter = require("express-rate-limit");
const appLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { msg: "too many request, please try after 15min" },
});

router.post("/register", appLimiter, register);
router.post("/login", appLimiter, login);
router.patch("/updateUser", authentication, testUser, updateUser);

module.exports = router;
