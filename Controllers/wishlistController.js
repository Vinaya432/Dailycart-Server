const wishlists= require('../Models/wishlistModel')

//add to wishlist
exports.addToWishlistController = async(req,res)=>{
    console.log("Inside wishlist controller");
    const {id,title,price,description,category,image,rating}=req.body
    const userId = req.payload
    console.log("user id:",userId);
    try {
        const existingProduct = await wishlists.findOne({id,userId})
        if(existingProduct){
            res.status(406).json("Item Alreadt available in wishlist...")
        }else{
            const newproduct = new wishlists({
                id,title,price,category,image,rating,description,userId
            })
            console.log(newproduct);
            await newproduct.save()
            res.status(200).json(newproduct)
        }
        
    } catch (error) {
        res.status(401).json(error)
    }
}

//get product
exports.getWishlistController = async (req,res)=>{
    const userId = req.payload
    try {
        const allProducts= await wishlists.find({userId})
        res.status(200).json(allProducts)
        
    } catch (error) {
        res.status(401).json(error)
    }
}

//remove item from wishlist
exports.removeProductWishlistController = async(req,res)=>{
    const {id} = req.params

    try {
        const removeProduct= await wishlists.findByIdAndDelete({_id:id})
        res.status(200).json(removeProduct)
        
    } catch (error) {
        res.status(401).json(error)
    }

}
