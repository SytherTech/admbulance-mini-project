const BookingModel = require('../model/book');
const Hospital = require('../model/hospital');

exports.BookAmbulance = async (req , res)=>{
        const name = req.body.name;
        const phone = req.body.phone;
        const address = req.body.address;
    try{


     var book =   await BookingModel.create({
           fullName:name,
           phone:phone,
           address:address,
       
        })

        book.save().then((booking)=>{
            res.render('bookingId' , {booking});
        })

    }catch(e)
    {
        res.status(500).json({status:"failed" , message:e.message})
    }

}

exports.TrackAmbulance = async (req , res)=>{

    const _id = req.body.bookingId;

    try{
        console.log(_id)
        var booking = await BookingModel.findById({_id})
        console.log(booking)
        res.status(200).json(booking)


    }catch(e)
    {
        res.status(500).json({status:"failed", message:e.message})
    }


}