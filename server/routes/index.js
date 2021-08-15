const router = require('express').Router();

router.get('/',(req,res)=>{
    res.status(200).json('Home')
})
const userRoute = require('./user')
const prodRoute = require('./product')
const orderRoute = require('./order')
const cartRoute =require('./shopping_cart')
const itemRoute = require('./line_item')
const imageRoute = require('./products_image')

router.use('/users',userRoute)
router.use('/products',prodRoute)
router.use('/orders',orderRoute)
router.use('/carts',cartRoute)
router.use('/items',itemRoute)
router.use('/images',imageRoute)

module.exports = router