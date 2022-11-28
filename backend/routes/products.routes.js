import { Router } from "express";
import {getProducts, getProduct, createProduct, updateProduct, deleteProduct, deleteStock, getProductStock, addStock} from '../controllers/product.controller.js';
const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.get("/stock/:id", getProductStock);
router.post("/products", createProduct);
router.put("/stock_delete/:id", deleteStock);
router.put("/stock_add/:id", addStock);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);



export default router;