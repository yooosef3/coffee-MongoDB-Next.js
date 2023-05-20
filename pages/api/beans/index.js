import Bean from '../../../models/Bean';
import dbConnect from '../../../lib/db';

export default async function handler(req, res){
    const {method} = req;
    dbConnect();
    if(method === "GET"){
        try {
           const beans = await Bean.find();
           res.status(200).json(beans) 
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}