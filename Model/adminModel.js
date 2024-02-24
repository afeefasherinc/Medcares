import mongoose from "mongoose";

const adminSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        minlength:3,
        maxlength:15,
   
    },
    lastname:{
        type:String,
        required:true,
        minlength:3,
        maxlength:15,
     
    },
    username:{
        type:String,
        required:true,
        minlength:3,
        maxlength:15,

    },
    password:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    isAdmin:{
        type:Boolean,
        default:true,
    } 
    
});
const Admin = mongoose.model("Admin",adminSchema);
export default Admin