import mongoose, { Schema } from "mongoose";

const orderItems=new mongoose.Schema({

    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products',
        required:true
    },
    size:{
        type:String
    },
    quantity:{
        type:Number,required:true,
    },
    price:{
        type:isNumber,
        required:true
    },
    discountedPrice:{
        type:Number,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    deliveryDate:{
        type:Date,
    }

},{timestamps:true})