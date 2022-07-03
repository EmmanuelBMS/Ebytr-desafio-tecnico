const express = require('express');
const TaskController = require('../controllers/TaskController');

const router = express.Router();

router.get('/', TaskController.getAll);

module.exports = router;
