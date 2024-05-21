import express from 'express'
import authController from '../controllers/auth.controller.js'
import userService from '../services/user.service.js';
const router =express.Router()

router.post("/signup",userService.createUser);
router.post("/login",authController.login);

export default router