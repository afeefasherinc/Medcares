import express, { Router } from "express"
import { Newappointment,  deleteAppointment,  getAllUser, getUser } from "../Controller/appointmentController.js";


const router=Router();
  
router.post('/newappointment', Newappointment);
router.get('/:id', getUser);
router.get('/', getAllUser);
router.delete('/delete/:id',deleteAppointment)



export default router 