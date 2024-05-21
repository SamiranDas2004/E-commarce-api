import productService from "../services/product.service.js";

const createProduct=async(req,res)=>{
   try {
     const product=await productService.createProduct(req.body)
     return res.status(200).send(product);
   } catch (error) {
    throw new Error(error.message)
   }
}

const deleteProduct=async(req,res)=>{
    const productId=req.params;
    try {
      const product=await productService.deleteProduct(productId)
      return res.status(200).send(product);
    } catch (error) {
     throw new Error(error.message);
    }
 }

 const updateProduct=async(req,res)=>{
    const productId=req.params.id;
    if (!productId) {
      return res.send("productId is not found")
    }
    try {
      const product=await productService.updateProduct(productId,req.body)
      return res.status(200).send(product);
    } catch (error) {
     throw new Error(error.message)
    }
 }

 const findProductbyId=async(req,res)=>{
    const productId=req.params.id;
    try {
      const product=await productService.findProductById(productId)
      return res.status(200).send(product);
    } catch (error) {
     throw new Error(error.message)
    }
 }

 const getAllProduct=async(req,res)=>{
    const productId=req.params.id;
    try {
      const product=await productService.getAllProducts(req.query);
      if (!product) {
      return send.res({message:"product is not created"})
      }
      return res.status(200).send(product);
    } catch (error) {
     throw new Error(error.message)
    }
 }

 const createMultipleProduct=async(req,res)=>{
    const productId=req.params.id;
    try {
      const product=await productService.createMultipleProducts(req.body)
      return res.status(200).send({message:"product created successfully",status:true},product);
    } catch (error) {
     throw new Error(error.message)
    }
 }

 export {createMultipleProduct,createProduct,deleteProduct,updateProduct,getAllProduct,findProductbyId}