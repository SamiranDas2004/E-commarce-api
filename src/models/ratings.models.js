import mongoose  from "mongoose";

const ratingSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products'
    },
    ratings:{
        type:Number,
        required:true
    }
},{timestamps:true})

const Ratings=mongoose.model("ratings",ratingSchema)
export { Ratings}