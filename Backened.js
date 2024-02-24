import express from "express"
import connectDb from "./Config/dbConnection.js";
import userRouter from './route/userRouter.js';
import staffRouter from'./route/staffRouter.js';
import pharmacyRouter from './route/pharmacyRouter.js'
import doctorRouter from './route/doctorRouter.js'
import departmentRouter from './route/departmentRouter.js'
import adminRouter from './route/adminRouter.js'
import appointmentRouter from './route/appointmentRouter.js'
import PrescriptionRouter from './route/prescriptionRouter.js'


import dotenv from "dotenv"
import cors from "cors"

const app=express()
const port=5000;
connectDb();
 dotenv.config()
app.use(cors())
app.use(express.json())

app.use('/api/user',userRouter)
app.use('/api/staff',staffRouter)
app.use('/api/pharmacy',pharmacyRouter)
app.use('/api/doctor',doctorRouter) 
app.use('/api/department',departmentRouter) 
app.use('/api/admin',adminRouter) 
app.use('/api/appointment',appointmentRouter) 
app.use('/api/prescription',PrescriptionRouter)







app.listen(port,()=>{
    console.log(`server running on port ${port}`);

})