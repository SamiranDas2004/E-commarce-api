import {createOrder,shipOrder,confirmOrder,placedOrder,cancelOrder,findOrderById,userOrderHistory,getAllOrders,deleteOrder}  from "../services/order.service.js";

const getsAllOrders=async(req,res)=>{
    try {
        const orders=await getAllOrders();
        return res.status(200).send(orders)
    } catch (error) {
        return res.status(400).send({error:error.message});

    }
}

const confirmOrders=async(req,res)=>{
    const orderId=req.params.orderId;
    try {
        const orders=await confirmOrder(orderId);
        return res.status(200).send(orders)
    } catch (error) {
        return res.status(400).send({error:error.message});

    }
}


const shipOrders=async(req,res)=>{
    const orderId=req.params.orderId;
    try {
        const orders=await shipOrder(orderId);
        return res.status(200).send(orders)
    } catch (error) {
        return res.status(400).send({error:error.message});

    }
}


const deleteOrders=async(req,res)=>{
    const orderId=req.params.orderId;
    try {
        const orders=await deleteOrder(orderId);
        return res.status(200).send(orders)
    } catch (error) {
        return res.status(400).send({error:error.message});

    }
}


// const deliverOrders=async(req,res)=>{
//     const orderId=req.params.orderId;
//     try {
//         const orders=await deliverOrder(orderId);
//         return res.status(200).send(orders)
//     } catch (error) {
//         return res.status(400).send({error:error.message});

//     }
// }



const cancellOrders=async(req,res)=>{
    const orderId=req.params.orderId;
    try {
        const orders=await cancelOrder(orderId);
        return res.status(200).send(orders)
    } catch (error) {
        return res.status(400).send({error:error.message});

    }
}


export default {getsAllOrders,confirmOrders,deleteOrders,cancellOrders,shipOrders}
