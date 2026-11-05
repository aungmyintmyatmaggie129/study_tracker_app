const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const createValidator = require("../validation/createValidator");
const User = require("../models/user");
const requireAuth = require("../middleware/requireAuth");

router.get("/", userController.get)
router.get("/me", requireAuth, userController.me)
//Check the validation
router.post("/register", [
    body('name').notEmpty(),
    body('email').custom( async (value) => {
        let userEmail = await User.findOne({email: value});
        if(userEmail){
            throw new Error("Your email already existed! Please try to Login.");
        }
    }).notEmpty(),
    body('password').notEmpty()
], createValidator, userController.register)

router.post("/login", [
    body('email').trim().isEmail().withMessage('Please provide a valid email address.'),
    body('password').notEmpty().withMessage('Password is required.'),
], createValidator, userController.login)

module.exports = router;

// [
//     body('name').notEmpty(),
//     body('email').notEmpty(),
//     body('password').notEmpty(),
// ],createValidator(),