const prodRouter = require('express').Router()
const prodController = require('../controllers/prodController')

prodRouter.get('/',prodController.show)
prodRouter.get('/:id',prodController.showById)
prodRouter.post('/create',prodController.create)
prodRouter.put('/update/:id',prodController.update)
prodRouter.delete('/delete/:id',prodController.delete)
module.exports = prodRouter