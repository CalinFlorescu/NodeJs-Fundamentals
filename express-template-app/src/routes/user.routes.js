const express = require('express');

const { userControllers } = require('../controllers');
const checkPermissions = require("../middlewares/checkPermission");

const router = express.Router();

router
    .route('/users')
    .get(checkPermissions('USER'), userControllers.listAllUsers)

module.exports = router;