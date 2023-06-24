const express = require('express');

const router = express.Router();
const BookingController = require('../controller/bookingController')

router.route('/booking').post(BookingController.BookAmbulance);
router.route('/track-ambulance').post(BookingController.TrackAmbulance)



module.exports = router;