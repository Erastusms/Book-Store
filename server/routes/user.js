const userRouter = require('express').Router();
const userController =require('../controllers/userController')

const upload = require('../middlewares/multer')

userRouter.get('/',userController.show)
userRouter.get('/:id',userController.showById)
userRouter.post('/register',upload.single("avatar"),userController.register)
userRouter.post('/login',userController.login)
userRouter.put('/update/:id',upload.single("avatar"),userController.update)
userRouter.put('/UpdatePwd/:id',userController.updatePwd)
userRouter.delete('/delete/:id',userController.delete)


module.exports = userRouter