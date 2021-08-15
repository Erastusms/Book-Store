const cartRoute = require("express").Router();
const cartController = require("../controllers/cartController");
const { authen, authorCart } = require("../middlewares/auth");

cartRoute.get("/", authen, cartController.show);
cartRoute.get("/myCarts", authen, cartController.showByUser);
cartRoute.get("/:id", authen, cartController.showById);
cartRoute.post("/create", authen, cartController.create);
cartRoute.put("/update/:id", authen, cartController.update);
cartRoute.delete("/delete/:id", authen, authorCart, cartController.delete);

module.exports = cartRoute;
