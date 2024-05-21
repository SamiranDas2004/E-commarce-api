import Category from "../models/category.models.js"
import Product from "../models/product.models.js"

const createProduct=async(req,res)=>{
    // let topLevel= await Category.findOne({name:reqData.topLevelCategory})
    // if (!topLevel) {
    //     topLevel=new Category({
    //         name:reqData.topLevelCategory,
    //         lavel:1,
    //     })
    // }

    // let secondLevel=await Category.findOne({
    //     name:reqData.secondLevelCategory,
    //     parentCatagory:topLevel._id,
    // })

    // if (!secondLevel) {
    //     secondLevel=new Category({
    //         name:reqData.secondLevelCategory,
    //         parentCatagory:topLevel._id,
    //         level:2
    //     })
    // }

    // let thirdLevel=await Category.findOne({
    //     name:reqData.thirdLevelCategory,
    //     parentCatagory:secondLevel._id,
    // })

    // if (!thirdLevel) {
    //     thirdLevel=new Category({
    //     name:reqData.thirdLevelCategory,
    //     parentCatagory:secondLevel._id,
    //     level:3
    //     })
    // }

    try {
        const product = new Product({
            title: req.body.title,
            color:req.body.color,
            description:req.body.description,
            quantity:req.body.quantity,
            discountPrice:req.body.discountPrice,
            description:req.body.description
        });

        const savedProduct = await product.save();
       return res.send(savedProduct)
    } catch (error) {
        console.error('Error creating product:', error);
        throw new Error(error.message);
    }
}

const deleteProduct = async (req, res) => {
    const { productId } = req.body; // Extract the productId from req.body
    try {
        // Assuming findProductById is a function to find the product by its ID
        const delProduct = await findProductById(productId);

        // Ensure delProduct exists before attempting to delete it
        if (!delProduct) {
            throw new Error("Product not found");
        }

        // Now delete the product using the ID
        await Product.findByIdAndDelete(productId);

        return res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


const updateProduct=async(productId,reqData)=>{
    return await Product.findByIdAndUpdate(productId,reqData);
}

const findProductById=async(id)=>{
   try {
     const product= await Product.findById(id);
      if (!product) {
         throw new Error('product not found with id',id)
      }
      return product
   } catch (error) {
    throw new Error(error.message)
   }
}

const getAllProducts=async(reqQuery)=>{
//     let {category,color,sizes,minPrice,maxPrice,minDiscount,sort,stock,pageNumber,pageSize}=reqQuery;

//     pageSize=pageSize||10;

//     let query= await Product.find().populate("category");

//     if (category) {
//         const existCategory=await Category.findOne({name:category});
//         if (existCategory) {
//             query=query.where("category").equals(existCategory._id);
//         }
//         else{
//             return {content:[],curretPage:1,totalPages:0}
//         }
//     }

//     if(color){
//         const colorSet=new Set(color.split(",").map(color=>color.trim().toLowerCase()));

//         const colorRagex=colorSet.size>0?new RegExp([...colorSet].join("|"),"i"):null;

//         query=query.where("color").regex(colorRagex);
//     }
     
//     if(sizes){
//         const sizesSet=new set(sizes);
//         query.query.where("sizes.name").in([...sizesSet]);
//     }

//     if(minPrice&& maxPrice){
//         query=query.where('discountedPrice').gte(minPrice).ite(maxPrice);

//     }
//     if (minDiscount) {
//         query=query.where("discountPresent").get(minDiscount);
//     }

//     if (stock) {
//         if(stock=="in_stock")
//         query=query.where("quantity").get(0)

//         else if(stock=="out_of_stock")
//         query=query.where("quantity").get(1)
//     }

//     if(sort)
//     {
//         const sortDirection=sort=="price_hight"?-1:1;
//         query=query.sort({discountedPrice:sortDirection})
//     }

//     const totalProducts=await Product.countDocuments(query);
//     const skip=(pageNumber-1)*pageSize
//     query=query.skip(skip).limit(pageSize);

//     const products=await query.exec();
// const totalPages=Math.ceil(totalProducts/pageSize)
//     return{content:products,curretPage:pageNumber,totalPages}


try {
    const products= await Product.find();
    
    return products;

} catch (error) {
    throw new Error(error.message)
}
}

const createMultipleProducts=async(products)=>{
    for(let product of products){
        await createProduct(product)
    }
}

export default {createProduct,updateProduct,deleteProduct,getAllProducts,createMultipleProducts,findProductById}