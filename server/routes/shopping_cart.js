const cartRoute = require('express').Router();
const cartController = require('../controllers/cartController')

cartRoute.get('/',cartController.show)
cartRoute.get('/:id',cartController.showById)
cartRoute.post('/create',cartController.create)
cartRoute.put('/update/:id',cartController.update)
cartRoute.delete('/delete/:id',cartController.delete)


module.exports = cartRoute