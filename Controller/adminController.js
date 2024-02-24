import Admin from "../Model/adminModel.js";
import jwt from 'jsonwebtoken'



  
export const Register = (req, res) => {
    try {
        const {firstname,lastname, username, email, password } = req.body

        if (!firstname|| !lastname || !username|| !email|| !password) {
            return res.status(400).json({ message: "All fields are mandatory" })
        }
        const newAdmin=new Admin({firstname,lastname, username, email, password })
         const savedAdmin=  newAdmin.save()
         
         return res.status(201).json({ users:newAdmin,message: "successfully inserted" })
        
    } catch (error) {
        return res.status(404).json({message: error.message || 'error' });      
    }
}

   
export const Login = async (req, res) => {


try{

    const { Username,email,password } = req.body; 
    if (!Username||!email || !password) {
        return res.status(400).json({ message: "All fields are mandatory" })
    }


        const login = await Admin.findOne({username:Username,email:email,password:password})

        console.log(login);
        if(!login){

            return res.status(404).json({message: 'user not found' });   
  
        }



        var token = jwt.sign({ userid:login._id,isAdmin:login.isAdmin }, 'example');


        
        return res.status(201).json({ message: "Successfully loggrd",token:token,user:login })
    }catch(error){
        return res.status(404).json({message: error.message || 'error' });   
    }
    
}
 




export const getAdmin = async (req, res) => {

    try {
        const { id } = req.params;

    const getAdmin = await Admin.findById(id)

    if (!getAdmin) {
        return res.status(400).json({ message: "admin is not found!" })
    }

    return res.status(200).json({data:getAdmin,message: 'invalid email' })
    } catch (error) {
    return res.status(400).json({message: error.message || 'error' })

    }

}


export const getAllAdmin = async (req, res) => {
    console.log('====================================');
    // console.log();
    console.log('====================================');
    try {

    const getAllAdmin = await Admin.find()

    if (!getAllAdmin.length > 0) {
        return res.status(400).json({ message: "colletion is not found!" })
    }

    return res.status(200).json({data:getAllAdmin,message: 'users' })
    } catch (error) {
    return res.status(400).json({message: error.message || 'error' })

    }
}
export const updateAdmin=async(req,res)=>{
    try{
        const{id}=req.params;
        const updateAdminData=req.body;
        console.log(req.body,id);
        const updateAdmin=await Admin.findByIdAndUpdate(id,{$set:updateAdminData},{new:true});
        console.log(updateAdmin);
        res.status(200).json({data:updateAdmin })
 
    }catch(error){
        res.status(400).json({message: error.message || 'error' })
    }
 }



 