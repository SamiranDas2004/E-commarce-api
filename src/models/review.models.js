import mongoose from "mongoose";

const reviewSchema=new mongoose.Schema({
    review:{
        type:String,
        required:true
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'products'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    }
})

const Review=mongoose.model('reviews',reviewSchema)
export  default Review