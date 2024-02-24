import express, { Router } from "express"
import { CreatePrescription, deletePrescription, getAllPrescription, getPrescription } from "../Controller/prescriptionController.js";

const router=Router();

router.post('/createprescription',CreatePrescription);
router.get('/:id', getPrescription);
router.get('/', getAllPrescription);
router.delete('/delete/:id',deletePrescription)


export default router