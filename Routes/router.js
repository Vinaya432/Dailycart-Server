const express=require('express')
const productController= require('../Controllers/productController')

const router= new express.Router()

//getallproduct
router.get('/all-products',productController.getAllProductController)

module.exports=router