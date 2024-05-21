import express from 'express';

const router=express.Router();
import {createRatings,getProductRating} from '../services/ratings.service.js'
import ratingsControler from '../controllers/ratings.controler.js';
import authenticate from '../middleware/authenticate.js';

router.post("/create",createRatings);


router.put("/product/:productId",authenticate,ratingsControler.getAllRatings);

export default router;
