import Cart from "../models/cart.models.js";
import cartItem from "../models/cartItems.models.js";
import userService from "./user.service.js";

const updateCartItem= async(userId,cartItemId,cartItemData)=>{

    try {
        const item= await findCartItemById(cartItemId)
        if(!item){
            throw new Error("cart item not found",cartItemId)
        }
        const user= await userService.findUserById(item.userId);

        if (!user) {
            throw new Error("user not found",user)
        }

        if(user._id===userId.toString()){
            item.quantity=cartItemData.quantity;
            item.price=item.quantity*item.product.price;
            item.discountedPrice=item.quantity*item.product.discountedPrice;
            const updatedCartItem=await item.save();
            return updatedCartItem;
        }
        else{
            throw new Error("you can't update this cart item")
        }

    } catch (error) {
     throw new Error(error.message)   
    }
}


const removeCartItem=async(req,res)=>{
   try {
    const user=req.body.userId
    const deleteProduct= await Cart.findByIdAndDelete(user)

    return res.send("successfully delete the cartItem")

    //  const cartItem= await findcartItemById(cartItemId);
    //  const user= await userService.findUserById(userId)
 
    //  if(user._id===cartItem.userId.toString()){
    //      await cartItem.findByIdAndDelete(cartItemId)
    //  }

   } catch (error) {
    throw new Error(error.message)
   }
}

const findcartitemById=async(cartId)=>{
    try {
        const cartItem=await Cart.findOne(cartId);
        if (!cartItem) {
            return "cart item is't found"
        }
        else{
            return cartItem
        }
    } catch (error) {
        throw new Error(error.message)
    }
}


export default {updateCartItem,removeCartItem,findcartitemById}