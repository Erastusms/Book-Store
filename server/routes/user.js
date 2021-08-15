const userRouter = require("express").Router();
const userController = require("../controllers/userController");
const { authen } = require("../middlewares/auth");
const upload = require("../middlewares/multer");

userRouter.get("/", userController.show);
userRouter.get("/profile", authen, userController.showById);
// userRouter.post("/register", upload.single("avatar"), userController.register);
userRouter.put(
  "/uploads",
  authen,
  upload.single("avatar"),
  userController.mult
);
userRouter.post("/register", upload.single("avatar"), userController.register);
userRouter.post("/login", userController.login);
userRouter.put("/update", authen, userController.update);
userRouter.put("/updatePwd", authen, userController.updatePwd);
userRouter.delete("/delete/:id", userController.delete);

module.exports = userRouter;
