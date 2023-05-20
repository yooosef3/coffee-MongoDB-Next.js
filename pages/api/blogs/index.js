import Blog from '../../../models/Blog';
import dbConnect from '../../../lib/db';

export default async function handler(req, res){
    const {method} = req;
    dbConnect();
    if(method === "GET"){
        try {
           const blogs = await Blog.find();
           res.status(200).json(blogs) 
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}