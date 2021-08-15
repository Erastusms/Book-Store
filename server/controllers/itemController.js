const { Line_Item } = require("../models");

class itemController {
  static async show(req, res) {
    try {
      let items = await Line_Item.findAll({
        order: [["id", "ASC"]],
      });
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async showById(req, res) {
    try {
      let id = +req.params.id;
      let items = await Line_Item.findByPk(id);
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async create(req, res) {
    try {
      const { qty, status, ProductId, ShoppingCartId, OrderId } = req.body;
      console.log(req.body);
      let items = await Line_Item.create({
        qty,
        status,
        ProductId,
        ShoppingCartId,
        OrderId,
      });
      console.log("oke");
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async update(req, res) {
    try {
      let id = +req.params.id;
      const { qty, status, ProductId, ShoppingCartId, OrderId } = req.body;
      let items = await Line_Item.update(
        {
          qty,
          status,
          ProductId,
          ShoppingCartId,
          OrderId,
        },
        {
          where: { id },
          individualHooks: true,
        }
      );
      items[0] === 1
        ? res.status(200).json({
            message: "data has been update",
          })
        : res.status(400).json({
            message: `id ${id} not found!`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async delete(req, res) {
    try {
      let id = +req.params.id;
      let items = await Line_Item.destroy({
        where: { id },
      });
      items === 1
        ? res.status(200).json({
            message: "data has been delete!",
          })
        : res.status(400).json({
            message: `id ${id} not found!`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = itemController;
