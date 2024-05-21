
import mongoose from "mongoose";

const cartSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    cartItems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cartItems",
        
    }],
    totalPrice:{
        type:Number,
        required:true,
        default:true
    },
    totalItem:{
        type:Number,
        default:0,
        required:true
    },
    totalDiscountPrice:{
        type:Number,
        required:true,
        default:0
    },
    discount:{
        type:Number,
        default:0,
        required:true
    }

},{timestamps:true})

const Cart=mongoose.model("carts",cartSchema);
export default Cart