import {createMultipleProduct,createProduct,deleteProduct,updateProduct,getAllProduct,findProductbyId} from '../controllers/product.controller.js'

import express from 'express';
const router=express.Router();
import authenticate from '../middleware/authenticate.js';

router.get("/",getAllProduct);
router.get("/id/:id",findProductbyId);

export default router;