import mongoose from "mongoose";

const mongodbURL =
  "mongodb+srv://samiran4209:samiran123@cluster0.ad6qx0s.mongodb.net/";

const connectDB = () => {
  mongoose.connect(mongodbURL);
  console.log("mongoDB database connected");
};

export default connectDB;
