import mongoose from "mongoose";

const staffSchema=new mongoose.Schema({
    staffname:{
        type:String,
        required:true,
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
        

    },
    
    phonenumber:{
        type:Number,
        required:true,
        minlength:10,

    },
    departmentId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        minlength:2,
    }
    
}); 
const Staff = mongoose.model("Staff",staffSchema);
export default Staff