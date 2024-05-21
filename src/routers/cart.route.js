import express from "express";
const router = express.Router();

import cartController from "../controllers/cart.controller.js";
import authenticate from "../middleware/authenticate.js";
import cartService from "../services/cart.service.js";

router.get('/',cartService.findUserCart);
router.post("/add",cartService.addCartItem);

export default router; 