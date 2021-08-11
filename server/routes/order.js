const orderRouter = require('express').Router()
const orderController = require('../controllers/orderController')

orderRouter.get('/',orderController.show)
orderRouter.get('/:UserId',orderController.showById)
orderRouter.post('/create',orderController.create)
orderRouter.put('/update/:id',orderController.update)
orderRouter.delete('/delete/:id',orderController.delete)

module.exports = orderRouter