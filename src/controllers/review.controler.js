import { createReview,getAllReview} from '../services/review.service.js'

const createReview=async(req,res)=>{

    const user=req.user;
     try {
        const revieew= await createReview(req.body,user);
        return res.status(200).send(revieew)
     } catch (error) {
        return res.status(500).send("something went wrong in the create review method")
     }
}

const getAllReview=async(req,res)=>{
    const productId=req.params.productId
    const user=req.user;
     try {
        const revieew= await getAllReview(productId);
        return res.status(200).send(revieew)
     } catch (error) {
        return res.status(500).send("something went wrong in the get all review method")
     }
}

export default {createReview,getAllReview}