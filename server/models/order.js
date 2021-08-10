'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.hasMany(models.Line_Item)
      Order.belongsTo(models.User)
    }
  };
  Order.init({
    name: DataTypes.STRING(25),
    subtotal: DataTypes.INTEGER,
    discount: DataTypes.FLOAT,
    tax: DataTypes.FLOAT,
    total_due: DataTypes.FLOAT,
    total_qty: DataTypes.INTEGER,
    payt_trx_number: DataTypes.STRING,
    city: DataTypes.STRING(15),
    address: DataTypes.STRING(500),
    status: DataTypes.STRING(15),
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};