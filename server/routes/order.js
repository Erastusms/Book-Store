const orderRouter = require('express').Router()
const orderController = require('../controllers/orderController')
const{authen,authorOrder} =require('../middlewares/auth')

orderRouter.get('/',authen,orderController.show)
orderRouter.get('/showById',authen,orderController.showById)
orderRouter.post('/create',authen,orderController.create)
orderRouter.put('/update/:id',authen,authorOrder,orderController.update)
orderRouter.delete('/delete/:id',authen,authorOrder,orderController.delete)

module.exports = orderRouter