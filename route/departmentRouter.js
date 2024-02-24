import express, { Router } from "express"
import { createDepartment, deleteDepartment, getAllDoctorDepartment, getDoctorDepartment, updateDepartment } from "../Controller/departmentController.js";



const router=Router();

router.post('/createdepartment', createDepartment);
router.get('/:id', getDoctorDepartment);
router.get('/', getAllDoctorDepartment);
router.delete('/delete/:id',deleteDepartment)
router.put('/:id',updateDepartment)


export default router

 