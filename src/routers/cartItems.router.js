import express from "express";
const router = express.Router();
import cartItemsService from "../services/cartItems.service.js";

import authenticate from "../middleware/authenticate.js";

router.put("/:id",cartItemsService.updateCartItem);
router.delete("/delete",cartItemsService.removeCartItem);

export default router;