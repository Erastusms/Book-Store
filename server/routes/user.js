const userRouter = require('express').Router();
const userController =require('../controllers/userController')

const upload = require('../middlewares/multer')
const {authen}= require('../middlewares/auth')

userRouter.get('/',userController.show)
userRouter.get('/profile',authen,userController.showById)
userRouter.post('/register',upload.single("avatar"),userController.register)
userRouter.post('/login',userController.login)
userRouter.put('/update',authen,upload.single("avatar"),userController.update)
userRouter.put('/UpdatePwd',authen,userController.updatePwd)
userRouter.delete('/delete/:id',userController.delete)


module.exports = userRouter