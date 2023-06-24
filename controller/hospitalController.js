const Hospital = require('../model/hospital');

exports.Search = async (req , res)=>{
    const location  = req.body.location;
    try{

          const hospitals = await Hospital.find({ location: { $regex: new RegExp(location, 'i')}});
          res.status(200).json({hospitals})
          
    }catch(e)
    {
        res.status(500).json({status:"failed" , message:e.message})
    }

}

exports.BookAmbulance = async (req , res)=>{
    const hospitalId = req.params.hospitalId;
    try{

          const hospitals = await Hospital.findById(hospitalId);
        
          res.render('book',{hospitals})

          
    }catch(e)
    {
        res.status(500).json({status:"failed" , message:e.message})
    }

}