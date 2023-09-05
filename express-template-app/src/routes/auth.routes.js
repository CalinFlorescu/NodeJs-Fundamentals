const express = require('express');


const validator = require('../middlewares/validator');
const authValidator = require('../validators/auth.validators');
const { authControllers } = require('../controllers');

const router = express.Router();

router.post('/register', validator(authValidator.register), authControllers.register)
router.post('/login', validator(authValidator.login), authControllers.login)

module.exports = router;