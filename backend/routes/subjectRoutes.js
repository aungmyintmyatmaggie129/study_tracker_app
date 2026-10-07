const express = require('express');
const router = express.Router();
const subjectController = require("../controllers/subjectController")
const { body } = require("express-validator")
const createValidator = require("../validation/createValidator")

router.get('/', subjectController.get);

router.post('/', [
    body('subjectName').notEmpty(),
    body('subjectCode').notEmpty()
], createValidator, subjectController.post)

router.get('/:id', subjectController.detail)

router.patch('/:id', subjectController.update)

router.delete('/:id', subjectController.delete)

module.exports = router;
