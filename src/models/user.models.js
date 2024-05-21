
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // Define your schema fields here
  username:{
    type: String,
    required: true,
  },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
     
      default: "customer",
    },
    number: {
      type: String,
    },
    addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: "addresses" }],

    paymentinformation:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"paymentinformation"
    }],
    ratings:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"reviews"
        }
    ],
  },
  { timestamps: true }
);

const User=mongoose.model("users",userSchema)

export default User