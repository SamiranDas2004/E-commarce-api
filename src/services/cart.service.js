import Cart from '../models/cart.models.js'; // Assuming this import is correct
import cartItem from '../models/cartItems.models.js';

import userService from './user.service.js';
import User from '../models/user.models.js';
import Product from '../models/product.models.js';

async function createCart(user) {
    try {
        const cart = new Cart({ user });
        if (!cart) {
            throw new Error(`user cart has not created.`);
        }

        const createdCart = await cart.save();
        return createdCart;
    } catch (error) {
        throw new Error(error.message);
    }
}


async function findUserCart(req,res){

    try {
        const user=req.body.userId
        const product= await Cart.find({user});
         if (!product) {
            throw new Error('product not found with id',user)
         }
         return res.send(product)
      } catch (error) {
       throw new Error(error.message)
      }
   
    // try {
    //     let cart=await Cart.findOne({user:user._id})
    //     let cartItems=await cartItem.find({cart:cart._id}).populate("product");
    //     cart.cartItems=cartItems;

    //     let totalPrice=0;
    //     let totalDiscountedprice=0;
    //     let totalItem=0;

    //     for(let cartItem of cart.cartItems){
    //         totalPrice+=cartItem.price;
    //         totalDiscountedprice+=Cart.discount;
    //         totalItem+=cartItem.quantity;
    //     }
    //     cart.totalPrice=totalPrice;
    //     cart.totalItem=totalItem;
    //     cart.discount=totalPrice-totalDiscountedprice

    //     return cart
    // } catch (error) {
    //     throw new Error(`some thing went wrong at findusercart meathod  .`);

    // }
}

async function addCartItem(req,res){
    try {

        //find user
        //check if the user is valid or not 
        // create the cart according to the user
        
        let newCart=[]
        const userId= req.body.userId;
        const user=await User.findById(userId);

        if (!user) {
            return res.send("user  not valid")
        }

        const cart=new Cart({
            user:user._id,
            totalPrice:req.body.totalPrice,
            totalDiscountPrice:req.body.totalDiscountPrice,
            discount:req.body.discount
        })
     newCart = await cart.save();
        return res.send(newCart)



    } catch (error) {
        throw new Error(error.message);

    }
}

export default {createCart,findUserCart,addCartItem}; // Exporting createCart directly





// let newCart=[]
// const userId= req.body.userId;
// const user=await User.findById(userId);

// if (!user) {
//     return res.send("user  not valid")
// }

// const cart=new Cart({
//     user:user._id,
//     totalPrice:req.body.totalPrice,
//     totalDiscountPrice:req.body.totalDiscountPrice,
//     discount:req.body.discount
// })
// newCart = await cart.save();
// return res.send(newCart)
