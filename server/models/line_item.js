"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Line_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Line_Item.belongsTo(models.Product);
      Line_Item.belongsTo(models.Shopping_Cart);
      Line_Item.belongsTo(models.Order);
    }
  }
  Line_Item.init(
    {
      qty: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "qty cannot be empty!",
          },
        },
      },
      status: {
        type: DataTypes.STRING(15),
        validate: {
          notEmpty: {
            message: "status cannot be empty!",
          },
        },
      },
      ProductId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "ProductId cannot be empty!",
          },
        },
      },
      ShoppingCartId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "ShoppingCartId cannot be empty!",
          },
        },
      },
      OrderId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "OrderId cannot be empty!",
          },
        },
      },
      uniqId: {
        type: DataTypes.STRING(30),
        validate: {
          notEmpty: {
            message: "uniqId cannot be empty!",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate(item, options) {
          item.uniqId = `L${item.ProductId}${item.ShoppingCartId}${item.OrderId}I`;
        },
        beforeUpdate(item, options) {
          item.uniqId = `L${item.ProductId}${item.ShoppingCartId}${item.OrderId}I`;
        },
      },
      sequelize,
      modelName: "Line_Item",
    }
  );
  return Line_Item;
};
