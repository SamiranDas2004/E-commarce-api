import userService from "../services/user.service.js";
import jwtProvider from "../config/jwtProvider.js";
const authenticate=async(req,res,next)=>{
    try {
        const token=req.headers.authorization?.split(" ")[1];
        if (!token) {
            throw new Error("token not found");
        }
        const userId=jwtProvider.getUserIdfromToken(token);
        const user=userService.findUserById(userId);

        req.user=user;

    } catch (error) {
     return res.status(500).send({error:error.message})   
    }
    next();
}

export default authenticate