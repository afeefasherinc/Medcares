import mongoose from "mongoose";

const appointmentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:15,

    },
    age:{
        type:Number,
        required:true,
        minlength:1,
    },
    phonenumber:{
        type:Number,
        required:true,
        minlength:10,
        unique:true,

    },
    gender:{
        type:String,
        required:true,
    },
    doctorname:{
        type:String,
        required:true,
    }
    
       
    
   
    
});
const Appointment = mongoose.model("Appointment",appointmentSchema);
export default Appointment