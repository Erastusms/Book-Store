const router = require('express').Router();

router.get('/',(req,res)=>{
    res.status(200).json('Home')
})
const userRouter = require('./user')
const prodRoute = require('./product')
const orderRoute = require('./order')

router.use('/users',userRouter)
router.use('/products',prodRoute)
router.use('/orders',orderRoute)

module.exports = router