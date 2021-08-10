const router = require('express').Router();

router.get('/',(req,res)=>{
    res.status(200).json('Home')
})
const userRouter = require('./user')
// const prodRoute = require('./product')

router.use('/users',userRouter)
// router.use('/product',prodRoute)

module.exports = router