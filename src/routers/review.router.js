import reviewControler from "../controllers/review.controler.js";

import express from 'express';
import authenticate from "../middleware/authenticate.js";
const router=express.Router();

router.get('/create',authenticate,reviewControler.createReview);
router.get("/productid/:productid",authenticate,reviewControler.getAllReview)

export default router; 