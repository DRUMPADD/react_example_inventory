import { Router } from "express";
import {getProviders, getProvider, createProvider, updateProvider, deleteProvider} from '../controllers/provider.controllers.js';
const router = Router();

router.get("/providers", getProviders);
router.get("/providers/:id", getProvider);
router.post("/providers", createProvider);
router.put("/providers/:id", updateProvider);
router.delete("/providers/:id", deleteProvider);



export default router;