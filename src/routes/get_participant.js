const express = require('express');

const router = express.Router();

const controller = require('../controllers/participant_controller')

router.get('/', (req, res) => controller.get(req, res));

module.exports = router;