import {createOrder,shipOrder,confirmOrder,placedOrder,cancelOrder,findOrderById,userOrderHistory,getAllOrders,deleteOrder} from '../services/order.service.js'

const createdOrder=async(req,res)=>{
    const user=req.user;
    try {
        let createdOrder=await createOrder(user,req.body);
        return res.status(200).send(createdOrder)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const findorderById=async(req,res)=>{
    const user=req.user;
    try {
        let createdOrder=await findOrderById(req.params.id);
        return res.status(200).send(createdOrder)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const userHistory=async(req,res)=>{
    const user=req.user;
    try {
        let createdOrder=await userOrderHistory(user._id);
        return res.status(200).send(createdOrder)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

export default {createdOrder,findorderById,userHistory}
