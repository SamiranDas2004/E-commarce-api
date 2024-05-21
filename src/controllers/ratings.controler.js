import {createRatings,getProductRating} from '../services/ratings.service.js'

const createsRatings=async(req,res)=>{

    const user=req.user;
     try {
        const revieew= await createRatings(req.body,user);
        return res.status(200).send(revieew)
     } catch (error) {
        return res.status(500).send("something went wrong in the create review method")
     }
}

const getAllRatings=async(req,res)=>{
    const productId=req.params.productId
    const user=req.user;
     try {
        const revieew= await getProductRating(productId);
        return res.status(200).send(revieew)
     } catch (error) {
        return res.status(500).send("something went wrong in the get all review method")
     }
}


export default {createsRatings,getAllRatings}