// import cartItemsService from "../services/cartItems.service"
// const updatedCartItem=async(req,res)=>{
//     const user=req.user
//     try {
//          const updateCartItem=await cartItemsService.updateCartItem(user._id,req.parama.id,req.body)
//          return res.status(200).send(updateCartItem)
//     } catch (error) {
//         throw new Error(error.message)
//     }
// }

// const removedCartItem=async()=>{
//     const user=req.user

//     try {
//         const removedCartItem=await cartItemsService.removeCartItem(user._id,req.parama.id,req.body)
//         return res.status(200).send({message:"cart item remove successfully"})
//     } catch (error) {
//         throw new Error(error.message)
//     }
// }

// export default {updatedCartItem,removedCartItem};