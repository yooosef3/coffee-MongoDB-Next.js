import Blog from '../../../models/Blog';
import dbConnect from '../../../lib/db';

export default async function handler(req, res){
    const {method, query:{blogId}} = req;
    dbConnect();
    if(method === "GET"){
        try {
           const blog = await Blog.findById(blogId);
           res.status(200).json(blog) 
        } catch (error) {
            res.status(500).json(error)
        }
    }

    if(method === "PUT"){
        try {
           const blog = await Blog.create(req.body);
           res.status(201).json(blog); 
        } catch (error) {
            res.status(500).json(error)
        }
    }

    if(method === "DELETE"){
        try {
           const blog = await Blog.create(req.body);
           res.status(201).json(blog); 
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
}