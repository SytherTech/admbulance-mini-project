const Hospital = require('../model/hospital');
const User = require('../model/user');


// GET - Display the login form
exports.getLogin = (req, res) => {
    res.render('login');
  };
  
  // GET - Display the signup form
  exports.getSignup = (req, res) => {
    res.render('signup');
  };
  

// User login
exports.login = async (req, res) => {
  const { phoneNumber } = req.body;

  try {
    if(phoneNumber == "0000")
    {
    var hospitals = await  Hospital.find();
      res.render('admin' , {hospitals})
      
    }else{
   // Find the user by phoneNumber
   const user = await User.findOne({ phoneNumber });

   // User not found
   if (!user) {
     return res.status(404).json({ message: 'User not found' });
   }



   return res.render('home' )
    }
 
  } catch (error) {
    console.error('Error occurred during login:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// User signup
exports.signup = async (req, res) => {

    const name = req.body.name;
    const phoneNumber = req.body.phoneNumber;



  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ phoneNumber });

    // User already exists
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({
      name,
      phoneNumber,
    });

    // Save the user to the database
    await newUser.save();

    // Return success response
    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error occurred during signup:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
