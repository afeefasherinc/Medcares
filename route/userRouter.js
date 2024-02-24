
import express, { Router } from "express"
import {  UserLogin, UserRegister}from "../Controller/userController.js";



const router=Router();

router.post('/userlogin', UserLogin);
router.post('/userregister', UserRegister);


export default router 