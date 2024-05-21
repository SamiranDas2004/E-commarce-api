import mongoose from "mongoose"

const mongodbURL="mongodb+srv://samiran4209:samiran123@cluster0.ad6qx0s.mongodb.net/"


const connectDB=()=>{
    return mongoose.connect(mongodbURL);
}

export default connectDB