import userService from '../services/user.service.js';
import User from '../models/user.models.js';
const getUserProfile = async (req, res) => {
    const {email}=req.body;
    try {
        // const jwt = req.headers.authorization?.split(" ")[1];

        // if (!jwt) {
        //     return res.status(404).send({ error: "Token not found" });
        // }

        const user = await User.findOne({email});
        console.log(user)
        return res.status(200).send(user);
    } catch (error) {
        console.error("Error in getUserProfile:", error); // Log the error for debugging purposes
        return res.status(500).send({ error: error.message });
    }
};


const getAllUser=async(req,res)=>{
    try {
        const users=await userService.getAllUsers();
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

export  default {getAllUser,getUserProfile}