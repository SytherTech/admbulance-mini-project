const express = require('express')

const app = express();
const bodyParser = require('body-parser');
const authRoute = require('./routes/authRoute')
const hospitalRoute = require('./routes/hospitalRoute')
const BookingRoute = require('./routes/bookingRoute')
const adminRoute = require('./routes/adminRoute')
const mongoose = require('mongoose');
const Hospital = require('./model/hospital')

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json())

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/ambulance_fyp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/',authRoute)
app.use('/',hospitalRoute)
app.use('/' , BookingRoute)
app.use('/' , adminRoute)

app.get('/track',(req, res)=>{
    res.render('track')
})
app.get('/home' , (req , res)=>{
    res.render('home')
})
app.get('/addhospital' , (req , res)=>{
    res.render('addHospital')
})

app.get('/admin' ,async (req , res)=>{
    var hospitals = await  Hospital.find();
    res.render('admin' , {hospitals})
})

app.get('/logout',(req , res)=>{
    res.render('login')
})
app.get('/info',(req , res)=>{
    res.render('info')
})


app.listen(3000 , ()=>{
    console.log("Server Running")
})