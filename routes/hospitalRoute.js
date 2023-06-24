const express = require('express');

const router = express.Router();
const hospitalController = require('../controller/hospitalController')

router.route('/search').post(hospitalController.Search);
router.route('/book/:hospitalId').get(hospitalController.BookAmbulance)


module.exports = router;