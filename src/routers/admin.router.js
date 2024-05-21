import express from "express";
const router = express.Router();

import adminOrderController from "../controllers/adminOrder.controller.js";
import authenticate from "../middleware/authenticate.js";


router.get("/", adminOrderController.getsAllOrders);
router.put(
  "/:orderId/confirmed",
  
  adminOrderController.confirmOrders
);
router.put("/:orderId/ship", adminOrderController.shipOrders);
router.put(
  "/:orderId/cancel",
  
  adminOrderController.cancellOrders
);
router.put("/:orderId/delete", adminOrderController.deleteOrders);
// router.put(
//   "/:orderId/deliver",
//   authenticate,
//   adminOrderController.deliverOrders
// );

export default router