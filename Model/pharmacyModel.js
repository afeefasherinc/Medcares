import mongoose from "mongoose";

const pharmacySchema=new mongoose.Schema({
    pharmasistname:{
        type:String,
        required:true,
       
        minlength:3,
        maxlength:15,

    },
    
    email:{
        type:String,
        required:true,
        minlength:2,
    },
    password:{
        type:String,
        required:true,
        minlength:2,
        maxlength:6,

    },
    
    phonenumber:{
        type:Number,
        required:true,
        minlength:10,

    }
    
});
const Pharmacy = mongoose.model("Pharmacy",pharmacySchema);
export default Pharmacy