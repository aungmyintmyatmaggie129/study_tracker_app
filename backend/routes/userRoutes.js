const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const createValidator = require("../validation/createValidator");
const User = require("../models/user");
const requireAuth = require("../middleware/requireAuth");

router.get("/", userController.get)
router.get("/me", requireAuth, userController.me)
router.post("/logout", userController.logout)
//Check the validation
router.post("/register", [
    body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters.'),
    body('email').trim().normalizeEmail().isEmail().withMessage('Please provide a valid email address.').bail()
    .custom( async (value) => {
        let userEmail = await User.findOne({email: value});
        if(userEmail){
            throw new Error("Your email already existed! Please try to Login.");
        }
    }),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters.'),
    body('confirmPassword').custom((value, { req }) => {
        if (value !== req.body.password) throw new Error('Passwords do not match.');
        return true;
    })
], createValidator, userController.register)

router.post("/login", [
    body('email').trim().normalizeEmail().isEmail().withMessage('Please provide a valid email address.'),
    body('password').notEmpty().withMessage('Password is required.'),
], createValidator, userController.login)

module.exports = router;

// [
//     body('name').notEmpty(),
//     body('email').notEmpty(),
//     body('password').notEmpty(),
// ],createValidator(),