import express, { Router } from "express"
import {Login,Register, getAdmin,getAllAdmin, updateAdmin}from "../Controller/adminController.js";



const router=Router();

 router.post('/login', Login);
router.post('/register',Register);
 router.get('/:id', getAdmin);
 router.get('/', getAllAdmin);
 router.put('/:id',updateAdmin)

export default router