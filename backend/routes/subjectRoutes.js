const express = require('express');
const router = express.Router();
const subjectController = require("../controllers/subjectController")

router.get('/',subjectController.get);

router.post('/',subjectController.post)

router.get('/:id', subjectController.detail)

router.patch('/:id', subjectController.update)

router.delete('/:id', subjectController.delete)

module.exports = router;
