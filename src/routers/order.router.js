import express from "express";
const router = express.Router();

import orderController from "../controllers/order.controller.js";
import authenticate from "../middleware/authenticate.js";
import   {createOrder,shipOrder,confirmOrder,placedOrder,cancelOrder,findOrderById,userOrderHistory,getAllOrders,deleteOrder} from '../services/order.service.js'
router.post("/newOrder",createOrder);
router.get("/user",userOrderHistory);
 router.get("/:id",orderController.findorderById)
router.get("/allorders",getAllOrders);
export default router