import express from 'express';
import userController  from '../controllers/user.controller.js';

const router=express.Router();


router.get('/profile',userController.getUserProfile);
router.get("/",userController.getAllUser);

export default router