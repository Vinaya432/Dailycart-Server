const express=require('express')
const productController= require('../Controllers/productController')
const userController=require('../Controllers/userController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const wishlistController = require('../Controllers/wishlistController')
const cartcontroller=require('../Controllers/cartController')

const router= new express.Router()

//getallproduct
router.get('/all-products',productController.getAllProductController)

//register
router.post('/register',userController.register)

//login
router.post('/login',userController.login)

//get a product
router.get('/view-product/:id',productController.getAProductController)

//add to wishlist
router.post('/add-to-wishlist',jwtMiddleware,wishlistController.addToWishlistController)
//get wishlist
router.get('/get-wishlist',jwtMiddleware,wishlistController.getWishlistController)

//remove from wishlist
router.delete('/wishlist-remove/:id',jwtMiddleware,wishlistController.removeProductWishlistController)

//add to cart
router.post('/add-to-cart',jwtMiddleware,cartcontroller.addTocartController)

//get cart items
router.get('/get-cart',jwtMiddleware,cartcontroller.getCartController)

//remove item frm cart
router.delete('/remove-cart/:id',jwtMiddleware,cartcontroller.removeCartItemController)

//cart increment
router.get('/cart-increment/:id',jwtMiddleware,cartcontroller.incrementItem)

//cart decrement
router.get('/cart-decrement/:id',jwtMiddleware,cartcontroller.decrementItem)

//empty cart
router.delete('/empty-cart',jwtMiddleware,cartcontroller.emptyCartController)






module.exports=router