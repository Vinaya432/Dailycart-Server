const  cartItems = require('../Models/cartModel')

//add to cart

exports.addTocartController= async(req,res)=>{
    const {id,title,image,price,quantity}= req.body
    const userId=req.payload

    try {
        const existingProduct = await cartItems.findOne({id,userId})
        if(existingProduct){
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.price* existingProduct.quantity
            await existingProduct.save()
            res.status(200).json("Items added sucessfully")
        }else{
            const newProduct = new cartItems({
                id,title,price,image,quantity,totalPrice:price,userId
            })
            await newProduct.save()
            res.status(200).json("Item added sucessfully to your cart")
        }
        
    } catch (error) {
        res.status(401).json(error)
    }

}

//get cart
exports.getCartController = async(req,res)=>{
    const userId= req.payload
    try {
        const allProducts= await cartItems.find({userId})
        res.status(200).json(allProducts)
        
    } catch (error) {
        res.status(401).json(error)
    }
}

//remove cart item
exports.removeCartItemController = async(req,res)=>{
    const {id} = req.params
    try {
        const removeProduct= await cartItems.findOneAndDelete({_id:id})
        res.status(200).json(removeProduct)

    } catch (error) {
        res.status(401).json(error)
    }

}

//increment item
exports.incrementItem= async (req,res)=>{
    const {id}=req.params

    try {
        const selectedProduct = await cartItems.findOne({_id:id})
        selectedProduct.quantity+=1
        selectedProduct.totalPrice=selectedProduct.quantity*selectedProduct.price
        await selectedProduct.save()
        res.status(200).json(selectedProduct)
        
    } catch (error) {
        res.status(401).json(error)
    }
}

//decrement cart item
exports.decrementItem= async (req,res)=>{
    const {id} = req.params
    try {

        const selectedProduct=await cartItems.findOne({_id:id})
        selectedProduct.quantity-=1
        if(selectedProduct.quantity==0){
            await cartItems.deleteOne({_id:id})
            res.status(200).json("Quantity updated")
        }else{
            selectedProduct.totalPrice=selectedProduct.quantity*selectedProduct.price
            await selectedProduct.save()
            res.status(200).json(selectedProduct)
        }
        
    } catch (error) {
        res.status(401).json(error)
    }
}

//empty cart

exports.emptyCartController= async(req,res)=>{
    const userId = req.payload
    try {
        const result = await cartItems.deleteMany({userId})
        res.status(200).json("deleted Sucessfully")
        
    } catch (error) {
        res.status(401).json(error)
    }
}