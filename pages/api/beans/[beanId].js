import Bean from '../../../models/Bean';
import dbConnect from '../../../lib/db';

export default async function handler(req, res){
    const {method, query:{beanId}} = req;
    dbConnect();
    if(method === "GET"){
        try {
           const bean = await Bean.findById(beanId);
           res.status(200).json(bean) 
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
}