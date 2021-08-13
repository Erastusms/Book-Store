const userRouter = require('express').Router();
const userController =require('../controllers/userController')
const multer = require('multer')
const {diskStorage} = require('../middlewares/multer')
const upload = multer({
    diskStorage: diskStorage
  })

userRouter.get('/',userController.show)
userRouter.get('/:id',userController.showById)
userRouter.post('/register',userController.register)
userRouter.post('/login',userController.login)
userRouter.put('/update/:id',userController.update)
userRouter.put('/UpdatePwd/:id',userController.updatePwd)
userRouter.delete('/delete/:id',userController.delete)


module.exports = userRouter