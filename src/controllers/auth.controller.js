import userservice from '../services/user.service.js'
import jwtProvider from '../config/jwtProvider.js'
import bcrypt from 'bcrypt'
import cartService from '../services/cart.service.js'
import User from '../models/user.models.js'


const register=async(req,res)=>{
    try {
      const user= await userservice.createUser(req.body);
      if (!user) {
        return res.status(500).send("user is created")
      }
      //   const jwt= jwtProvider.generateToken(user._id);

//await cartService.createCart(user);
        return res.status(200).send(jwt,{message:"register success"})


    } catch (error) {
        return res.status(500).send("hello how do you love me")
    }
}

const login=async(req,res)=>{
    const {password,email}=req.body
    try {
             const user =await User.findOne({email});
             if (!user) {
                return res.status(404).send({message:"user not found with this email"})
             }
             
             const ispasswordValid= await bcrypt.compare(password,user.password);
             if (!ispasswordValid) {
                return res.status(401).send({message:"invalid password"})
             }

             const jwt=jwtProvider.generateToken(user._id)
             return res.status(200).send({jwt,message:"login success"})
    } catch (error) {
        return res.status(500).send({error:error.message})

    }
}

export default {register,login}