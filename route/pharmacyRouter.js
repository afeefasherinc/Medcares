import express, { Router } from "express"
import { PharmacyRegister, getPharmacy,getAllPharmacy, deletePharmacy, updatePharmacy}from "../Controller/pharmacyController.js";



const router=Router();

router.post('/pharmacyregister',PharmacyRegister);
router.get('/:id', getPharmacy);
router.get('/', getAllPharmacy);
router.delete('/delete/:id',deletePharmacy)
router.put('/:id',updatePharmacy)



export default router