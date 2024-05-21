import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';

const app = express();

// Configure CORS to allow requests from any origin
const corsOptions = {
  origin: 'http://localhost:5173', // Allow requests from the frontend port
  optionsSuccessStatus: 200,
};
  app.use(cors(corsOptions));
app.use(express.json());

const port = 3000;

app.get("/",(req,res)=>{
    res.send("hello")
})



import authRouters from './routers/auth.router.js'
app.use('/auth',authRouters)

import userRouter from './routers/user.router.js';
app.use('/user',userRouter)


import productRoute from './routers/product.router.js'
app.use("/api/products",productRoute);
import adminRouter from './routers/admin.router.js'
app.use('/api/admin/products',adminRouter);

import cartRouter from './routers/cart.route.js'
app.use('/api/cart',cartRouter);

import cartItemRouter from './routers/cartItems.router.js';
app.use('/api/reviews',cartItemRouter);

import orderRouter from './routers/order.router.js'
app.use('/api/orders',orderRouter);

import reviewRouter from './routers/order.router.js';
app.use("/api/review",reviewRouter)

import ratingsRouter from './routers/ratings.router.js'
app.use("/api/ratings",ratingsRouter);

import adminOrderRouter from './routers/adminProduct.router.js'
app.use("/api/admin/orders",adminOrderRouter)






app.listen(port, async() => {
     await connectDB()
    console.log("Ecommerce server is listening on port", port);
});



export { app };
