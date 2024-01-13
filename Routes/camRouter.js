const express = require('express');
const router = express.Router();
const camController = require('../Controllers/cameraController')
router.post('/add',camController.addCamera);
module.exports = router;