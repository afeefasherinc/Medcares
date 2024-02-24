import Prescription from "../Model/prescriptionModel.js"

export const CreatePrescription= async(req, res) => {


    try {

        const { patientname,medication,dosage,instructions } = req.body

        if (!patientname || !medication || !dosage||!instructions) {
            return res.status(400).json({ message: "All fields are mandatory" })
        }
        const newPrescription=new Prescription({patientname, medication,dosage,instructions })
         const savedPrescription= await newPrescription.save()
        
         return res.status(201).json({ message: "successfully inserted" })
        
    } catch (error) {
        return res.status(404).json({message: error.message || 'error' });      
    }
}



export const getPrescription = async (req, res) => {

    try {
        const { id } = req.params;

    const  getPrescription= await Prescription.findById(id)

    if (! getPrescription) {
        return res.status(400).json({ message: "Prescription is not found!" })
    }

    return res.status(200).json({users:getPrescription,message: 'invalid email' })
    } catch (error) {
    return res.status(400).json({message: error.message || 'error' })

    }

}
export const getAllPrescription = async (req, res) => {
    console.log('====================================');
    // console.log();
    console.log('====================================');
    try {

    const getAllPrescription = await Prescription.find()

    if (!getAllPrescription.length > 0) {
        return res.status(400).json({ message: "colletion is not found!" })
    }

    return res.status(200).json({data:getAllPrescription,message: 'successful' })
    } catch (error) {
    return res.status(400).json({message: error.message || 'Invalid email or password' })

    }
}
export const deletePrescription=async(req,res)=>{
   
    try{
      
        const deletePrescription=await Prescription.findByIdAndDelete(req.params.id)
         if (! deletePrescription) {
             return res.status(400).json({ message: " Prescription not found!" })
         }
          res.json({data:deletePrescription,message: ' Prescription delete successfully ' })
         } catch (error) {
          res.status(400).json({message: error.message || 'error' })
     
         }
     
     }
