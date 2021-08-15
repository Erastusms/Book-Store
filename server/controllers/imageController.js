const { Products_Image } = require("../models");

class imageController {
  static async show(req, res) {
    try {
      let images = await Products_Image.findAll({
        order: [["id", "ASC"]],
      });
      res.status(200).json(images);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async showByProd(req, res) {
    try {
      let ProductId = +req.params.ProductId;
      let images = await Products_Image.findAll(
        {
          where: { ProductId },
        },
        {
          order: [["id", "ASC"]],
        }
      );
      res.status(200).json(images);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async create(req, res) {
    try {
      const { primary, ProductId } = req.body;
      let filename = req.file.filename;
      let filesize = req.file.size;
      let filetype = req.file.mimetype;

      let images = await Products_Image.create({
        filename,
        filesize,
        filetype,
        primary,
        ProductId,
      });
      res.status(200).json(images);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async update(req, res) {
    try {
      let id = +req.params.id;
      const { primary, ProductId } = req.body;
      let filename = req.file.filename;
      let filesize = req.file.size;
      let filetype = req.file.mimetype;
      let images = await Products_Image.update(
        {
          filename,
          filesize,
          filetype,
          primary,
          ProductId,
        },
        {
          where: { id },
        }
      );
      images[0] === 1
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
      let images = await Products_Image.destroy({
        where: { id },
      });
      images === 1
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

module.exports = imageController;
