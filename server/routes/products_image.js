const imageRoute = require('express').Router();
const imageController = require('../controllers/imageController')
const {authen} = require('../middlewares/auth')

imageRoute.get('/',authen,imageController.show)
imageRoute.post('/create',authen,imageController.create)
imageRoute.put('/update/:id',authen,imageController.update)
imageRoute.delete('/delete/:id',authen,imageController.delete)

module.exports = imageRoute