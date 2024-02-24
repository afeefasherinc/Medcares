import Appointment from "../Model/appointmentModel.js"

export const Newappointment = (req, res) => {
    try {
        const {name,age, gender,phonenumber,doctorname} = req.body
        console.log(req.body,'newappointmentreqbody');

        if (!name|| !age || !gender|| !phonenumber||!doctorname) {
            return res.status(400).json({ message: "All fields are mandatory" }) 
        }
        const newUser=new Appointment({name,age, gender,phonenumber,doctorname })
         const savedUserPage=  newUser.save()
         
         return res.status(201).json({ message: "successfully inserted" })
        
    } catch (error) {
        return res.status(404).json({message: error.message || 'error' });      
    }
}
export const getUser = async (req, res) => {

    try {
        const { id } = req.params;
        console.log(id,'User id');

    const  getUser= await Appointment.findById(id)
 
    if (! getUser) {
        return res.status(400).json({ message: "admin is not found!" })
    }

    return res.status(200).json({users:getUser,message: 'invalid email' })
    } catch (error) {
    return res.status(400).json({message: error.message || 'error' })

    }

}
export const getAllUser = async (req, res) => {
    // console.log('====================================');
    // console.log();
    console.log('====================================');
    try {

    const getAllUser = await Appointment.find()

    if (!getAllUser.length > 0) {
        return res.status(400).json({ message: "colletion is not found!" })
    }
    const r = await Appointment.aggregate([
        {
            $lookup:{
                from: "doctors",
                localField: "doctorId",
                foreignField: "_id",
                as: "patientDetails"
            }
        }
    ]);
    console.log(r,'r');  
   

   

    return res.status(200).json({data:getAllUser,datas:r,message: 'successful' })
    } catch (error) {
    return res.status(400).json({message: error.message || 'Invalid email or password' })

    }
}
export const deleteAppointment=async(req,res)=>{

    try{
      
        const deleteAppointment=await Appointment.findByIdAndDelete(req.params.id)
         if (! deleteAppointment) {
             return res.status(400).json({ message: " Appointment not found!" })
         }
          res.json({data:deleteAppointment,message: ' Appointment delete successfully ' })
         } catch (error) {
          res.status(400).json({message: error.message || 'error' })
     
         }
     
     }


       
  