const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController');
const validateMiddleware = require('../Middlewares/authenticationMiddleware');


router.post('/login',adminController.adminLogin);
router.get('/getCameras',validateMiddleware,adminController.getCameras);

module.exports = router;