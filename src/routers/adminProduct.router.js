import express from "express";
const router = express.Router();

import {createMultipleProduct,createProduct,deleteProduct,updateProduct,getAllProduct,findProductbyId} from '../controllers/product.controller.js'
import authenticate from "../middleware/authenticate.js";
import productService from "../services/product.service.js";
router.post("/",productService.createProduct);
router.post("/create",authenticate,createMultipleProduct);
router.delete("/delete",productService.deleteProduct);
router.put("/:id",updateProduct);

export default router