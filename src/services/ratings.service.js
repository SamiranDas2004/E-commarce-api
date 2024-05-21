import Product from "../models/product.models.js";
import  {Ratings} from "../models/ratings.models.js";


const createRatings = async (req, res) => {
    // try {
    //     // Extract the product ID from the request body
    //     const productId = req.body.productId; // Assuming productId is the key for the product ID

    //     // Find the product by its ID
    //     const product = await Product.findById(productId);

    //     // Check if the product exists
    //     if (!product) {
    //         console.log("product not found");
    //     }

    //     // Create a new rating instance
    //     const rating = new Ratings({
    //         product: product._id,
    //         user: user._id,
    //         rating: req.rating,
    //         createdAt: new Date()
    //     });

    //     // Save the rating to the database
    //     const savedRating = await rating.save();

    //     // Return the saved rating
    //     return res.status(400).send(savedRating);
    // } catch (error) {
    //     throw new Error(error.message);
    // }
    try {
        const productId = req.body.productId;
        const product = await Product.findById(productId);

        if (!product) {
            console.log("Product not found with ID:", productId);
            return res.status(404).send("Product not found");
        }
        

        // Continue with rating creation logic...
    } catch (error) {
        console.error("Error creating rating:", error);
      
    }

};


const getProductRating=async(productId)=>{
    return await Ratings.find({product:productId})
}

export {createRatings,getProductRating}