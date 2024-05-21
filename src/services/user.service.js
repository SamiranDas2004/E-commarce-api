import User  from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwtProvider from "../config/jwtProvider.js";
import cartService from "./cart.service.js"; // Importing createCart directly

const createUser = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        console.log(username);

        const isUserExist = await User.findOne({ email });
        if (isUserExist) {
            throw new Error(`User with email ${email} already exists.`);
        }

        password = await bcrypt.hash(password, 8);
        const user = await User.create({ username, email, password });
        console.log("created user", user);
        const userCart = await cartService.createCart(user); // Calling createCart directly
        console.log(userCart);
        return res.status(201).json(user);
    } catch (error) {
      console.log(error);
        // throw new Error(error.message);
    }
}


const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId).populate("address");
    if (!user) {
      console.log("can't find the user with the id ", user);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserByemail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("can't find the user with the email ", email);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserProfileByToken = async (token) => {
  try {
    const userID = jwtProvider.getUserIdfromToken(token);

    const user = await findUserById(userID);

    if (!user) {
        console.log("user was not found with the id", userID)
    }

  } catch (error) {}     
};


const getAllUsers=async()=>{
    try {
        const users= await User.find();
        
        return users;

    } catch (error) {
        throw new Error(error.message)
    }
}

export default {createUser,findUserById,findUserByemail,getUserProfileByToken,getAllUsers}