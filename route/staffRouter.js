import express, { Router } from "express"
import { getStaff,getAllStaff, Createstaff, deleteStaff, updateStaff}from "../Controller/staffController.js";


  
const router=Router();     

router.post('/createstaff', Createstaff);
router.get('/:id', getStaff);
router.get('/', getAllStaff);
router.delete('/delete/:id',deleteStaff)
router.put('/:id',updateStaff)
export default router  