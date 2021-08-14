const prodRouter = require("express").Router();
const prodController = require("../controllers/prodController");
const { authen } = require("../middlewares/auth");

prodRouter.get("/", authen, prodController.show);
prodRouter.get("/:id", authen, prodController.showById);
prodRouter.post("/create", authen, prodController.create);
prodRouter.put("/update/:id", authen, prodController.update);
prodRouter.delete("/delete/:id", authen, prodController.delete);
module.exports = prodRouter;
