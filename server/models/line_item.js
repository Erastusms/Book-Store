'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Line_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Line_Item.belongsTo(models.Product)
      Line_Item.belongsTo(models.Shopping_Cart)
      Line_Item.belongsTo(models.Order)
    }
  };
  Line_Item.init({
    qty: DataTypes.INTEGER,
    status: DataTypes.STRING(15),
    prod_id: DataTypes.INTEGER,
    shop_id: DataTypes.INTEGER,
    order_name: DataTypes.STRING(25),
    uniq_id: DataTypes.STRING(30)
  }, {
    sequelize,
    modelName: 'Line_Item',
  });
  return Line_Item;
};