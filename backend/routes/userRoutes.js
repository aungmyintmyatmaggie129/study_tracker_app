const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const createValidator = require("../validation/createValidator");
const createToken = require("../token/createToken");

router.get("/", userController.get)
//Check the validation
router.post("/register", [
    body('name').notEmpty(),
    body('email').notEmpty(),
    body('password').notEmpty()
], createValidator, userController.register)

router.post("/login", userController.login)

module.exports = router;

// [
//     body('name').notEmpty(),
//     body('email').notEmpty(),
//     body('password').notEmpty(),
// ],createValidator(),