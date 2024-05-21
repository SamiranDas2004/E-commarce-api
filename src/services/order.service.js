import { or } from "firebase/firestore";
import { Address } from "../models/address.models.js";
import  Order  from "../models/order.models.js";
import cartService from "./cart.service.js";
import User from "../models/user.models.js";
import userService from "./user.service.js";

const createOrder=async(req,res)=>{

    //     let existAddress=await Address.findById(shipAddress._id)
    //     address=existAddress
    // }
    // else{
    //     address= new Address(shipAddress);
    //     address.user=user;
    //     await address.save();

    //     user.addresses.push(address);

    // }
 
    // const cart=await cartService.findUserCart(user._id)
    // const orderItems=[];

    // for(const item of cart.cartItems){
    //     const orderItem=new orderItems({
    //         price:item.price,
    //         product:item.product,
    //         size:item.quantity,
    //         user:item.size,
    //         userId:item.userId,
    //         discountedPrice:item.discountedPrice,

    //     })
    //     const createdOrderItem=await orderItem.save();
    //     orderItems.push(createdOrderItem)
    // }
    // const createdOrder= new Order({
    //     user,   
    //     orderItems,
    //     totalPrice:cart.totalPrice,
    //     totalDiscountprice:cart.totalDiscountPrice,
    //     discounte:cart.discounte,
    //     totalItem:cart.totalItem,
    //     shippingAddress:address
    // })
    // const saveOrder= await createdOrder.save();
    // return saveOrder;
    const {id}=req.body;
   try {
    //  const  user = await User.findOne({id});
     
         const order=new Order({
       user:id,
       orderDate:req.body.orderDate,
       totalPrice:req.body.totalPrice,
       totalDiscountprice:req.body.totalDiscountprice,
       discounte:req.body.discounte,
       totalItem:req.body.totalItem,
       
 
      })
      const savedOrder=await order.save()
      return res.send(savedOrder)
     
   } catch (error) {
    throw new Error(error.message)
   }
//  
    
}
const findOrderById=async(orderId)=>{
  try {
      const order= await Order.findById(orderId)
      .populate("user")
      .populate({path:"orderItems",populate:{path:"product"}})
      .populate("shippingAddress")
  
     return order;
  } catch (error) {
    throw new Error("error.message")
  }
}

const placedOrder=async(orderId)=>{
    const order=await findOrderById(orderId);
    order.orderStatus="PLACED";
    return await order.save();
}

const confirmOrder=async(orderId)=>{
    const order=await findOrderById(orderId);
    order.orderStatus="CONFIRM";
    return await order.save();
}

const cancelOrder=async(orderId)=>{
    const order=await findOrderById(orderId);
    order.orderStatus="CANCELLED";
    return await order.save();
}


const shipOrder=async(orderId)=>{
    const order=await findOrderById(orderId);
    order.orderStatus="SHIPPED";
    return await order.save();
}

const deliverOrder=async(orderId)=>{
    const order=await findOrderById(orderId);
    order.orderStatus="DELIVER";
    return await order.save();
}

const  userOrderHistory=async(userId)=>{
  try {
      const orders=await Order.find({user:userId,orderStatus:"PLACED"}).populate({path:"orderItems",populate:{path:"product"}}).lean();
  
      return orders
  } catch (error) {
    throw new Error(error.message)
  }
}

const getAllOrders=async(req,res)=>{
   try {
    const order= await Order.find()
     return res.send(order)
   } catch (error) {
    throw new Error(error.message)
   }
   
}

const  deleteOrder=async(orderId)=>{
    const order=await findOrderById(orderId);
    await Order.findOneAndDelete(order._id);
// return res.send("order deleted Success fully")
}


export  {createOrder,shipOrder,confirmOrder,placedOrder,cancelOrder,findOrderById,userOrderHistory,getAllOrders,deleteOrder} 