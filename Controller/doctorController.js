import Doctor from "../Model/doctorModel.js";

export const DoctorRegister = async(req, res) => {


    try {
        const { doctorname, email, password,phonenumber } = req.body

        if (!doctorname|| !email || !password|| !phonenumber) {
            return res.status(400).json({ message: "All fields are mandatory" })
        }
        const newDoctor=new Doctor({doctorname, email, password,phonenumber })
         const savedDoctor=  newDoctor.save()
        
         return res.status(201).json({ message: "successfully inserted" })
        
    } catch (error) {
        return res.status(404).json({message: error.message || 'error' });      
    }
}



export const getDoctor = async (req, res) => {

    try {
        const { id } = req.params;
        console.log(id,'doctor id');

    const  getDoctor= await Doctor.findById(id)

    if (! getDoctor) {
        return res.status(400).json({ message: "admin is not found!" })
    }

    return res.status(200).json({users:getAdmin,message: 'invalid email' })
    } catch (error) {
    return res.status(400).json({message: error.message || 'error' })

    }

}
export const getAllDoctor = async (req, res) => {
    // console.log('====================================');
    // console.log();
    console.log('====================================');
    try {

    const getAllDoctor = await Doctor.find()

    if (!getAllDoctor.length > 0) {
        return res.status(400).json({ message: "colletion is not found!" })
    }

    return res.status(200).json({data:getAllDoctor,message: 'successful' })
    } catch (error) {
    return res.status(400).json({message: error.message || 'Invalid email or password' })

    }
}
export const deleteDoctor=async(req,res)=>{

    try{
      
        const deleteDoctor=await Doctor.findByIdAndDelete(req.params.id)
         if (! deleteDoctor) {
             return res.status(400).json({ message: " Doctor not found!" })
         }
          res.json({data:deleteDoctor,message: ' Doctor delete successfully ' })
         } catch (error) {
          res.status(400).json({message: error.message || 'error' })
     
         }
     
     }
     export const updateDoctor=async(req,res)=>{
        try{
            const{id}=req.params;
            const updateDoctorData=req.body;
            console.log(req.body,id);
            const updateDoctor=await Doctor.findByIdAndUpdate(id,{$set:updateDoctorData},{new:true});
            console.log(updateDoctor);
            res.status(200).json({data:updateDoctor })
    
        }catch(error){
            res.status(400).json({message: error.message || 'error' })
        }
     }
    
       