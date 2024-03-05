const express=require('express')
const productController= require('../Controllers/productController')
const userController=require('../Controllers/userController')

const router= new express.Router()

//getallproduct
router.get('/all-products',productController.getAllProductController)

//register
router.post('/register',userController.register)

//login
router.post('/login',userController.login)

module.exports=router