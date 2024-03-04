const products= require('../Models/productModel')

//get all produts

exports.getAllProductController= async (req,res)=>{
    try {

        const result = await products.find()
        res.status(200).json(result)
        
    } catch (error) {
        res.status(401).json(error)
        
    }
}