const express = require('express');

const router = express.Router();
const userController = require('../controller/userController')

router.route('/login').get(userController.getLogin).post(userController.login);
router.route('/signup').get(userController.getSignup).post(userController.signup)

module.exports = router;