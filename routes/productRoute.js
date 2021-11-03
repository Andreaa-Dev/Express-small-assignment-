import { Router } from "express";
import { addProduct, createProduct } from "../product.js";

const router = Router();

router.get("/product", createProduct, addProduct);

export default router;
