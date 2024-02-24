import mongoose from "mongoose";

const departmentSchema=new mongoose.Schema({
    departmentName:{
        type:String,
        required:true,
        minlength:3,
        maxlength:15,

    },
    doctorId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    }
    
   
     
});
const Department = mongoose.model("Department",departmentSchema);
export default Department