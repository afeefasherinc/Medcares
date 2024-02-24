import Department from "../Model/departmentModel.js";


export const createDepartment =async (req, res) => {

    console.log(req.body,'deptment');
    // const id=req.params;
    // console.log(id,'doctorid');
    try {

        const {departmentName,doctorId } = req.body

        if (!departmentName||!doctorId) {
            return res.status(400).json({ message: "All field is mandatory" })

        }else{
            const newdepartment=new Department ({departmentName,doctorId})
            const getDepartment=await newdepartment.save()
            console.log(getDepartment,'saveddept');
            return res.status(201).json({ message: "Successfully inserted" })
        } 
        
    } catch (error) {
        return res.status(404).json({message: error.message || 'error' });      
    }
}
export const getDoctorDepartment=async(req,res)=>{
  try{
    const id=req.params; 
    const getDoctorDepartment=await Department.findById(id)
    
    if (! getDoctorDepartment) {
        return res.status(400).json({ message: "admin is not found!" })
    }
    return res.status(200).json({data:getDoctorDepartment,message: 'invalid email' })
    } catch (error) {
    return res.status(400).json({message: error.message || 'error' })

    }

}
export const getAllDoctorDepartment = async (req, res) => {
    console.log('====================================');
    // console.log();
    console.log('====================================');
    try {

    const getAllDocotrDepartment = await Department.find()
    

    if (!getAllDoctorDepartment.length > 0) {
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

    return res.status(200).json({data:getAllDocotrDepartment, datas:r, message: 'successful' })
    } catch (error) {
    return res.status(400).json({message: error.message || 'Invalid email or password' })

    }
}
// export const deleteDepartment=async(req,res)=>{

//     try{
//         const id=req.params;
//         const deleteDepartment=await Department.findByIdAndDelete(id)
//         if (! deleteDepartment) {
//             return res.status(400).json({ message: " not found!" })
//         }
//         return res.status(200).json({data:deleteDepartment,message: 'dlete succeful ' })
//         } catch (error) {
//         return res.status(400).json({message: error.message || 'error' })
    
//         }
    
//     }
export const deleteDepartment=async(req,res)=>{

    try{
      
        const deleteDepartment=await Department.findByIdAndDelete(req.params.id)
         if (! deleteDepartment) {
             return res.status(400).json({ message: " Department not found!" })
         }
          res.json({data:deleteDepartment,message: ' Department delete successfully ' })
         } catch (error) {
          res.status(400).json({message: error.message || 'error' })
     
         }
     
     }
 export const updateDepartment=async(req,res)=>{
    try{
        const{id}=req.params;
        const updatedDepartmentData=req.body;
        console.log(req.body,id);
        const updateDepartment=await Department.findByIdAndUpdate(id,{$set:updatedDepartmentData},{new:true});
        console.log(updateDepartment);
        res.status(200).json({data:updateDepartment })

    }catch(error){
        res.status(400).json({message: error.message || 'error' })
    }
 }

 
  



