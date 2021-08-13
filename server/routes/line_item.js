const itemRouter = require('express').Router()
const itemController = require('../controllers/itemController')
const {authen} = require('../middlewares/auth')

itemRouter.get('/',authen,itemController.show)
itemRouter.get('/myItems',authen,itemController.showByUser)
itemRouter.get('/:id',authen,itemController.showById)
itemRouter.post('/create',authen,itemController.create)
itemRouter.put('/update/:id',authen,itemController.update)
itemRouter.delete('/delete/:id',authen,itemController.delete)

module.exports = itemRouter