const express = require('express');
const router = express.Router();
const camController = require('../Controllers/cameraController')
router.post('/add',camController.addCamera);
router.get('/user',camController.getCamerasByOwnerId);
module.exports = router;