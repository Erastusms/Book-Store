const userRouter = require('express').Router();
const userController =require('../controllers/userController')

userRouter.get('/',userController.show)
userRouter.post('/register',userController.register)
userRouter.post('/login',userController.login)
userRouter.put('/update/:id',userController.update)
userRouter.put('/UpdatePwd/:id',userController.updatePwd)
userRouter.delete('/delete/:id',userController.delete)


module.exports = userRouter