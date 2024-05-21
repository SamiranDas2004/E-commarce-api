import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    orderItems:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"orderItems",
    },
    orderDate:{
        type:Date,
        default:Date.now(),
        required:true,
    },
    diliveryDate:{type:Date,
    default:Date.now()},
    shippingAddress:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'addresses'
    },
    paymentdetails:{
        paymentMethod:{
            type:String
        },
        paymentId:{
            type:String,
        },
        transactionId:{
            type:String,
        },
        paymentStatus:{
            type:String,
        }
    },
    totalPrice:{
        type:Number,
        required:true
    },
    totalDiscountprice:{
        type:Number,
        required:true
    },
    discounte:{
        type:Number,
        
    },
    orderStatus:{
        type:String,
        required:true,
        default:"pending"
    },
    totalItem:{
        type:Number,
        required:true
    }
},{timestamps:true})

const Order=mongoose.model('orders',orderSchema);
export default Order