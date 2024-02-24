import express, { Router } from "express"
import {DoctorRegister, getDoctor,getAllDoctor, deleteDoctor, updateDoctor}from "../Controller/doctorController.js";



const router=Router();

router.post('/doctorregister',DoctorRegister );
router.get('/:id', getDoctor);
router.get('/', getAllDoctor);
router.delete('/delete/:id',deleteDoctor)
router.put('/:id',updateDoctor)


export default router 