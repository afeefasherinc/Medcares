import mongoose from "mongoose";

const doctorSchema=new mongoose.Schema({
    doctorname:{
        type:String,
        required:true,
        unique:true,
        minlength:3,
        maxlength:15,

    },
    
    email:{
        type:String,
        required:true,
        unique:true,
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
const Doctor = mongoose.model("Doctor",doctorSchema);
export default Doctor