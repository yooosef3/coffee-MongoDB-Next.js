import Product from '../../../../models/Product'
import dbConnect from '../../../../lib/db';

export default async function handler(req, res){
    const {method, query:{productId}} = req;
    dbConnect();
    if(method === "GET"){
        try {
           const product = await Product.findById(productId);
           res.status(200).json(product) 
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    if(method === "PUT"){
        try {
           const product = await Product.create(req.body);
           res.status(201).json(product); 
        } catch (error) {
            res.status(500).json(error)
        }
    }

    if(method === "DELETE"){
        try {
           const product = await Product.create(req.body);
           res.status(201).json(product); 
        } catch (error) {
            res.status(500).json(error)
        }
    }
}