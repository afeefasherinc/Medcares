import Pharmacy from "../Model/pharmacyModel.js";

export const PharmacyRegister = async(req, res) => {


    try {

        const { pharmasistname, email, password,phonenumber } = req.body

        if (!pharmasistname || !email || !password||!phonenumber) {
            return res.status(400).json({ message: "All fields are mandatory" })
        }
        const newPharmacist=new Pharmacy({pharmasistname, email, password,phonenumber })
         const savedPharmacist= await newPharmacist.save()
        
         return res.status(201).json({ message: "successfully inserted" })
        
    } catch (error) {
        return res.status(404).json({message: error.message || 'error' });      
    }
}



export const getPharmacy = async (req, res) => {

    try {
        const { id } = req.params;

    const  getPharmacy= await Pharmacy.findById(id)

    if (! getPharmacy) {
        return res.status(400).json({ message: "admin is not found!" })
    }

    return res.status(200).json({users:getAdmin,message: 'invalid email' })
    } catch (error) {
    return res.status(400).json({message: error.message || 'error' })

    }

}
export const getAllPharmacy = async (req, res) => {
    console.log('====================================');
    // console.log();
    console.log('====================================');
    try {

    const getAllPharmacy = await Pharmacy.find()

    if (!getAllPharmacy.length > 0) {
        return res.status(400).json({ message: "colletion is not found!" })
    }

    return res.status(200).json({data:getAllPharmacy,message: 'successful' })
    } catch (error) {
    return res.status(400).json({message: error.message || 'Invalid email or password' })

    }
}
export const deletePharmacy=async(req,res)=>{

    try{
      
        const deletePharmacy=await Pharmacy.findByIdAndDelete(req.params.id)
         if (! deletePharmacy) {
             return res.status(400).json({ message: " Pharmacy not found!" })
         }
          res.json({data:deletePharmacy,message: ' Pharmacy delete successfully ' })
         } catch (error) {
          res.status(400).json({message: error.message || 'error' })
     
         }
     
     }
     export const updatePharmacy=async(req,res)=>{
        try{
            const{id}=req.params;
            const updatePharmacyData=req.body;
            console.log(req.body,id);
            const updatePharmacy=await Pharmacy.findByIdAndUpdate(id,{$set:updatePharmacyData},{new:true});
            console.log(updatePharmacy);
            res.status(200).json({data:updatePharmacy })
    
        }catch(error){
            res.status(400).json({message: error.message || 'error' })
        }
     }
    



