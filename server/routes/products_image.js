const imageRoute = require('express').Router();
const imageController = require('../controllers/imageController')
const {authen} = require('../middlewares/auth')
const upload = require('../middlewares/multer')

imageRoute.get('/',authen,imageController.show)
imageRoute.post('/create',authen,upload.single('image'),imageController.create)
imageRoute.put('/update/:id',authen,upload.single('image'),imageController.update)
imageRoute.delete('/delete/:id',authen,imageController.delete)

module.exports = imageRoute