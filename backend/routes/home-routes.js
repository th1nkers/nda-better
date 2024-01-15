const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home-controllers.js');

router.get('/', homeController.getHomeData);

module.exports = router;

