import Review from "../models/review.models";
import Product from "../models/product.models";
import productService from "./product.service";

const createReview=async(reqData,user)=>{
    const product=await productService.findProductById(reqData.productId);

    const review=new Review({
        user:user._id,
        product:Product._id,
        review:reqData.review,
        createdAt:new Date(),
    })
    await product.save();
    return await review.save()
}

const getAllReview=async(productId)=>{
    const product= await productService.findProductById(reqData.productId);

    return await Review.find({product:productId}).populate("user");
}

export { createReview,getAllReview}