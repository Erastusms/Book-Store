const itemRouter = require('express').Router()
const itemController = require('../controllers/itemController')
const {authen,authorItem} = require('../middlewares/auth')

itemRouter.get('/',authen,itemController.show)
itemRouter.get('/:id',authen,itemController.showById)
itemRouter.post('/create',authen,itemController.create)
itemRouter.put('/update/:id',authen,authorItem,itemController.update)
itemRouter.delete('/delete/:id',authen,authorItem,itemController.delete)

module.exports = itemRouter