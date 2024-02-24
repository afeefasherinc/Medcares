import Staff from "../Model/staffModel.js"


export const Createstaff =async (req, res) => {


    try {

        const { staffname, email, password,phonenumber,departmentId} = req.body
        console.log(req.body,'req');

        if (!staffname || !email || !password||!phonenumber||!departmentId) {
            return res.status(400).json({ message: "All fields are mandatory" })
        }

        const existingStaff = await Staff.findOne({ staffname });
        if (existingStaff) {
            return res.status(400).json({ message: "Staff member with this name already exists" });
        } 

        const newStaff=new Staff({staffname, email, password,phonenumber,departmentId })
         const savedStaff= await newStaff.save()
       console.log(savedStaff,'savedstaff');

            return res.status(201).json({ message: "Successfully inserted" })
        
        
    } catch (error) {
        console.log(error);
        return res.status(404).json({message: error.message || 'error' });      
    }
}






export const getStaff = async (req, res) => {

    try {
        const { id } = req.params;

    const  getStaff= await Staff.findById(id)

    if (! getStaff) {
        return res.status(400).json({ message: "admin is not found!" })
    }

    return res.status(200).json({data:getStaff,message: 'invalid email' })
    } catch (error) {
    return res.status(400).json({message: error.message || 'error' })

    }

}
export const getAllStaff = async (req, res) => {
    console.log('====================================');
    // console.log();
    console.log('====================================');
    try {

    const getAllStaff = await Staff.find()

    if (!getAllStaff.length > 0) {
        return res.status(400).json({ message: "colletion is not found!" })
    }
    const r = await Staff.aggregate([
        {
            $lookup:{
                from: "departments",
                localField: "DepartmentId",
                foreignField: "_id",
                as: "departmentDetails"
            }
        }
    ]);
    console.log(r,'r');

    return res.status(200).json({data:getAllStaff,datas:r,message: 'successful' })
    } catch (error) {
    return res.status(400).json({message: error.message || 'Invalid email or password' })
 
    }
}
export const deleteStaff=async(req,res)=>{

       try{
         
           const deleteStaff=await Staff.findByIdAndDelete(req.params.id)
            if (! deleteStaff) {
                return res.status(400).json({ message: " staff not found!" })
            }
             res.json({data:deleteStaff,message: ' staff delete successfully ' })
            } catch (error) {
             res.status(400).json({message: error.message || 'error' })
        
            }
        
        }
        export const updateStaff=async(req,res)=>{
            try{
                const{id}=req.params;
                const updateStaffData=req.body;
                console.log(req.body,id);
                const updateStaff=await Staff.findByIdAndUpdate(id,{$set:updateStaffData},{new:true});
                console.log(updateStaff);
                res.status(200).json({data:updateStaff })
        
            }catch(error){
                res.status(400).json({message: error.message || 'error' })
            }
         }
        

 