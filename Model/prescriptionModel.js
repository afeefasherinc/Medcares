import mongoose from "mongoose";

const prescriptionSchema=new mongoose.Schema({
    patientname:{
        type:String,
        required:true,
       
        minlength:3,
        maxlength:15,

    },
    
    medication:{
        type:String,
        required:true,
        minlength:2,
    },
    dosage:{
        type:String,
        required:true,
        minlength:1,
        maxlength:6,

    },
    
    instructions:{
        type:String,
        required:true,
       

    }
    
});
const Prescription = mongoose.model("Prescription",prescriptionSchema);
export default Prescription
