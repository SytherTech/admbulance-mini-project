// routes/admin.js

const express = require('express');
const router = express.Router();
const hospitalController = require('../controller/adminHontroller');

// Create a new hospital
router.route('/add-hospital').post(hospitalController.createHospital);

// // Read all hospitals
// router.route('/').get(hospitalController.getAllHospitals);

// // Update a hospital
// router.route('/update-hospital/:id').post( hospitalController.updateHospital);

// // Delete a hospital
// router.route('/delete-hospital/:id').post( hospitalController.deleteHospital);

module.exports = router;
