import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
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
    Username:{
        type:String,
        required:true,
        minlength:3,
        maxlength:15,

    },
    password:{
        type:String,
        required:true,
        minlength:2,
        maxlength:6,

    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:2,
    }, 
   
    
});
const User = mongoose.model("User",userSchema);
export default User
