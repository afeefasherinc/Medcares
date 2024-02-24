import User from "../Model/userModel.js"

export const UserRegister = (req, res) => {
    try {
        const {firstname,lastname, Username, email, password } = req.body

        if (!firstname|| !lastname || !Username|| !email|| !password) {
            return res.status(400).json({ message: "All fields are mandatory" })
        }
        const newUser=new User({firstname,lastname, Username, email, password })
         const savedUser=  newUser.save()
         
         return res.status(201).json({ message: "successfully inserted" })
        
    } catch (error) {
        return res.status(404).json({message: error.message || 'error' });      
    }
}

   
export const UserLogin = async (req, res) => {
try{

    const { Username,email,password } = req.body; 
    if (!Username||!email || !password) {
        return res.status(400).json({ message: "All fields are mandatory" })
    }
        const login = await User.findOne({username:Username,email:email,password:password})
        
        return res.status(201).json({ message: "Successfully inserted" })
    }catch(error){
        return res.status(404).json({message: error.message || 'error' });   
    }
    
}  
export const UserPageRegister = (req, res) => {
    try {
        const {name,age, gender,phonenumber,doctorId} = req.body

        if (!name|| !age || !gender|| !phonenumber) {
            return res.status(400).json({ message: "All fields are mandatory" }) 
        }
        const newUser=new User({name,age, gender,phonenumber })
         const savedUserPage=  newUser.save()
         
         return res.status(201).json({ message: "successfully inserted" })
        
    } catch (error) {
        return res.status(404).json({message: error.message || 'error' });      
    }
}
export const getUser = async (req, res) => {

    try {
        const { id } = req.params;
        console.log(id,'User id');

    const  getUser= await User.findById(id)
 
    if (! getUser) {
        return res.status(400).json({ message: "admin is not found!" })
    }

    return res.status(200).json({users:getUser,message: 'invalid email' })
    } catch (error) {
    return res.status(400).json({message: error.message || 'error' })

    }

}
export const getAllUser = async (req, res) => {
    // console.log('====================================');
    // console.log();
    console.log('====================================');
    try {

    const getAllUser = await User.find()

    if (!getAllUser.length > 0) {
        return res.status(400).json({ message: "colletion is not found!" })
    }
    const r = await Department.aggregate([
        {
            $lookup:{
                from: "doctors",
                localField: "doctorId",
                foreignField: "_id",
                as: "doctorDetails"
            }
        }
    ]);
    console.log(r,'r');

    return res.status(200).json({data:getAllUser,data:r,message: 'successful' })
    } catch (error) {
    return res.status(400).json({message: error.message || 'Invalid email or password' })

    }
}

       
  