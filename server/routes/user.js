const userRouter = require("express").Router();
const userController = require("../controllers/userController");
const { authen } = require("../middlewares/auth");
const upload = require("../middlewares/multer");

userRouter.get("/", userController.show);
userRouter.get("/profile", authen, userController.showById);
// userRouter.post("/register", upload.single("avatar"), userController.register);
userRouter.post("/uploads", upload.single("avatar"), userController.upload);
userRouter.post("/register", userController.register);
userRouter.post("/addProduct", authen, userController.addProduct);
userRouter.post("/login", userController.login);
// userRouter.put("/update/:id", upload.single("avatar"), userController.update);
// userRouter.put("/UpdatePwd/:id", userController.updatePwd);
userRouter.put('/update', authen, userController.update)
userRouter.put('/updatePwd', authen, userController.updatePwd)
userRouter.delete("/delete/:id", userController.delete);

module.exports = userRouter;
