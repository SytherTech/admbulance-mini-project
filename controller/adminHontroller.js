// hospitalController.js

const Hospital = require('../model/hospital');

// Create a new hospital
exports.createHospital = async (req, res) => {
    console.log("came")
  try {
    const { name, location, charges } = req.body;

    const hospital = new Hospital({
      name,
      location,
      charges
    });

    await hospital.save();

    res.redirect('/info');
  } catch (err) {
    console.error('Error creating hospital:', err);
    res.redirect('/admin');
  }
};



// Update a hospital
exports.updateHospital = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location, charges } = req.body;

    await Hospital.findByIdAndUpdate(id, {
      name,
      location,
      charges,
      updatedAt: Date.now()
    });

    res.redirect('/admin');
  } catch (err) {
    console.error('Error updating hospital:', err);
    res.redirect('/admin');
  }
};

// Delete a hospital
exports.deleteHospital = async (req, res) => {
  try {
    const { id } = req.params;

    await Hospital.findByIdAndDelete(id);

    res.redirect('/admin');
  } catch (err) {
    console.error('Error deleting hospital:', err);
    res.redirect('/admin');
  }
};
